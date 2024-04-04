---
title: Tiles
---

Tiles, including various ground types, vegetation, furniture and other generally immovable objects are defined as part of tilesets. Tilesets combine multiple tile images into a single atlas texture, which is a necessary optimization for rendering large maps with many tiles.

Selene or Godot do not have the ability to pack these texture atlases directly, so you will need to use a third-party tool to combine your individual tile images into a single atlas texture.

## Supported atlas formats:

-   [TexturePacker](https://www.codeandweb.com/texturepacker)'s `.tpsheet` (Grid / Strip)

:::caution
TexturePacker's `Grid / Strip` algorithm is available in the paid version only. Note that other packing algorithms are not supported, as Godot expects a uniform grid for tilesets.
:::

:::note
In the future, we will also support gdx-texturepacker's `.atlas` format as a free alternative.
:::

## Creating a Tileset

Once you've packed your tile images into a texture atlas, create a new `TileSetDefinition` resource in your bundle project. This resource takes the following properties:

-   `Bundle ID`: The unique identifier of the bundle this tileset belongs to.
-   `Sheet`: The path to the texture atlas file. This should be a `.tpsheet` file, i.e. the atlas metadata, not the image itself.

:::caution
Godot comes with a `TileSet` resource of its own. Do not confuse the two, make sure you create a `TileSetDefinition`.
:::

Once you've filled in the bundle id and sheet path, press `Generate Tiles`. You should press this whenever you make changes to the texture atlas. The TileSetDefinition will automatically generate an embedded `TileSet` resource, which holds information about the individual tiles in the atlas. These tiles are named by their bundle id (taken from the TileSetDefinition) and name (taken from the texture atlas metadata).
Changes to tile properties (e.g. their texture origin) will be retained even when the tileset is regenerated.

## Offsets

By default, a TileSetDefinition will generate origins in a way where images are centered around the center of the tile. For taller tiles, the actual center of the mass is usually lower than that, so things like walls and furniture will not be aligned properly with the ground. To fix this, you can manually change the `Texture Origin` in the generated tile's `Rendering` section. For cases where you already know the desired offsets of the unpacked images, you can provide an `Offset Definitions` file to act as a hint for Selene. It will then automatically translate those offsets to match the packed texture atlas and use those values for the generated tiles instead.

```json
{
    "mode": "center_yup",
    "offsets": {
        "sword": { "x": 1, "y": -11 },
        "axe": { "x": -1, "y": -8 }
    }
}
```

The `mode` property can currently only be "center_yup", which assumes the origin to be applied from the bottom center of the image.

You can also create variants of existing tiles by adding a `#suffix` (the `#` being the designator) to the offset name. When generating the tileset, alternative tiles will then be created and named accordingly automatically.

## Animated Tiles

Godot supports animated tiles as long as all frames are part of the same texture atlas and located next to each other (either horizontally, vertically, or within a square grid). Such texture sheets can be difficult to achieve with regular texture packers, so you may have to stitch this atlas manually, or make sure to keep each animation sheet in a separate atlas.

In order for sprites to be treated as one animation, you must supply a `Animation Definitions` file to act as a hint for Selene. It will then automatically setup the animated tile within the tileset.

```json
{
    "water-0": {
        "template": "water-%d",
        "frames": 6,
        "speed": 1
    }
}
```
