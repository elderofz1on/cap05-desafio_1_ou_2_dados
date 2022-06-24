input.onButtonPressed(Button.A, function () {
    dado1 = Math.round(randint(50, 649) / 100)
    modo = 1
    basic.showLeds(`
        . . . . .
        . # # # .
        . # # # .
        . # # # .
        . . . . .
        `)
    basic.pause(200)
})
input.onGesture(Gesture.Shake, function () {
    modo = 0
    dado1 = 1
    dado2 = 1
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
	
})
let dado2 = 0
let dado1 = 0
let modo = 0
modo = 0
dado1 = 1
dado2 = 1
basic.forever(function () {
    if (modo == 1) {
    	
    } else if (modo == 2) {
    	
    } else {
    	
    }
})
