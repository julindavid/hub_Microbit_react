def on_received_number(receivedNumber):
    global Player_Number, Player_List
    Player_Number += 1
    Player_List += 1
radio.on_received_number(on_received_number)

def f_list(list2: List[any]):
    if 0 == 0:
        pass
radio.set_group(17)
HUB_number = control.device_serial_number()
Player_Number = 0
Player_List = 0

def on_forever():
    if Player_List == 0:
        basic.show_number(0)
    else:
        pass
basic.forever(on_forever)

def on_forever2():
    if HUB_number == control.device_serial_number():
        pass
basic.forever(on_forever2)

def on_forever3():
    pass
basic.forever(on_forever3)
