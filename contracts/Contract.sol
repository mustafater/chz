// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract MyContract {

    struct message{
        string title;
        string comment;
    }

    message[] public messages;
    uint256 public index;
    constructor() {
        index=0;
    }



    function create (string memory title,string memory comment) public returns(uint256){
            message memory newMessage = message(title,comment);
            messages.push(newMessage);
            index++;
            return index;
    }

    function getMessageAll() public view returns(message[] memory){
        return messages;
    }

    function getMessage(uint256 number) public view returns(message memory){
        require(number < index, "the number  is big ");
        return messages[number];
    }

    function update(string memory title,string memory comment) external returns(bool){
        for(uint i=0; i<index;i++){
             if(compareStrings(messages[i].title,title)){
                messages[i].comment=comment;
                return true;

             }
        }
        return false;

    }

    function deleteMessage(string memory title) external returns(bool){
         require(index > 0," index is greater than zero ");
         for(uint i=0 ; i < index;i++){
            if(compareStrings(messages[i].title, title)){
                messages[i]=messages[index-1];
                delete messages[index-1];
                index--;
                return true;

            }
         }
         return false;
    }



    function compareStrings(string memory a, string memory b) internal pure returns (bool) {
        return keccak256(abi.encodePacked(a)) == keccak256(abi.encodePacked(b));
    }
}