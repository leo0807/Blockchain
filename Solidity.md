# Solidity Syntax

## Function 
- State Mutability
1. ```Pure```: 代表不读写State;
2. ```View```: 代表会读State，但不写State;
3. ```Pure```: 代表会读写State;

- 可以改变State的行为
1. 修改State Variables
2. 发送Event（一种在Ethereum的Log机制）
3. 建立其他合约
4. 呼叫selfdestruct（注销自身合约）
5. 使用call来撒送Ether
6. 使用任何未被标记为pure/view的function
7. 呼叫low-level calls（类似直接写组合语言的概念）
8. 使用包含了特定的opcodes的组合语言

- 读取State的行为
1. 读取State Variables
2. 读取当前合约， 或任何外部合约的balance
3. 使用block，tx，msg等State咨询（msg.sig, msg.data除外）
4. 呼叫未被标记为pure的function
5. 使用包含了特定的opcodes的组合语言