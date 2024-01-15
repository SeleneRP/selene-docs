---
title: Server Configuration Reference
sidebar:
    label: Server Configuration
---

Server configuration is done through the `server.lua` file. This is a regular lua script, which means you will have access to all of the lua language features and all global functions as described in the [scripting reference](../reference/scripting).

Configuration options are defined as global variables from this script.

```lua
// server.lua
-- The port to host the server on.
-- If you are behind a router, this port needs to be forwarded (TCP and UDP).
port = 8147

-- The maximum number of concurrent players that can join the server.
max_connections = 32

-- Load all bundles from the bundles folder.
-- Bundles starting in . or ending in .disabled will be ignored.
load_all_bundles()
-- Alternatively, you can specify individual bundles to load like this:
-- load_bundle("my_test_bundle")
```

---

## Configuration Options

| Name            | Default | Description                                                                                                         |
| --------------- | ------- | ------------------------------------------------------------------------------------------------------------------- |
| port            | `8147`  | The port that the server will listen on. If you are behind a router, this port needs to be forwarded (TCP and UDP). |
| max_connections | `32`    | The maximum number of concurrent connections that the server will accept.                                           |

---

## Troubleshooting

No known troubleshooting steps.
