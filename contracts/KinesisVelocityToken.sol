pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/token/StandardToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "./MultiSigTransfer.sol";

contract KinesisVelocityToken is BasicToken, Ownable {
  string public name = "KinesisVelocityToken";
  string public symbol = "KVT";
  uint8 public decimals = 0;
  address public approver = address(0);
  address public trustAccount = address(0);

  address[] public transfers;

	/* This is 0.1 ETH */
  uint256 public pricePerTokenInWei = 100000000000000000;

  uint public INITIAL_SUPPLY = 250000;
  bool public isTransferable = false;

  bool burnIsPending = false;
  bool toggleTransferablePending = false;

  function KinesisVelocityToken() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
  }
  /* We will use this check to determine if the person viewing the page is the owner of the smart contract */
	function isOwner() public view returns (bool) {
		return owner == msg.sender;
	}

  function isApprover() public view returns (bool) {
    return approver == msg.sender;
  }

  function isTrustAccount() public view returns (bool) {
    return trustAccount == msg.sender;
  }

  function setApprover(address newApprover) public onlyOwner {
    require(approver == address(0));
    require(newApprover != owner);
    require(newApprover != trustAccount);
    approver = newApprover;
  }

  function getApprover() public view returns (address) {
    return approver;
  }

  function setTrustAccount(address newTrust) public onlyOwner {
    require(trustAccount == address(0));
    require(newTrust != owner);
    require(newTrust != approver);
    trustAccount = newTrust;
  }

  function getTrustAccount() public view returns (address) {
    return trustAccount;
  }

  /* Multi-Signature on Transferable state */
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

  /* Multi-Signature on Price Changes */
  uint256 pendingPriceChange = 0;

  function getPendingPriceChange() public view returns (uint256) {
    return pendingPriceChange;
  }

  function requestPriceChange(uint priceChangeInWei) public onlyOwner {
    pendingPriceChange = priceChangeInWei;
  }

  function approvePriceChange() public {
    require(msg.sender == approver);
    require(pendingPriceChange != 0);
    pricePerTokenInWei = pendingPriceChange;
    pendingPriceChange = 0;
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
    if (_to != owner) {
      require(isTransferable == true);
    }
    require(msg.sender != owner && msg.sender != trustAccount);
    return _transfer(_to, msg.sender, _value);
  }

  function trustTransfer(address to, uint32 quantity) public {
    require(msg.sender == trustAccount);
    newMultiSigTransfer(trustAccount, to, quantity);
  }

  function adminTransfer(address to, uint32 quantity) public onlyOwner {
    newMultiSigTransfer(owner, to, quantity);
  }

  function newMultiSigTransfer(address from, address to, uint32 quantity) internal {
    address newTransfer = new MultiSigTransfer(quantity, to, from);
    transfers.push(newTransfer);
  }

  function approveTransfer(address approvedTransfer) public returns (bool) {
    require(msg.sender == approver);
    MultiSigTransfer transferToApprove = MultiSigTransfer(approvedTransfer);
    uint32 transferQuantity = transferToApprove.getQuantity();
    address deliveryAddress = transferToApprove.getTargetAddress();
    address fromAddress = transferToApprove.getFromAddress();
    transferToApprove.approveTransfer();
    return _transfer(deliveryAddress, fromAddress, transferQuantity);
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

  /* Multi sig for burning unsold tokens */
  function burnUnsoldTokens() internal {
    uint256 unsoldTokens = balances[owner];
    balances[owner] = balances[owner].sub(unsoldTokens);
    totalSupply = totalSupply.sub(unsoldTokens);
    burnIsPending = false;
  }

  function startBurn() public onlyOwner {
    burnIsPending = true;
  }

  function cancelBurn() public {
    require(msg.sender == owner || msg.sender == approver);
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


  function getTransfers() public view returns (address[]) {
    return transfers;
  }
}
