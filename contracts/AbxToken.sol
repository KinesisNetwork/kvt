pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/StandardToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./MultiSigTransfer.sol";

contract AbxToken is BasicToken, Ownable {
  string public name = "ABXToken";
  string public symbol = "ABXT";
  uint8 public decimals = 0;
  address public approver = address(0);
  address[] public transfers;

	/* This is 0.1 ETH */
  uint256 public pricePerTokenInWei = 100000000000000000;

  uint public INITIAL_SUPPLY = 1000000;
  bool public isTransferable = false;

  bool burnIsPending = false;
  bool toggleTransferablePending = false;

  function AbxToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }

	// /* Allow a the owner of the smart contract to enable transfers by regular holders */
	// function makeTransferable() public onlyOwner {
  //   makeTransferableIsPending = true;
  // }

	// /* Allows the owner to disable transfers of the token */
	// function disableTransfers() public onlyOwner {
	// 	disableTransfersIsPending = false;
  // }

  function getTransferableState() public view returns (bool) {
    return isTransferable;
  }

  function isToggleTransferablePending() public view returns (bool) {
    return toggleTransferablePending;
  }

  function setTransferable(bool toState) public onlyOwner {
    require(isTransferable != toState);
    toggleTransferablePending = true;
  }

  function approveTransferableToggle() public {
    require(msg.sender == approver);
    require(toggleTransferablePending == true);
    isTransferable = !isTransferable;
    toggleTransferablePending = false;
  }

	/* Set price in wei */
	function setPriceInWei(uint256 tokenPrice) public onlyOwner {
		pricePerTokenInWei = tokenPrice;
  }

  /**
  * @dev transfer token for a specified address
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function _transfer(address _to, address _from, uint256 _value) private returns (bool) {
    require(_to != address(0));
    require(_value <= balances[_from]);

    // SafeMath.sub will throw if there is not enough balance.
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    Transfer(_from, _to, _value);
    return true;
  }

  function transfer(address _to, uint256 _value) public returns (bool) {
    require(isTransferable == true);
    require(msg.sender != owner);
    return _transfer(_to, msg.sender, _value);
  }

  function adminTransfer(address _to, uint32 _quantity) public onlyOwner {
    MultiSigTransfer newTransfer = new MultiSigTransfer(_quantity, _to);
    transfers.push(newTransfer);
    // return address(newTransfer);
  }

  function approveTransfer(address approvedTransfer) public returns (bool) {
    require(msg.sender == approver);
    MultiSigTransfer transferToApprove = MultiSigTransfer(approvedTransfer);
    uint32 transferQuantity = transferToApprove.getQuantity();
    address deliveryAddress = transferToApprove.getTargetAddress();
    transferToApprove.approveTransfer();
    return _transfer(deliveryAddress, owner, transferQuantity);
  }

  /* This is a payable copy of the above function that, when the correct eth is provided, moves tokens from
  the owner, to the buyer */
  function buyToken(uint256 quantity) public payable returns (bool) {
    require(msg.sender != owner);
    require(msg.sender != approver);

    /* Transfer the set wei to abx, then we give the user their token */
    owner.transfer(quantity * pricePerTokenInWei);

    return _transfer(msg.sender, owner, quantity);
  }

  function burnUnsoldTokens() internal {
    uint256 unsoldTokens = balances[owner];
    balances[owner] = balances[owner].sub(unsoldTokens);
    totalSupply = totalSupply.sub(unsoldTokens);
  }

  function startBurn() public onlyOwner {
    burnIsPending = true;
  }

  function cancelBurn() public onlyOwner {
    burnIsPending = false;
  }

  function isBurnPending() public view returns (bool) {
    return burnIsPending;
  }

  function approveBurn() public {
    require(msg.sender == approver);
    require(balances[owner] != 0);
    require(burnIsPending == true);
    burnUnsoldTokens();
  }

  /* balanceOf is already implemented. So we just need a getTotalSupply() so we can show users the percentage they own */
	function getTotalSupply() public view returns (uint256) {
		return totalSupply;
	}

	function getPrice() public view returns (uint256) {
		return pricePerTokenInWei;
	}

  /* We will use this check to determine if the person viewing the page is the owner of the smart contract */
	function isOwner() public view returns (bool) {
		return owner == msg.sender;
	}

  function setApprover(address newApprover) public onlyOwner {
    require(approver == address(0));
    approver = newApprover;
  } 

  function isApprover() public view returns (bool) {
    return approver == msg.sender;
  }

  function getTransfers() public view returns (address[]) {
    return transfers;
  }
}
