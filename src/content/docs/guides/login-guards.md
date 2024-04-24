---
title: Login Guards
---

Bundles can register callbacks to run when new clients are attempting to join the server. Before a client is able to join, they must pass through all defined login guards.

```lua
local function onClientJoinedQueue(id, setStatus, proceed, cancel)
	proceed("") -- Either pass an empty string, or a URL to a loading screen
end

on_client_joined_queue(onClientJoinedQueue)
```

Handlers can use the `setStatus` function to send a custom status message to a joining client. A handler must call either `proceed` or `cancel` to allow or deny the client from joining, respectively. Failure to do so will eventually result in a timeout.

:::caution
You must pass an empty string to `proceed` even if you do not want to display a loading screen.
:::

:::tip[Experimental]
Load screens cannot access bundle files, as the bundles are not yet loaded. In the future, we plan to preload the loading screen, but until then you will need to host the loading screen on a publicly accessible remote URL.
:::

:::tip[Experimental]
There is currently no way to define the order in which login guards run. They will follow the order of registration, and on most systems, bundles will be loaded in alphabetical order. A proper way to define the priority of login guards is planned for a future release.
:::
