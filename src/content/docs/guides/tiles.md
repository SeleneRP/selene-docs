---
title: Tiles
---

Tiles, including various ground types, vegetation, furniture and other generally immovable objects are defined as part of tilesets. Tilesets combine multiple tile images into a single atlas texture, which is a necessary optimization for rendering large maps with many tiles.

Selene or Godot do not have the ability to pack these texture atlases directly, so you will need to use a third-party tool to combine your individual tile images into a single atlas texture.

## Supported atlas formats:

- [TexturePacker](https://www.codeandweb.com/texturepacker)'s `.tpsheet` (Grid / Strip)

:::caution
TexturePacker's `Grid / Strip` algorithm is available in the paid version only. Note that other packing algorithms are not supported, as Godot expects a uniform grid for tilesets.
:::

:::info
In the future, we will also support gdx-texturepacker's `.atlas` format as a free alternative.
:::

## Creating a tileset

Once you've packed your tile images into a texture atlas, create a new `TileSetDefinition` resource in your bundle project. This resource takes the following properties:

- `Bundle ID`: The unique identifier of the bundle this tileset belongs to.
- `Sheet`: The path to the texture atlas file. This should be a `.tpsheet` file, i.e. the atlas metadata, not the image itself.

:::caution
Godot comes with a `TileSet` resource of its own. Do not confuse the two, make sure you create a `TileSetDefinition`.
:::

Once you've filled in the bundle id and sheet path, press `Generate Tiles`. You should press this whenever you make changes to the texture atlas. The TileSetDefinition will automatically generate an embedded `TileSet` resource, which holds information about the individual tiles in the atlas. These tiles are named by their bundle id (taken from the TileSetDefinition) and name (taken from the texture atlas metadata).
Changes to tile properties (e.g. their texture origin) will be retained even when the tileset is regenerated.

## Animated Tiles

Godot supports animated tiles as long as all frames are part of the same texture atlas and located within the same row inside that atlas.

If you have each frame as a separate image, you should first stitch them together into a single sheet (separately from packing the texture atlas). 
Only once you've got your animated spritesheet, you can then pack it (and any others you may have) into a texture atlas. Tweak the settings to ensure each row holds one full animation sheet.

Your `TileSetDefinition` will then import each row as one tile within the atlas, and you can use the `Animation` -> `Columns` property to specify the number of frames in the animation.