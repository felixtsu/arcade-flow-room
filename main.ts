namespace SpriteKind {
    export const zglBall = SpriteKind.create()
    export const zglPlayer = SpriteKind.create()
    export const zglWaypointDown = SpriteKind.create()
}
function zglCreatePlayerSprite () {
    zglPlayerSprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.zglPlayer)
    controller.moveSprite(zglPlayerSprite)
    scene.cameraFollowSprite(zglPlayerSprite)
}
function zglStartup () {
    tiles.setTilemap(tiles.createTilemap(hex`100010000105050505050505050505050505050402090909090909090909090909090906020909090909090909090909090909060209090a0c0c0c0c0c0d0c0c0c0c09060209090909090909090c0909090909060209090909090909090c0909090909060209090909090909090c09090909090602090909090d0c0c0c0f09090909090602090909090c0909090c09090909090602090909090e0c0c0c0c0c0c0d0909060209090909090909090c09090c0909060209090909090909090c09090b0909060209090909090909090c0909090909060209090909090909090b0909090909060209090909090909090909090909090603080808080808080808080808080807`, img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterWest0,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterNorth0,sprites.dungeon.purpleOuterEast1,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.floorLight2,sprites.dungeon.collectibleRedCrystal,sprites.dungeon.chestOpen,myTiles.tile1,myTiles.tile2,myTiles.tile3,myTiles.tile4], TileScale.Sixteen))
}
function zglPlaceDownWaypoint () {
    for (let value of tiles.getTilesByType(myTiles.tile2)) {
        tiles.placeOnTile(zglCreateWaypointDown(), value)
    }
}
function zglCreateWaypointDown () {
    zglWaypointDownSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . 3 3 . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.zglWaypointDown)
    zglWaypointDownSprite.setFlag(SpriteFlag.Invisible, false)
    return zglWaypointDownSprite
}
function zglCreateBall () {
    zglBallSprite = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . 4 4 4 5 5 4 4 4 . . . . 
        . . . 3 3 3 3 4 4 4 4 4 4 . . . 
        . . 4 3 3 3 3 2 2 2 1 1 4 4 . . 
        . . 3 3 3 3 3 2 2 2 1 1 5 4 . . 
        . 4 3 3 3 3 2 2 2 2 2 5 5 4 4 . 
        . 4 3 3 3 2 2 2 4 4 4 4 5 4 4 . 
        . 4 4 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . 4 2 3 3 2 2 4 4 4 4 4 4 4 4 . 
        . . 4 2 3 3 2 4 4 4 4 4 2 4 . . 
        . . 4 2 2 3 2 2 4 4 4 2 4 4 . . 
        . . . 4 2 2 2 2 2 2 2 2 4 . . . 
        . . . . 4 4 2 2 2 2 4 4 . . . . 
        . . . . . . 4 4 4 4 . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.zglBall)
    tiles.placeOnRandomTile(zglBallSprite, sprites.dungeon.collectibleRedCrystal)
    zglBallSprite.vx = 50
}
sprites.onOverlap(SpriteKind.zglBall, SpriteKind.zglWaypointDown, function (sprite, otherSprite) {
    if (cubicbird.distance(sprite, otherSprite) < 0.5) {
        sprite.setPosition(otherSprite.x, otherSprite.y)
        sprite.setVelocity(0, 50)
    }
})
scene.onOverlapTile(SpriteKind.zglBall, sprites.dungeon.chestOpen, function (sprite, location) {
    tiles.setTileAt(location, sprites.dungeon.chestClosed)
    gamejam.roomFinished(true)
})
let zglBallSprite: Sprite = null
let zglWaypointDownSprite: Sprite = null
let zglPlayerSprite: Sprite = null
zglStartup()
zglCreatePlayerSprite()
zglPlaceDownWaypoint()
game.onUpdateInterval(1000, function () {
    zglCreateBall()
})
