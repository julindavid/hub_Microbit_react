function Skaka () {
	
}
radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= 100000000) {
        Amount_Of_Players += 1
        Player_DSN.unshift(receivedNumber)
        radio.sendValue(Player_IDs.removeAt(0), receivedNumber)
    }
})
function Nedräkning () {
	
}
radio.onReceivedString(function (receivedString) {
    let Gaming_Phase = 0
    let Setup_Phase = 0
    if (Setup_Phase) {
    	
    } else if (Gaming_Phase) {
        Player_Response_Time.unshift(0)
        game.gameOver()
        basic.showString("" + name + "Won!")
        radio.sendValue(name, 100)
    }
})
radio.onReceivedValue(function (name, value) {
	
})
let Player_IDs: string[] = []
let Player_Response_Time: number[] = []
let Player_DSN: number[] = []
radio.setGroup(17)
let HUB_Number = control.deviceSerialNumber()
let Amount_Of_Players = 0
Player_DSN = []
Player_Response_Time = []
Player_IDs = [
"P1",
"P2",
"P3",
"P4",
"P5",
"P6"
]
basic.forever(function () {
	
})
