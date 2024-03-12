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

- [Resource Management](./resource-management/load_bundle)

## Standard Lua Libraries

Selene currently uses Lua 5.4 and exposes the following lua libraries:

- [base](https://www.lua.org/manual/5.4/manual.html#6.1)
- [coroutine](https://www.lua.org/manual/5.4/manual.html#6.2)
- [math](https://www.lua.org/manual/5.4/manual.html#6.6)
- [string](https://www.lua.org/manual/5.4/manual.html#6.4)
- [table](https://www.lua.org/manual/5.4/manual.html#6.5)
- [utf8](https://www.lua.org/manual/5.4/manual.html#6.7)

The libraries `io`, `os`, `debug`, and `package` are not available for security reasons.
However, you will still be able to use the [`require`](https://www.lua.org/manual/5.4/manual.html#pdf-require) function to load and reference other lua files, and alternative functions are provided for some of the common tasks those libraries would normally be used for.
