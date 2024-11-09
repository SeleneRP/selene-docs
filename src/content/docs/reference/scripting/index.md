---
title: Scripting Overview
---

Selene utilizes the [Lua](https://www.lua.org/) scripting language to provide a powerful and flexible scripting environment for your server.

Scripts are contained within **resource bundles** that are loaded from the `bundles` folder.
These bundles can also contain any additional assets, such as models, textures, and user interfaces. 

Bundles to be loaded are configured in the `server.lua` file, which is a lua script itself and acts as an entrypoint for everything else.
Read the [server configuration reference](../../configuration/server) for more information on how to setup your server.

## Script Bindings

Selene provides custom script bindings that allow you to interact with the game world, players, react to inputs, and more.

- [Camera](./camera/set_camera_mode)

## Standard Lua Libraries

Selene uses [Luau](https://luau.org/getting-started) (a language derived from Lua 5.1) and exposes [all of its libraries](https://luau.org/library).

Even though the `package` library is not available for security reasons, we do expose a custom `require` function that you can use to load modules from other scripts.
