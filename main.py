waitTime = 100
isClear = False
blocks.place(EMERALD_BLOCK, pos(0, 0, 0))
gameplay.title(mobs.target(NEAREST_PLAYER), "ボタンを...", "")
loops.pause(1000 * randint(3, 6))
gameplay.title(mobs.target(NEAREST_PLAYER), "押せ！", "")
for index in range(waitTime):
    if blocks.test_for_block(EMERALD_BLOCK, pos(0, 0, 0)):
        isClear = True
        break
    loops.pause(10)
if isClear:
    gameplay.title(mobs.target(NEAREST_PLAYER), "クリア！", "")
else:
    gameplay.title(mobs.target(NEAREST_PLAYER), "ゲームオーバー！", "")