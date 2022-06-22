# nft creator demo

A demo for [manifold](https://www.manifold.xyz/).

## How to deploy Implementation contract
```sh
truffle compile
truffle migrate --f 1 --to 1 --network rinkeby
truffle run verify ERC721CreatorImplementation --network rinkeby
```

## How to deploy Proxy contract
Modify the `StorageSlot.getAddressSlot(_IMPLEMENTATION_SLOT).value` in the `contracts/ERC721Creator.sol` to corresponding implementation contract address
```sh
truffle migrate --f 2 --to 2 --network rinkeby
truffle run verify ERC721Creator --network rinkeby
```