let waitInterval = 10
let waitTime = randint(300, 600)
let checkTime = 50
let isClear = false
let isViewPrompt = false
let inputCheckPos = world(0, -61, 0)
blocks.place(AIR, inputCheckPos)
gameplay.title(mobs.target(NEAREST_PLAYER), "ボタンを...", "")
for (let time = 0; time < waitTime + checkTime; time++) {
    // 入力のタイミングに応じて処理を切り替える
    if (blocks.testForBlock(EMERALD_BLOCK, inputCheckPos)) {
        if (waitTime < time) {
            isClear = true
        }
        
        break
    }
    
    // 入力を促すテキストを表示
    if (!isViewPrompt && waitTime < time) {
        isViewPrompt = true
        gameplay.title(mobs.target(NEAREST_PLAYER), "押せ！", "")
    }
    
    loops.pause(waitInterval)
}
// フラグに応じて結果を表示
if (isClear) {
    gameplay.title(mobs.target(NEAREST_PLAYER), "クリア！", "")
} else {
    gameplay.title(mobs.target(NEAREST_PLAYER), "ゲームオーバー！", "")
}

