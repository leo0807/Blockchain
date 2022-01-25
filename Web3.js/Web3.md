# Web3 

## 1. Introduction

开发以太坊区块链应用程序，主要涉及以下两方面：
- 智能合约(Smart Contract)开发 – 使用 solidity 语言编写代码，部署到区块链;
- 网站或客户端开发 – 与区块链中的智能合约进行交互，读写数据;

而在进行网站开发或者客户端开发时候，就需要用到```Web3JS```。web3.js 库是一个 javascript 库，可以让你执行很多与区块链进行交互的任务，例如：

- 以太币转账
- 读写智能合约中的数据
- 创建智能合约


### 什么是智能合约(Smart Contract)？
智能合约只是一个运行在以太坊链上的一个```程序```。 它是位于```以太坊区块链```上一个特定地址的一系列代码（函数）和数据（状态）。

智能合约也是一个以太坊帐户，我们称之为```合约帐户```。 这意味着他们有余额，他们可以通过网络进行交易。 但是，他们无法被人操控，他们是被部署在网络上作为程序运行着。 个人用户可以通过提交交易执行智能合约的某一个函数来与智能合约进行交互。 智能合约能像常规合约一样定义规则，并通过代码自动强制执行。 默认情况下，您无法删除智能合约，与它们的交互是不可逆的。