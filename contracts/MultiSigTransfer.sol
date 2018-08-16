pragma solidity ^0.4.17;

import "openzeppelin-solidity/contracts/ownership/Ownable.sol";

contract MultiSigTransfer is Ownable {
  string public name = "MultiSigTransfer";
  string public symbol = "MST";
  bool public complete = false;
  bool public denied = false;
  uint32 public quantity;
  address public targetAddress;
  address public requesterAddress;

  /**
  * @dev The multisig transfer contract ensures that no single administrator can
  * KVTs without approval of another administrator
  * @param _quantity The number of KVT to transfer
  * @param _targetAddress The receiver of the KVTs
  * @param _requesterAddress The administrator requesting the transfer
  */
  constructor(
    uint32 _quantity,
    address _targetAddress,
    address _requesterAddress
  ) public {
    quantity = _quantity;
    targetAddress = _targetAddress;
    requesterAddress = _requesterAddress;
  }

  /**
  * @dev Mark the transfer as approved / complete
  */
  function approveTransfer() public onlyOwner {
    require(denied == false);
    require(complete == false);
    complete = true;
  }

  /**
  * @dev Mark the transfer as denied
  */
  function denyTransfer() public onlyOwner {
    require(denied == false);
    denied = true;
  }

  /**
  * @dev Determine if the transfer is pending
  */
  function isPending() public view returns (bool) {
    return !complete;
  }
}
