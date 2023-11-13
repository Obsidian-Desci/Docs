---
sidebar_position: 6
---

# Plex


[Plex](https://github.com/labdao/plex)  is an offering from [LabDAO](https://docs.labdao.xyz/) that is a library that allows you to run BioML tools direct from your command line, without having to worry about failing dependencies or managing compute. Obsidian-DeSci abstracts away the CLI part of the offering for increased ease of usability and composability 

## Installation
Plex needs to be installed locally on your machine to be utilized
`pip install PlexLabExchange`

## Command Reference

| Command | Args | Output | Description  |
| ------- | ---- | ------ |  ----------- |
| `getProtein` | link to pdb download | pdb file in vault, link in canvas | Retreives a protein from a source url  |
| `getMolecule` | link to sdf download | sdf file in vault, link in canvas | Retreives a Molecule from a source url  |
| `viewMolecule` | less than 3 canvas file nodes (pdb or sdf) | canvas element in obsidian canvas node | opens a 3d viewer for the target node  |
| `runEquibind` | pdb file node and sdf canvas node | Reward NFT, outputs CID, outputs DIR, Docked Molecule | Runs the equibind command over bacalhau edge compute|

<iframe width="100%" height="560" src="https://www.youtube.com/embed/v4a_Ke2lIQ4?si=Vr59EcCyedUIUp1A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"></iframe>



