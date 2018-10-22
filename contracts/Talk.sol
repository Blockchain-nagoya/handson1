pragma solidity 0.4.24;                             //宣言　バージョン

contract Talk {

  string[] private Message;                         //String メッセージを保存する配列
  address[] private Address;                        //Address アドレスを保存する配列

  event logSendMessage(address indexed from, string message);   //イベント

  constructor() public {
    sendMessage("hello world");
  }

  function sendMessage(string _message) public {
    Message.push(_message);                        //Messageの最後に追加
    Address.push(msg.sender);                      //Addressの最後に追加

    emit logSendMessage(msg.sender, _message);      //イベント呼び出し
  }

  function getTalk(uint256 _index) public view returns(address, string, uint256) {
    require(_index < Address.length);                             //require 検索するインデック番号が配列内の数より少ないか

    return(Address[_index], Message[_index], Address.length);     //address string uint256の順で返す
  }
}