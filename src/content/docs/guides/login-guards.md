---
title: Login Guards
---

Bundles can register callbacks to run when new clients are attempting to join the server. Before a client is able to join, they must pass through all defined login guards.

```lua
local function onClientAuthenticated(id, setStatus, proceed, cancel)
	proceed()
end

Events.onClientAuthenticated(onClientAuthenticated)
```

Handlers can use the `setStatus` function to send a custom status message to a joining client. A handler must call either `proceed` or `cancel` to allow or deny the client from joining, respectively. Failure to do so will eventually result in a timeout.

:::caution
Currently, only the connection id is passed to the handler, which makes these guards pretty useless as they have no information about the actual player trying to join. This will be addressed in a future release.
:::

:::caution
Login guards run in order of registration. There is currently no way to define the order in which they run other than ensuring the correct bundle load order. A better way to define the priority of login guards is planned for a future release.
:::
