// 自动生成的代码。请勿编辑。
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile3 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile4 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile5 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile6 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile7 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "级别1":
            case "级别1":return tiles.createTilemap(hex`10001000010505050505050505050505050505040209090909090911091009090909090602090909090909090909090909090906020909120b0d0b0b0b0d0b0b0b0a090602090909090b0909090b09090909090602090909090b0909090b09090909090602090909090b0909090b09090909090602090909090c0b0b0b0f09090909090602090909090b0909090b09090909090602090909090d0b0b0b0e0b0b0c09090602090909090b0909090b09090b09090602090909090b0909090b09090a09090602090909090b0909090b09090909090602090909090e0b0b0b0a0909090909060209090909090909090909090909090603080808080808080808080808080807`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.chestOpen,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile5,myTiles.tile4,myTiles.tile6,myTiles.tile7,sprites.dungeon.collectibleBlueCrystal], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "tile1":return tile1;
            case "tile2":return tile2;
            case "tile3":return tile3;
            case "tile4":return tile4;
            case "tile5":return tile5;
            case "tile6":return tile6;
            case "tile7":return tile7;
        }
        return null;
    })

}
// 自动生成的代码。请勿编辑。
