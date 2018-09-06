pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/BasicToken.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/ownership/rbac/RBAC.sol";
import "./MultiSigTransfer.sol";

contract KinesisVelocityToken is BasicToken, Ownable, RBAC {
  string public name = "KinesisVelocityToken";
  string public symbol = "KVT";
  uint8 public decimals = 0;
  string public constant ADMIN_ROLE = "ADMIN";

  address[] public transfers;

  uint public constant INITIAL_SUPPLY = 300000;
  uint public totalSupply = 0;

  bool public isTransferable = false;
  bool public toggleTransferablePending = false;
  address public transferToggleRequester = address(0);

  constructor() public {
    totalSupply = INITIAL_SUPPLY;
    balances[msg.sender] = INITIAL_SUPPLY;
    addRole(msg.sender, ADMIN_ROLE);
  }

  /**
  * @dev Determine if the address is the owner of the contract
  * @param _address The address to determine of ownership
  */
  function isOwner(address _address) public view returns (bool) {
    return owner == _address;
  }

  /**
  * @dev Returns the list of MultiSig transfers
  */
  function getTransfers() public view returns (address[]) {
    return transfers;
  }

  /**
  * @dev The KVT ERC20 token uses adminstrators to handle transfering to the crowdsale, vesting and pre-purchasers
  */
  function isAdmin(address _address) public view returns (bool) {
    return hasRole(_address, ADMIN_ROLE);
  }

  /**
  * @dev Set an administrator as the owner, using Open Zepplin RBAC implementation
  */
  function setAdmin(address _newAdmin) public onlyOwner {
    return addRole(_newAdmin, ADMIN_ROLE);
  }

  /**
  * @dev Remove an administrator as the owner, using Open Zepplin RBAC implementation
  */
  function removeAdmin(address _oldAdmin) public onlyOwner {
    return removeRole(_oldAdmin, ADMIN_ROLE);
  }

  /**
  * @dev As an administrator, request the token is made transferable
  * @param _toState The transfer state being requested
  */
  function setTransferable(bool _toState) public onlyRole(ADMIN_ROLE) {
    require(isTransferable != _toState, "to init a transfer toggle, the toState must change");
    toggleTransferablePending = true;
    transferToggleRequester = msg.sender;
  }

  /**
  * @dev As an administrator who did not make the request, approve the transferable state change
  */
  function approveTransferableToggle() public onlyRole(ADMIN_ROLE) {
    require(toggleTransferablePending == true, "transfer toggle not in pending state");
    require(transferToggleRequester != msg.sender, "the requester cannot approve the transfer toggle");
    isTransferable = !isTransferable;
    toggleTransferablePending = false;
    transferToggleRequester = address(0);
  }

  /**
  * @dev transfer token for a specified address
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function _transfer(address _to, address _from, uint256 _value) private returns (bool) {
    require(_value <= balances[_from], "the balance in the from address is smaller than the tx value");

    // SafeMath.sub will throw if there is not enough balance.
    balances[_from] = balances[_from].sub(_value);
    balances[_to] = balances[_to].add(_value);
    emit Transfer(_from, _to, _value);
    return true;
  }

  /**
  * @dev Public transfer token function. This wrapper ensures the token is transferable
  * @param _to The address to transfer to.
  * @param _value The amount to be transferred.
  */
  function transfer(address _to, uint256 _value) public returns (bool) {
    require(_to != address(0), "cannot transfer to the zero address");

    /* We allow holders to return their Tokens to the contract owner at any point */
    if (_to != owner && msg.sender != crowdsale) {
      require(isTransferable == true, "kvt is not yet transferable");
    }

    /* Transfers from the owner address must use the administrative transfer */
    require(msg.sender != owner, "the owner of the kvt contract cannot transfer");

    return _transfer(_to, msg.sender, _value);
  }

  /**
  * @dev Request an administrative transfer. This does not move tokens
  * @param _to The address to transfer to.
  * @param _quantity The amount to be transferred.
  */
  function adminTransfer(address _to, uint32 _quantity) public onlyRole(ADMIN_ROLE) {
    address newTransfer = new MultiSigTransfer(_quantity, _to, msg.sender);
    transfers.push(newTransfer);
  }

  /**
  * @dev Approve an administrative transfer. This moves the tokens if the requester
  * is an admin, but not the same admin as the one who made the request
  * @param _approvedTransfer The contract address of the multisignature transfer.
  */
  function approveTransfer(address _approvedTransfer) public onlyRole(ADMIN_ROLE) returns (bool) {
    MultiSigTransfer transferToApprove = MultiSigTransfer(_approvedTransfer);

    uint32 transferQuantity = transferToApprove.quantity();
    address deliveryAddress = transferToApprove.targetAddress();
    address requesterAddress = transferToApprove.requesterAddress();

    require(msg.sender != requesterAddress, "a requester cannot approve an admin transfer");

    transferToApprove.approveTransfer();
    return _transfer(deliveryAddress, owner, transferQuantity);
  }

  /**
  * @dev Deny an administrative transfer. This ensures it cannot be approved.
  * @param _approvedTransfer The contract address of the multisignature transfer.
  */
  function denyTransfer(address _approvedTransfer) public onlyRole(ADMIN_ROLE) returns (bool) {
    MultiSigTransfer transferToApprove = MultiSigTransfer(_approvedTransfer);
    transferToApprove.denyTransfer();
  }

  address public crowdsale = address(0);

  /**
  * @dev Any admin can set the current crowdsale address, to allows transfers
  * from the crowdsale to the purchaser
  */
  function setCrowdsaleAddress(address _crowdsaleAddress) public onlyRole(ADMIN_ROLE) {
    crowdsale = _crowdsaleAddress;
  }
}
