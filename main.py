interval = 100
waitTime = randint(30, 60)
checkTime = 7  #入力の猶予
isClear = False
inputCheckPos = world(0,-62,1)
isViewPrompt = False

blocks.fill(AIR, inputCheckPos, inputCheckPos, FillOperation.REPLACE)
gameplay.title(mobs.target(NEAREST_PLAYER), "ボタンを...", "")

for time in range(waitTime + checkTime):
    #入力のタイミングに応じて処理を切り替える
    isChecking = waitTime < time
    if blocks.test_for_block(EMERALD_BLOCK, inputCheckPos):
        isClear = isChecking
        break

    #入力を促すテキストを表示
    if not isViewPrompt and isChecking:
        isViewPrompt = True
        gameplay.title(mobs.target(NEAREST_PLAYER), "押せ！", "")

    loops.pause(interval)

#フラグに応じて結果を表示
if isClear:
    gameplay.title(mobs.target(NEAREST_PLAYER), "クリア！", "")
else:
    gameplay.title(mobs.target(NEAREST_PLAYER), "ゲームオーバー！", "")