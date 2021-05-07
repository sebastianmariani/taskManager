const { calculateTip, fahrenheitToCelsius, celciusToFahrenheit } = require("../src/math");

test('should calculare total with tip', () => {
    const total = calculateTip(10, .3)
    expect(total).toBe(13)
})

test('should calculate total with default tip', () => {
    const total = calculateTip(10)
    expect(total).toBe(12.5)
})

test('should convert 32 fahrenheit to 0 celcius', () => {
    const conversion = fahrenheitToCelsius(32)
    expect(conversion).toBe(0)
})

test('Should convert celcius to farhenheit', () => {
    const conversion = celciusToFahrenheit(0)
    expect(conversion).toBe(32)
})