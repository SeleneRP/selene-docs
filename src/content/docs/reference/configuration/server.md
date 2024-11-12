---
title: Server Configuration Reference
sidebar:
    label: Server Configuration
    order: 0
---

Server configuration is done through the `server.lua` file. This is a special script that cannot access regular game functions, but instead has access to config-related functions such as `load_bundle` and `load_map`.

Configuration options are defined as global variables from this script.

```lua
// server.lua
-- The name of your server. This will be displayed in the server browser and to clients.
name = "Untitled Server"

-- Set to true if you want your server to be publicly listed in the server browser.
public = true

-- The port to host the server on.
-- If you are behind a router, this port needs to be forwarded (TCP and UDP).
port = 8147

-- The maximum number of concurrent players that can join the server.
max_connections = 32

-- The port at which client bundles are served. Set to 0 to disable serving client bundles from this server (e.g. if you use a custom CDN in client_bundle_base_url).
client_bundle_port = 8080

-- The URL that clients will be instructed to load client bundles from. In most cases, this should be your server IP with the client_bundle_port.
-- You can also specify a custom URL (e.g. to a CDN using HTTPS) to ease the load on your server and speed up download times for clients.
client_bundle_base_url = "http://localhost:8080"

-- Load all bundles from the bundles folder.
-- Bundles starting in . or ending in .disabled will be ignored.
load_all_bundles()
-- Alternatively, you can specify individual bundles to load like this:
-- load_bundle("my_test_bundle")

-- Load all scripts from the server_scripts folder.
-- Scripts starting in . will be ignored.
load_all_scripts()
-- Alternatively, you can specify individual scripts to load like this:
-- load_script("hello.world") -- takes a module path, i.e. loads server_scripts/hello/world.lua

-- Load a specific map from a bundle.
load_map("my_bundle", "my_test_map")
```

---

## Configuration Options

| Name            | Default | Description                                                                                                         |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| port            | `8147`  | The port that the server will listen on. If you are behind a router, this port needs to be forwarded (TCP and UDP). |
| max_connections | `32`    | The maximum number of concurrent connections that the server will accept.                                           |
| client_bundle_port | `8080` | The port at which client bundles are served. Set to 0 to disable serving client bundles from this server (e.g. if you use a custom CDN in client_bundle_base_url). |
| client_bundle_base_url | `http://localhost:8080` | The URL that clients will be instructed to load client bundles from. In most cases, this should be your server IP with the client_bundle_port. You can also specify a custom URL (e.g. to a CDN using HTTPS) to ease the load on your server and speed up download times for clients. |

---

## Troubleshooting

No known troubleshooting steps.
