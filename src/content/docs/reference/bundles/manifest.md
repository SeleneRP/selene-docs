---
title: Bundle Manifest
---

Bundles can include a `bundle.lua` file which will act as a manifest for the bundle, providing metadata and other configurations for it.

```lua
id = "my-bundle"
name = "My Bundle"
entrypoints = {"my-bundle.hello"}
client_entrypoints = {"map-test.hello-client"}
server_entrypoints = {"map-test.server.hello-server"}
```

## Entrypoints

Entrypoints are the main scripts that will be executed when the bundle is loaded. They are defined as a list of strings, where each string is a module path to a lua script. The module path must always start with the bundle id, and otherwise matches the file path with slashes replaced by dots and the `.lua` extension removed.

Server entrypoints should always be placed inside a `server` subfolder to prevent them from being included in client bundles. As the name says, server entrypoints will only be loaded on the server and client entrypoints will only be loaded on the client.

## Content-only Bundles

Bundles do not need a bundle manifest to be loaded. If your bundle only contains assets and resources, but no scripts, and does not need any advanced features, you can simply omit the `bundle.lua` file.