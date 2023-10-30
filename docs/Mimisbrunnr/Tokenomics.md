---
sidebar_position: 2
---

# How It Works



If one chooses to offer liquidity in the full range on uniswap v3, the algorithm is identical to constant products in uniswap v2, that is to say
$ L = x y $
Tokens in Mimisbrunnr map 1:1 with the liquidity paramater in a Uniswap V3 Pool and only accepts unconcentrated liquidity positions.  Since Mimisbrunnr only accepts WETH denominated pairs, one is ensured the market rate of each token is accepted. Lesser value tokens will undoubtedly create a larger Magnitude of L.  However, since the protocol tracks the weighted average of a liquidity provided by each pool, more of these tokens will be provided back to the user if they choose to unwrap mims.

$$ liquidity Returned = amount * \frac{pool_i}{\sum_{i=0}^{i=#pools}} $$



## Supported Tokens

| Token | Address | Liquidity Pool |
| ----- | ------- | -------------- |
| [RSC](https://www.researchhub.foundation/) | [0xD101dCC414F310268c37eEb4cD376CcFA507F571](https://etherscan.io/address/0xD101dCC414F310268c37eEb4cD376CcFA507F571)  | [0xeC2061372a02D5e416F5D8905eea64Cab2c10970](https://etherscan.io/address/0xeC2061372a02D5e416F5D8905eea64Cab2c10970) |
| [LAKE](https://data-lake.co/) | [0xF9Ca9523E5b5A42C3018C62B084Db8543478C400](https://etherscan.io/address/0xF9Ca9523E5b5A42C3018C62B084Db8543478C400)  | [0xeFd69F1FF464Ed673dab856c5b9bCA4D2847a74f](https://etherscan.io/address/0xeFd69F1FF464Ed673dab856c5b9bCA4D2847a74f) |
| [GROW](https://www.valleydao.bio/) | [0x761A3557184cbC07b7493da0661c41177b2f97fA](https://etherscan.io/address/0x761A3557184cbC07b7493da0661c41177b2f97fA)  | [0x61847189477150832D658D8f34f84c603Ac269af](https://etherscan.io/address/0x61847189477150832D658D8f34f84c603Ac269af) |
| [HAIR](https://www.hairdao.xyz/) | [0x9Ce115f0341ae5daBC8B477b74E83db2018A6f42](https://etherscan.io/address/0x9Ce115f0341ae5daBC8B477b74E83db2018A6f42)  | [0x94DD312F6Cb52C870aACfEEb8bf5E4e28F6952ff](https://etherscan.io/address/0x94DD312F6Cb52C870aACfEEb8bf5E4e28F6952ff) |
| [VITA](https://www.vitadao.com/) | [0x81f8f0bb1cB2A06649E51913A151F0E7Ef6FA321](https://etherscan.io/address/0x81f8f0bb1cB2A06649E51913A151F0E7Ef6FA321)  | [0xcBcC3cBaD991eC59204be2963b4a87951E4d292B](https://etherscan.io/address/0xcBcC3cBaD991eC59204be2963b4a87951E4d292B) |

