# Solidity Syntax

- Web3.js - Read the Docs https://web3js.readthedocs.io

## Function

- State Mutability

1. `Pure`: 代表不读写 State;
2. `View`: 代表会读 State，但不写 State;
3. `Pure`: 代表会读写 State;

- 可以改变 State 的行为

1. 修改 State Variables
2. 发送 Event（一种在 Ethereum 的 Log 机制）
3. 建立其他合约
4. 呼叫 selfdestruct（注销自身合约）
5. 使用 call 来撒送 Ether
6. 使用任何未被标记为 pure/view 的 function
7. 呼叫 low-level calls（类似直接写组合语言的概念）
8. 使用包含了特定的 opcodes 的组合语言

- 读取 State 的行为

1. 读取 State Variables
2. 读取当前合约， 或任何外部合约的 balance
3. 使用 block，tx，msg 等 State 咨询（msg.sig, msg.data 除外）
4. 呼叫未被标记为 pure 的 function
5. 使用包含了特定的 opcodes 的组合语言

- 形态的种类

1. Value Types

- Boolean
- Integer
- Literals (Address/Integer/String/Unicode/Hexadecimal Literals)
- ...

2. References Types
3. Mapping Types

- Solidity — Solidity 0.8.13 documentation

  - https://docs.soliditylang.org
- 区块链学习路线
  - https://github.com/itheima1/BlockChain
- 技术栈
  - http://www.wuecho.com/2018/05/13/%E5%8C%BA%E5%9D%97%E9%93%BE%E6%8A%80%E6%9C%AF%E6%A0%88/

