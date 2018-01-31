pragma solidity ^0.4.17;

import "zeppelin-solidity/contracts/ownership/Ownable.sol";

contract MultiSigTransfer is Ownable {
  string public name = "MultiSigTransfer";
  string public symbol = "MST";
  bool public complete = false;
  uint32 public quantity;
  address public targetAddress;
  address public fromAddress;

  function MultiSigTransfer(uint32 quantityIn, address targetAddressIn, address fromAddressIn) public {
    quantity = quantityIn;
    targetAddress = targetAddressIn;
    fromAddress = fromAddressIn;
  }

  function approveTransfer() public onlyOwner {
    require(complete == false);
    complete = true;
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

  function isPending() public view returns (bool) {
    return !complete;
  }
}
