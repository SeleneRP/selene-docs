---
title: set_camera_mode
description: set_camera_mode allows you to change the operating mode of a client's camera.
---

`set_camera_mode` allows you to change the operating mode of a client's camera.

```lua
set_camera_mode(peer_id: number, mode: CameraMode)
```

-----

## Reference

`set_camera_mode(peer_id, mode)`

Call `set_camera_mode` in your script to change the camera mode of a client.

```lua
set_camera_mode(peer_id, CameraMode.FreeFlight)
```

[See more examples below.](#usage)

### Parameters

- `peer_id`: The id of the client to change the camera mode of.
- `mode`: The camera mode to apply. See [CameraMode](../cameramode/).

### Returns

`set_camera_mode` does not return anything.

### Caveats

No known caveats.

-----

## Usage

### Set the camera mode to free-flight on join

```lua
local function onClientJoined(peer_id)
    set_camera_mode(peer_id, CameraMode.FreeFlight)
end

on_client_joined(onClientJoined)
```

-----

## Troubleshooting

No known troubleshooting steps.