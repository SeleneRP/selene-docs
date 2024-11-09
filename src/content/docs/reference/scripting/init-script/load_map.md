---
title: load_map
description: load_map is a server configuration function that loads a map from a bundle.
---

`load_map` is a server configuration function that loads a map from a bundle. It is only available within `server.lua`.

```lua
load_map(bundle_id: String, map_name: String)
```

-----

## Reference

`load_map(bundle_id, map_name)`

Call `load_map` in your server.lua script to load a map by name from a given bundle.

```lua
// server.lua
load_map("my_test_bundle", "my_test_map")
```

[See more examples below.](#usage)

### Parameters

- `bundle_id`: The id of the bundle containing the map.
- `map_name`: The name of the map to load from within the bundle.

### Returns

`load_map` does not return anything.

### Caveats

- Bundles must be located directly within the `bundles` folder. Nested folders are not supported.
- Maps must be located inside the `server/maps` folder of the bundle. Within that folder, nesting is supported.

-----

## Usage

### Loading a map from a bundle

```lua
// server.lua
load_map("my_test_bundle", "my_test_map")
```

### Loading all bundles from the bundles folder

See [`load_all_bundles`](../load_all_bundles).

-----

## Troubleshooting

No known troubleshooting steps.