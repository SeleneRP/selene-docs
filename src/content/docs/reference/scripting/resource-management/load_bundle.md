---
title: load_bundle
description: load_bundle is a globally available function that loads a resource bundle from the bundles folder.
---

`load_bundle` is a globally available function that loads a resource bundle from the `bundles` folder.

```lua
load_bundle(bundle_name: String)
```

-----

## Reference

`load_bundle(bundle_name)`

Call `load_bundle` in your server.lua script to load a resource bundle by name from the `bundles` folder. 

```lua
// server.lua
load_bundle("my_test_bundle")
```

[See more examples below.](#usage)

### Parameters

- `bundle_name`: The name of the bundle to load from within the `bundles` folder.

### Returns

`load_bundle` does not return anything.

### Caveats

- Bundles must be located directly within the `bundles` folder. Nested folders are not supported.

-----

## Usage

### Loading a bundle from a path

```lua
// server.lua
load_bundle("my_test_bundle")
```

### Loading all bundles from the bundles folder

See [`load_all_bundles`](../load_all_bundles).

-----

## Troubleshooting

No known troubleshooting steps.