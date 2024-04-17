let umidità = pins.digitalReadPin(DigitalPin.P1)
basic.forever(function () {
    basic.showNumber(pins.digitalReadPin(DigitalPin.P1))
    basic.pause(1000)
    if (pins.digitalReadPin(DigitalPin.P1) > 900) {
        basic.showIcon(IconNames.Yes)
        basic.pause(1000)
    } else {
        basic.showIcon(IconNames.No)
        basic.pause(1000)
    }
})
