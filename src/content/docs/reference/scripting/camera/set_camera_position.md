---
title: set_camera_position
description: set_camera_position allows you to change the position of a client's camera.
---

`set_camera_position` allows you to change the position of a client's camera.

```lua
set_camera_position(peer_id: number, x: number, y: number, z: number)
```

-----

## Reference

`set_camera_position(peer_id, x, y, z)`

Call `set_camera_position` in your script to change the position of a client's camera.

```lua
set_camera_position(peer_id, 15, 10, 0)
```

[See more examples below.](#usage)

### Parameters

- `peer_id`: The id of the client to change the camera mode of.
- `x`: The x position of the camera (in tiles).
- `y`: The y position of the camera (in tiles).
- `z`: The z position of the camera (in floor levels).

### Returns

`set_camera_position` does not return anything.

### Caveats

- When using `CameraMode.Following`, this method will have no effect. See [`set_camera_mode`](../set_camera_mode/).

-----

## Usage

### Move the camera to specific coordinates on join

```lua
local function onClientJoined(peer_id)
	set_camera_position(peer_id, -100, -100, 0)
end

on_client_joined(onClientJoined)
```

-----

## Troubleshooting

No known troubleshooting steps.