radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber > 5) {
        Amount_of_players += 1
        Players_DSN.push(receivedNumber)
        basic.showNumber(Players_DSN[Players_DSN.length])
    } else {
    	
    }
})
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(17)
    radio.sendNumber(control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Amount_of_players)
})
let Players_DSN: number[] = []
let Amount_of_players = 0
radio.setGroup(17)
let HUB_number = control.deviceSerialNumber()
Amount_of_players = 0
Players_DSN = []
basic.forever(function () {
    if (0 == 0) {
    	
    }
})
basic.forever(function () {
    if (HUB_number == control.deviceSerialNumber()) {
    	
    }
})
