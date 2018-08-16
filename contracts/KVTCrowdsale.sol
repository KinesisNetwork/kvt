pragma solidity ^0.4.24;

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol";
import "openzeppelin-solidity/contracts/math/SafeMath.sol";
import "openzeppelin-solidity/contracts/token/ERC20/SafeERC20.sol";
import "openzeppelin-solidity/contracts/ownership/Ownable.sol";
import "openzeppelin-solidity/contracts/ownership/rbac/RBAC.sol";

/**
 * @title Crowdsale
 * @dev Crowdsale is a base contract for managing a token crowdsale,
 * allowing investors to purchase tokens with ether. This contract implements
 * such functionality in its most fundamental form and can be extended to provide additional
 * functionality and/or custom behavior.
 * The external interface represents the basic interface for purchasing tokens, and conform
 * the base architecture for crowdsales. They are *not* intended to be modified / overriden.
 * The internal interface conforms the extensible and modifiable surface of crowdsales. Override
 * the methods to add functionality. Consider using 'super' where appropiate to concatenate
 * behavior.
 */

// NB: Content from openzepplin-solidity/contracts/crowdsale/Crowdsale.sol
// When inheriting Crowdsale, deployments became an issue with gas limits
contract KVTCrowdsale is Ownable, RBAC {
  using SafeMath for uint256;
  using SafeERC20 for ERC20;

  // The token being sold
  ERC20 public token;

  // Address where funds are collected
  address public wallet;

  // How many wei required per token unit
  uint256 public rate;

  // Amount of wei raised
  uint256 public weiRaised;

  /**
   * Event for token purchase logging
   * @param purchaser who paid for the tokens
   * @param beneficiary who got the tokens
   * @param value weis paid for purchase
   * @param amount amount of tokens purchased
   */
  event TokenPurchase(
    address indexed purchaser,
    address indexed beneficiary,
    uint256 value,
    uint256 amount
  );

  /**
   * @param _rate Number of token units a buyer gets per wei
   * @param _wallet Address where collected funds will be forwarded to
   * @param _token Address of the token being sold
   */
  constructor(uint256 _rate, address _wallet, ERC20 _token) public {
    require(_rate > 0);
    require(_wallet != address(0));
    require(_token != address(0));

    rate = _rate;
    wallet = _wallet;
    token = _token;

    addRole(msg.sender, ADMIN_ROLE);
  }

  // -----------------------------------------
  // Crowdsale external interface
  // -----------------------------------------

  /**
   * @dev fallback function ***DO NOT OVERRIDE***
   */
  function () external payable {
    buyTokens(msg.sender);
  }

  /**
   * @dev low level token purchase ***DO NOT OVERRIDE***
   * @param _beneficiary Address performing the token purchase
   */
  function buyTokens(address _beneficiary) public payable {

    uint256 weiAmount = msg.value;
    _preValidatePurchase(_beneficiary, weiAmount);

    // calculate token amount to be created
    uint256 tokens = _getTokenAmount(weiAmount);

    // update state
    weiRaised = weiRaised.add(weiAmount);

    _processPurchase(_beneficiary, tokens);
    emit TokenPurchase(
      msg.sender,
      _beneficiary,
      weiAmount,
      tokens
    );

    _forwardFunds();
  }

  // -----------------------------------------
  // Internal interface (extensible)
  // -----------------------------------------

  /**
   * @dev Source of tokens. Override this method to modify the way in which the crowdsale ultimately gets and sends its tokens.
   * @param _beneficiary Address performing the token purchase
   * @param _tokenAmount Number of tokens to be emitted
   */
  function _deliverTokens(
    address _beneficiary,
    uint256 _tokenAmount
  )
    internal
  {
    token.safeTransfer(_beneficiary, _tokenAmount);
  }

  /**
   * @dev Executed when a purchase has been validated and is ready to be executed. Not necessarily emits/sends tokens.
   * @param _beneficiary Address receiving the tokens
   * @param _tokenAmount Number of tokens to be purchased
   */
  function _processPurchase(
    address _beneficiary,
    uint256 _tokenAmount
  )
    internal
  {
    _deliverTokens(_beneficiary, _tokenAmount);
  }

  /**
   * @dev Determines how ETH is stored/forwarded on purchases.
   */
  function _forwardFunds() internal {
    wallet.transfer(msg.value);
  }

  /* Custom Behaviour */
  string public constant ADMIN_ROLE = "ADMIN";
  string public constant PURCHASER_ROLE = "PURCHASER";

  /**
  * @dev Number of KVT calculated by dividing the wei provided, by the rate per KVT
  * @param _weiAmount Value in wei to be converted into tokens
  * @return Number of tokens that can be purchased with the specified _weiAmount
  */
  function _getTokenAmount(uint256 _weiAmount)
    internal view returns (uint256)
  {
    return _weiAmount.div(rate);
  }

  /**
  * @dev Validation of an incoming purchase. The purchaser must have the purchaser role
  * @param _beneficiary Address performing the token purchase
  * @param _weiAmount Value in wei involved in the purchase
  */
  function _preValidatePurchase(
    address _beneficiary,
    uint256 _weiAmount
  )
    internal view
  {
    require(_beneficiary != address(0));
    require(_weiAmount != 0);
    require(hasRole(_beneficiary, PURCHASER_ROLE));
    require(!isFinalized);
  }

  /**
  * @dev The KVT Crowdsale uses adminstrators to handle updating the rate
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
  * @dev Purchasers must complete KYC before being able to participate in the public sale
  */
  function isPurchaser(address _address) public view returns (bool) {
    return hasRole(_address, PURCHASER_ROLE);
  }

  /**
  * @dev Add a purchaser to the contract
  */
  function setPurchaser(address _newPurchaser) public onlyRole(ADMIN_ROLE) {
    return addRole(_newPurchaser, PURCHASER_ROLE);
  }

  /* Multi-Signature on Price Changes */
  uint256 public pendingPriceChange = 0;
  address public priceChangeRequester = address(0);

  function requestPriceChange(uint _priceChangeInWei) public onlyRole(ADMIN_ROLE) {
    pendingPriceChange = _priceChangeInWei;
    priceChangeRequester = msg.sender;
  }

  function approvePriceChange() public onlyRole(ADMIN_ROLE) {
    require(msg.sender != priceChangeRequester);
    require(pendingPriceChange != 0);
    rate = pendingPriceChange;
    pendingPriceChange = 0;
    priceChangeRequester = address(0);
  }

  /* Crowdsale Finalization returns remaining KVT back to the owner */
  bool public isFinalized = false;
  bool public pendingFinalization = false;
  address public finalizationRequester = address(0);

  event Finalized();

  /**
  * @dev Approve the end of the crowdsale
  */
  function requestFinalize() public onlyRole(ADMIN_ROLE) {
    require(!isFinalized);
    pendingFinalization = true;
    finalizationRequester = msg.sender;
  }

  /**
  * @dev Approve the end of the crowdsale
  */
  function approveFinalize() public onlyRole(ADMIN_ROLE) {
    require(!isFinalized);
    require(pendingFinalization);
    require(msg.sender != finalizationRequester);

    finalization();
    emit Finalized();

    pendingFinalization = false;
    isFinalized = true;
  }

  /**
  * @dev On finalization, remaining tokens are moved back to the owner
  */
  function finalization() internal {
    uint256 remainingCrowdsaleBalance = token.balanceOf(this);
    token.safeTransfer(owner, remainingCrowdsaleBalance);
  }
}
