// SPDX-License-Identifier: MIT
pragma solidity 0.8.11;

contract PiggyBank {
    uint256 public goal; //能够查询

    constructor(uint256 _goal) {
        goal = _goal;
    }

    receive() external payable {}

    // 只读State，需要使用View
    function getMyBalance() public view returns (uint256) {
        return address(this).balance;
    }

    function withdraw() public {
        if (getMyBalance() > goal) {
            // 删除合约
            selfdestruct(msg.sender);
        }
    }
}
