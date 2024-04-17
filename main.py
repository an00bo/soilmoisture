umidità = pins.digital_read_pin(DigitalPin.P1)

def on_forever():
    basic.show_number(pins.digital_read_pin(DigitalPin.P1))
    basic.pause(1000)
    if pins.digital_read_pin(DigitalPin.P1) > 900:
        basic.show_icon(IconNames.YES)
        basic.pause(1000)
    else:
        basic.show_icon(IconNames.NO)
        basic.pause(1000)
basic.forever(on_forever)
