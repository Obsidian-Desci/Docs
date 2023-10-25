---
sidebar_position: 3
---

# IPFS
[ipfs](https://ipfs.tech/) is the interplanetary filesystem that stores content its hash to form a content addressing scheme. By installing [kubo](https://github.com/ipfs/kubo) Obsidian Desci can fetch and soon add+pin ipfs content right from the canvas

## Command Reference

| Command | Args | Output | Kubo Required |
| ------- | ---- | ------ | --------------- |
| `ipfsCat` | cid | Canvas canvas Node | true |
| `ipfsDagGet` | cid | Canvas canvas Dag | true |

## Usage
Using Ctrl-P, search for an ipfs command while a canvas node with a CID is selected and hit enter.

<iframe width="100%" height="560" src="https://www.youtube.com/embed/DTeBqliItus?si=AOmRaVPztUsFIMvO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

:::tip
Ensure to have Kubo running in the background, there is a setting to change the rpcUrl if you are not using the default one, just make sure to add /api/v0 at the end of it
:::