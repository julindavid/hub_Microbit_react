radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 100000000) {
        Amount_of_players += 1
        Players_DSN.push(receivedNumber)
    } else {
        Player_response_time.push(receivedNumber)
    }
})
function Timer () {;
    [0][0] = 0
    Player_response_time[Game_DATA.indexOf(0)] = 0
    basic.showNumber(control.millis())
}
input.onButtonPressed(Button.AB, function () {
    radio.setGroup(17)
    radio.sendNumber(control.deviceSerialNumber())
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Amount_of_players)
})
let Player_response_time: number[] = []
let Game_DATA: number[] = []
let Players_DSN: number[] = []
let Amount_of_players = 0
radio.setFrequencyBand(17)
radio.setGroup(17)
let HUB_number = control.deviceSerialNumber()
Amount_of_players = 0
Players_DSN = []
Game_DATA = []
let value = ["A", "B", "C"]
basic.forever(function () {
	
})
basic.forever(function () {
	
})
