let strip = neopixel.create(DigitalPin.P3, 12, NeoPixelMode.RGB_RGB)
strip.clear()
led.enable(false)
basic.forever(function () {
    strip.showRainbow(1, 360)
    for (let index = 0; index < 12; index++) {
        strip.showColor(neopixel.colors(NeoPixelColors.Red))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Green))
        basic.pause(500)
        strip.showColor(neopixel.colors(NeoPixelColors.Blue))
        basic.pause(500)
        strip.rotate(1)
        strip.show()
        basic.pause(500)
    }
})
