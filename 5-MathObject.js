// Math: Math namespace object contains static properties and methods for mathematical constants and functions

// Math.PI : represents the mathematical const

console.log(Math.PI)

// Math.abs() : The Math.abs() static method returns the absolute value of a number

// zero se kitna dur hai bas yehi karta Math.abs()
console.log(Math.abs(5))
console.log(Math.abs(-3))

// Math.round() : Rounds a number to the nearest interger
console.log(Math.round(3.7))
console.log(Math.round(3.2))

// Math.ceil(x) : Returns the values of x rounded up to its nearest integer
console.log(Math.ceil(7.8))
console.log(Math.ceil(7.1))

// Math.floor(x) : Returns the value of x rounded down to its nearest integers

console.log(Math.floor(5.7))
console.log(Math.floor(5.1))

// Math.trunc(x) : Returns the integer part of x

console.log(Math.trunc(11.2))
console.log(Math.trunc(1.9))

// Math.pow(x,y) : Returns the values of x to the power of y
console.log(Math.pow(2, 3))
console.log((2**3))

// Math.sqrt() : Math.sqrt(x) returns the square root of x
console.log(Math.sqrt(36))

// Generate Random Number

// Math.random() : returns a random number between 0(inclusive), and 1 (exclusive) 
console.log(Math.random())
console.log(Math.random() * 100)
console.log((Math.random() * 100).toFixed(3))
console.log(Math.round(Math.random() * 100))