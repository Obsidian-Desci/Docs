---
sidebar_position: 3
---

# Command Reference

## SellLP
| Type    | Param | Description |
| ------- | ----- | ------ |
| uint256 | erc721Id | the nftId of a uniswap nonfungible position |

Returns an equivalent amount of MIMIS as provided by the `liquidity` parameter on the UniswapV3NFT

## unwrapMims
| Type    | Param | Description |
| ------- | ----- | ------ |
| uint256 | amount | The amount of mims you want to unwrap|

Returns a collection of various DeSci tokens in proportion to how much of each token was in mimisbrunnr


## Stake
| Type    | Param | Description |
| ------- | ----- | ------ |
| uint256 | tokenId | UniswapV3 MIMIS/WETH NFT tokenId|

Begins counting amount of in range liquidity  to calculate rewards

## Unstake
| Type    | Param | Description |
| ------- | ----- | ------ |
| uint256 | tokenId | UniswapV3 MIMIS/WETH NFT tokenId|

Returns the Staked LP NFT and demarks rewards to be collected

## Claim Rewards
| Type    | Param | Description |
| ------- | ----- | ------ |
| uint256 | tokenId | UniswapV3 MIMIS/WETH NFT tokenId|

Collect the rewards accrued by a staked MIMIS/WETH LP