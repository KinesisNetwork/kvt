pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract MultiSigTransfer is Ownable {
  string public name = "MultiSigTransfer";
  string public symbol = "MST";
  bool public complete = false;
  bool public denied = false;
  uint32 public quantity;
  address public targetAddress;
  address public fromAddress;
  address public requesterAddress;

  constructor(
    uint32 quantityIn,
    address targetAddressIn,
    address fromAddressIn,
    address requesterAddressIn
  ) public {
    quantity = quantityIn;
    targetAddress = targetAddressIn;
    fromAddress = fromAddressIn;
    requesterAddress = requesterAddressIn;
  }

  function approveTransfer() public onlyOwner {
    require(complete == false);
    complete = true;
  }

  function denyTransfer() public onlyOwner {
    require(denied == false);
    denied = true;
  }

  function getQuantity() public view returns (uint32) {
    return quantity;
  }

  function getTargetAddress() public view returns (address) {
    return targetAddress;
  }

  function getFromAddress() public view returns (address) {
    return fromAddress;
  }

  function getRequesterAddress() public view returns (address) {
    return requesterAddress;
  }

  function isPending() public view returns (bool) {
    return !complete;
  }
}
