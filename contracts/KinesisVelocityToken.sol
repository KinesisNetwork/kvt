pragma solidity ^0.4.23;

import "zeppelin-solidity/contracts/token/ERC20/StandardToken.sol";
import "zeppelin-solidity/contracts/ownership/Ownable.sol";
import "zeppelin-solidity/contracts/ownership/rbac/RBAC.sol";
import "./MultiSigTransfer.sol";

contract KinesisVelocityToken is BasicToken, Ownable, RBAC {
  string public name = "KinesisVelocityToken";
  string public symbol = "KVT";
  uint8 public decimals = 0;
  string public constant ADMIN_ROLE = "admin";

  address[] public transfers;

	/* This is 0.1 ETH */
  uint256 public pricePerTokenInWei = 100000000000000000;

  uint public INITIAL_SUPPLY = 300000;
  uint public totalSupply = 0;

  bool public isTransferable = false;
  bool toggleTransferablePending = false;
  address transferToggleRequester = address(0);

  /*
    We treat the God address as our trust account.
    Only whitelisted admins can move funds from this account
  */
  address trustAccount = address(0);

  constructor() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    addRole(msg.sender, ADMIN_ROLE);
  }

	function isOwner() public view returns (bool) {
		return owner == msg.sender;
	}

  function isAdmin() public view returns (bool) {
    /* Inherited from Whitelist.sol */
    return hasRole(msg.sender, ADMIN_ROLE);
  }

  function setAdmin(address newAdmin) public onlyOwner {
    return addRole(newAdmin, ADMIN_ROLE);
  }

  function removeAdmin(address oldAdmin) public onlyOwner {
    return removeRole(oldAdmin, ADMIN_ROLE);
  }

  /* Multi-Signature on Transferable state */
  function getTransferableState() public view returns (bool) {
    return isTransferable;
  }

  function isToggleTransferablePending() public view returns (bool) {
    return toggleTransferablePending;
  }

  function setTransferable(bool toState) public onlyRole(ADMIN_ROLE) {
    require(isTransferable != toState);
    toggleTransferablePending = true;
    transferToggleRequester = msg.sender;
  }

  function approveTransferableToggle() public onlyRole(ADMIN_ROLE) {
    require(toggleTransferablePending == true);
    require(transferToggleRequester != msg.sender);
    isTransferable = !isTransferable;
    toggleTransferablePending = false;
    transferToggleRequester = address(0);
  }

  /* Multi-Signature on Price Changes */
  uint256 pendingPriceChange = 0;
  address priceChangeRequester = address(0);

  function getPendingPriceChange() public view returns (uint256) {
    return pendingPriceChange;
  }

  function requestPriceChange(uint priceChangeInWei) public onlyRole(ADMIN_ROLE) {
    pendingPriceChange = priceChangeInWei;
    priceChangeRequester = msg.sender;
  }

  function approvePriceChange() public onlyRole(ADMIN_ROLE) {
    require(msg.sender != priceChangeRequester);
    require(pendingPriceChange != 0);
    pricePerTokenInWei = pendingPriceChange;
    pendingPriceChange = 0;
    priceChangeRequester = address(0);
  }

  /**
  * @dev transfer token for a specified address
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function _transfer(address _to, address _from, uint256 _value) private returns (bool) {
    // We allow admins to transfer to the zero address, to reserve the funds
    if (!hasRole(_from, ADMIN_ROLE)) {
      require(_to != address(0));
    }

    require(_value <= balances[_from]);

    // SafeMath.sub will throw if there is not enough balance.
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    emit Transfer(_from, _to, _value);
    return true;
  }

  function transfer(address _to, uint256 _value) public returns (bool) {
    if (_to != owner) {
      require(isTransferable == true);
    }

    require(!hasRole(msg.sender, ADMIN_ROLE));
    return _transfer(_to, msg.sender, _value);
  }

  /* Transfer funds from the Trust 0x00 Address to the desired location */
  function trustTransfer(address to, uint32 quantity) public onlyRole(ADMIN_ROLE) {
    newMultiSigTransfer(trustAccount, to, msg.sender, quantity);
  }

  function adminTransfer(address to, uint32 quantity) public onlyRole(ADMIN_ROLE) {
    newMultiSigTransfer(owner, to, msg.sender, quantity);
  }

  function newMultiSigTransfer(address from, address to, address requester, uint32 quantity) internal {
    address newTransfer = new MultiSigTransfer(quantity, to, from, requester);
    transfers.push(newTransfer);
  }

  function approveTransfer(address approvedTransfer) public onlyRole(ADMIN_ROLE) returns (bool) {
    MultiSigTransfer transferToApprove = MultiSigTransfer(approvedTransfer);
    uint32 transferQuantity = transferToApprove.getQuantity();
    address deliveryAddress = transferToApprove.getTargetAddress();
    address fromAddress = transferToApprove.getFromAddress();
    address requesterAddress = transferToApprove.getRequesterAddress();
    require(msg.sender != requesterAddress);
    transferToApprove.approveTransfer();
    return _transfer(deliveryAddress, fromAddress, transferQuantity);
  }

  function denyTransfer(address approvedTransfer) public onlyRole(ADMIN_ROLE) returns (bool) {
    MultiSigTransfer transferToApprove = MultiSigTransfer(approvedTransfer);
    transferToApprove.denyTransfer();
  }

  /* This is a payable copy of the above function that, when the correct eth is provided, moves tokens from
  the owner, to the buyer */
  function buyToken(uint256 quantity) public payable returns (bool) {
    require(!hasRole(msg.sender, ADMIN_ROLE));

    /* Transfer the set wei to abx, then we give the user their token */
    owner.transfer(quantity * pricePerTokenInWei);

    return _transfer(msg.sender, owner, quantity);
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
