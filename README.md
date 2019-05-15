# Deleting Mappings in Solidity

When a mapping of a struct (parent) has another mapping within it (child), and the parent is deleted, child values remain in storage.

When a mapping of a struct (parent) has an array within it (child), and the parent is deleted, the child values are deleted as well.

Requires Truffle to be installed, simply run the command below:

```bash
truffle test
```

Output:

```
Contract: MyArrayContract
  array in mapping
    ✓ is deleted after parent deletion (1019ms)

Contract: MyContract
  mapping in mapping
    ✓ remains after parent deletion (1083ms)


2 passing (3s)
```