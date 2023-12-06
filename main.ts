let interval = 100
let waitTime = randint(30, 60)
let checkTime = 7
// 入力の猶予
let isClear = false
let inputCheckPos = world(0, -62, 1)
let isViewPrompt = false
blocks.fill(AIR, inputCheckPos, inputCheckPos, FillOperation.Replace)
gameplay.title(mobs.target(NEAREST_PLAYER), "ボタンを...", "")
for (let time = 0; time < waitTime + checkTime; time++) {
    // 入力のタイミングに応じて処理を切り替える
    if (blocks.testForBlock(EMERALD_BLOCK, inputCheckPos)) {
        isClear = waitTime < time
        break
    }
    
    // 入力を促すテキストを表示
    if (!isViewPrompt && waitTime < time) {
        isViewPrompt = true
        gameplay.title(mobs.target(NEAREST_PLAYER), "押せ！", "")
    }
    
    loops.pause(interval)
}
// フラグに応じて結果を表示
if (isClear) {
    gameplay.title(mobs.target(NEAREST_PLAYER), "クリア！", "")
} else {
    gameplay.title(mobs.target(NEAREST_PLAYER), "ゲームオーバー！", "")
}

