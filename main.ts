input.onButtonPressed(Button.A, function () {
    basic.showIcon(IconNames.Sad)
    makerobot.Servo(makerobot.Servos.S1, 0)
})
input.onButtonPressed(Button.AB, function () {
    basic.showIcon(IconNames.Sad)
    makerobot.Servo(makerobot.Servos.S1, 90)
})
input.onButtonPressed(Button.B, function () {
    basic.showIcon(IconNames.Confused)
    makerobot.Servo(makerobot.Servos.S1, 180)
})
basic.showIcon(IconNames.SmallHeart)
basic.forever(function () {
	
})
