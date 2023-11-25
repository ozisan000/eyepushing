let waitTime = 100
let isClear = false
blocks.place(EMERALD_BLOCK, pos(0, 0, 0))
gameplay.title(mobs.target(NEAREST_PLAYER), "ボタンを...", "")
loops.pause(1000 * randint(3, 6))
gameplay.title(mobs.target(NEAREST_PLAYER), "押せ！", "")
for (let index = 0; index < waitTime; index++) {
    if (blocks.testForBlock(EMERALD_BLOCK, pos(0, 0, 0))) {
        isClear = true
        break
    }
    
    loops.pause(10)
}
if (isClear) {
    gameplay.title(mobs.target(NEAREST_PLAYER), "クリア！", "")
} else {
    gameplay.title(mobs.target(NEAREST_PLAYER), "ゲームオーバー！", "")
}

