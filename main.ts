input.onButtonPressed(Button.A, function () {
    出拳 = 1
    basic.showIcon(IconNames.Scissors)
})
input.onGesture(Gesture.Shake, function () {
    // 為了趣味性，晃動後倒數三秒再顯示出拳
    basic.showNumber(3)
    basic.showNumber(2)
    basic.showNumber(1)
    if (出拳 == 1) {
        basic.showIcon(IconNames.Scissors)
    } else if (出拳 == 2) {
        basic.showIcon(IconNames.SmallSquare)
    } else if (出拳 == 3) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.No)
    }
    出拳 = 0
    basic.pause(1000)
})
input.onButtonPressed(Button.AB, function () {
    出拳 = 3
    basic.showIcon(IconNames.Square)
})
input.onButtonPressed(Button.B, function () {
    出拳 = 2
    basic.showIcon(IconNames.SmallSquare)
})
let 出拳 = 0
// 一開始還沒決定要出什麼。所以先讓出拳 = 0
出拳 = 0
