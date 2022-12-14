controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        ............bbbbeeb.............
        ...........bb4bbbbee............
        ..........bb4bb443be............
        .........bb4bb43344e............
        ........eb4b443334be............
        .......eb44444334be4............
        ......bb44333334be4db...........
        .....bb4443333444d554b..........
        ....bb444333444d5555d4..........
        ...eb4443444b4dd5555554.........
        ..ee444444bb4d555d5555db........
        .ee44444b4bb555566ddd55b........
        be44444bbe4555567765555db.......
        ee4b44bee4d55555885522234.......
        eb4bbbee4d222555ddd233224b......
        ebbbbe4bd23322555de23222eb......
        ebbbb4dde23222e555e22222edb.....
        eebe4ddde22222e5553e222e25b.....
        eee445553e222e255553eee255db....
        eeed4dd553eee2555555555dd566....
        ee4d4551555555555555555556776...
        eee4d4451555566dddd5552225884...
        .eeedd444d116776dd55523322554b..
        ..eee4ddd44d18855555e2322225d4..
        ....ee4d45d411511555e22222e5ddb.
        ......eeee55d1d441153e222e2d55b.
        ..........e4dd555444d3eee2ddd5db
        ...........edee445d55dddd511555b
        ...........ed4...ee4455d444d1154
        ...........44........ee4d5554d14
        .......................edee45514
        .......................e4...ee44
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
    otherSprite.destroy()
    scene.cameraShake(4, 500)
    info.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 500)
    info.changeScoreBy(1)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    ..........fffcc...fffffff...........
    ..........fbbbbcffbbbbbbbf..........
    ...........fbffbbbbb111bbf..........
    ...........ffbbbbff11111bf..........
    .........ffcbbbbbff1cccc1f..........
    ........fcccbcbcbb1c1c1cff..........
    ccccc..fcccbcbcbbb1333ccf...........
    cbbddcfccccbcbcbbb1c333c............
    .ccbddcccccbbbbbbb1c333c............
    ..ccbbccccccbbbbb11c333c............
    ..fccbfccccccbbbb11c133cc...........
    ..fccfcbbcccccbbbc11c31cc...........
    .fcbbf.cdddddfbbbc111111c...........
    .fbbf...cdddfbbdbf1111cc............
    fbbf.....ccfbbdbfffccc..............
    fff........fffff....................
    `, SpriteKind.Player)
controller.moveSprite(spacePlane, 200, 200)
spacePlane.setStayInScreen(true)
info.setLife(3)
game.onUpdateInterval(1000, function () {
    bogey = sprites.create(img`
        ....ffffff..............
        ....ff2cccf.........cf..
        .....ff2cccfff.....c4f..
        ....cc22222222ccccc44f..
        ...c9b244422222ccc442f..
        ..c99944222222222242fc..
        .c2b9912222222222222fcc.
        c222b1111b22222222cc22cf
        f2222221992222ccccccc22f
        .f22222222222c222cffffff
        ..ff2222222c442222ff....
        ....fffffffff442222fc...
        .........f2cff442222c...
        .........fccfffc2222c...
        ..........fc2ffffffff...
        ...........c2fff........
        `, SpriteKind.Player)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(160, randint(5, 115))
    bogey.setFlag(SpriteFlag.AutoDestroy, true)
})
