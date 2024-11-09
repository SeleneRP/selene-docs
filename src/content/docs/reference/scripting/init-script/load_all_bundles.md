---
title: load_all_bundles
---

`load_all_bundles` is a server configuration function that loads all resource bundles from the `bundles` folder. It is only available within `server.lua`.

```lua
load_all_bundles()
```

-----

## Reference

`load_all_bundles()`

Call load_all_bundles in your server.lua script to load all resource bundles that are available in the `bundles` folder.

```lua
// server.lua
load_all_bundles()
```

Bundle folders starting with a period (`.`) or ending in `.disabled` will be ignored.

[See more examples below.](#usage)

### Parameters

`load_all_bundles` does not take any parameters.

### Returns

`load_all_bundles` does not return anything.

### Caveats

- Bundles must be located directly within the `bundles` folder. Nested folders are not supported.
- Bundle folders starting with a period (`.`) or ending in `.disabled` will be ignored.

-----

## Usage

### Loading all bundles from the bundles folder

```lua
// server.lua
load_all_bundles()
```

### Loading a specific bundle from the bundles folder

See [`load_bundle`](../load_bundle).

-----

## Troubleshooting

No known troubleshooting steps.