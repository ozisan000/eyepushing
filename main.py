waitInterval = 10
waitTime = randint(300, 600)
checkTime = 50
isClear = False
isViewPrompt = False
inputCheckPos = world(0,-61,0)

blocks.place(AIR, inputCheckPos)
gameplay.title(mobs.target(NEAREST_PLAYER), "ボタンを...", "")

for time in range(waitTime + checkTime):
    #入力のタイミングに応じて処理を切り替える
    if blocks.test_for_block(EMERALD_BLOCK, inputCheckPos):
        if waitTime < time:
            isClear = True
        break

    #入力を促すテキストを表示
    if not isViewPrompt and waitTime < time:
        isViewPrompt = True
        gameplay.title(mobs.target(NEAREST_PLAYER), "押せ！", "")

    loops.pause(waitInterval)

#フラグに応じて結果を表示
if isClear:
    gameplay.title(mobs.target(NEAREST_PLAYER), "クリア！", "")
else:
    gameplay.title(mobs.target(NEAREST_PLAYER), "ゲームオーバー！", "")