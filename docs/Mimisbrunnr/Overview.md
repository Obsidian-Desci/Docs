---
sidebar_position: 1
---

# Overview
:::danger
Mimisbrunnr is currently in Alpha! please do not use large amounts and please dont get sad if you lose anything you deposit 
:::
[Etherscan](https://etherscan.io/address/0x8c117c89225baa3d2be118892aafae0f89fb9f6f)

The word [Mimisbrunnr](https://en.wikipedia.org/wiki/M%C3%ADmisbrunnr) means [Mimir's](https://en.wikipedia.org/wiki/M%C3%ADmir) well! Mimirs knowledge nourishes the world tree [Yddrasil](https://en.wikipedia.org/wiki/Yggdrasil).  It is used here to make a metaphor with the pooling of knowledge symbolized by various decentralized science projects that managed to tokenize their offerings. "Mims" start with a 0 initial supply and is minted when a desci token/weth uniswap v3 token LP is sold to the protocol.  Mimisbrunnr merges the liquidity into its own positions and keeps tally.  a user who owns mims can use them as a normal erc20, or unwrap them.  When the unwrap function is called Mimisbrunnr the smart contract sells a weighted proportion of liquidity in each pool and sends these tokens back to the user and burns those mims
## How does it fund Obsidian-Desci

Then a mim is unwrapped, it decreases the liquidity positions owned by the smart contract, this releases funds to be collected.  However, when the collect function is called, it has not only the funds released, but also the liquidity rewards, the user gets the released funds, but obsidian desci keeps the lp rewards.

## Why Should I hold Mims

Mimisbrunnr is a way to attain broad asset exposure to the desci ecosystem by just holding a single asset.  Most desci tokens are small cap so its a way to hedge risk.

## Why Should I not hold Mims

because each Mim is a liquidity point, and the protocol counts LP rewards as profit.  The protocol is exposed to impermanent loss on all pairs,  you get security at the cost of making your impermanent loss permanent.  As the protocol grows and covers its expenses, it will find a way to reduce the amount of permanent loss taken by users.  theories include reinvesting excess liquidity rewards back into the respective pools and creating a version of the V3Staker contract that snapshots the block timestamp and the pool parameters to accurately reward users with those lp rewards.
 
