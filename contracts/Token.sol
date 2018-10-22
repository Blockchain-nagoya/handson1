pragma solidity 0.4.24;                                         //宣言　バージョン

import "openzeppelin-solidity/contracts/token/ERC20/ERC20.sol"; //ERC20.solをインポート
import "./Talk.sol";                                            //Talk.solをインポート

contract Token is ERC20, Talk {                   //インポートしたコントラクトを継承

  string public constant name = "testToken";      //トークン名
  string public constant symbol = "TST";          //シンボル
  uint8 public constant decimals = 6;             //小数点以下の桁数
  uint256 public totalSupply = 100000;            //発行枚数

  

  constructor() public {                          //constructor
    uint256 INITIAL_SUPPLY = (10 ** uint256(decimals)) * totalSupply;
    _mint(msg.sender, INITIAL_SUPPLY);/* ERC20.sol内のトークン発行する関数 */
  }

}
