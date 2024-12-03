let text = "Hello JavaScript, Welcome to our world best JavaScript course"

// Slice()
console.log(text.slice(6,21))

// subString()
console.log(text.substring(6))
console.log(text.substring(-6))

// at()
console.log(text.at(-2))

// charat()

console.log(text.charAt(3))
console.log(text.charAt(-3)) //Empty

// charCodeAt()

console.log(text.charCodeAt(6))

// toUpperCase and toLowerCase

const str = "JavaScript"
console.log(str.toUpperCase())
console.log(str.toLowerCase())

// trim: removes whitesapce from both end of the string

const text1 = "   Hello   World"
console.log(text1.trim())

// split: Splits the string into an array of substrings based on a specified delimiter

const str1 = "apple,orange,banana"
console.log(str1.split())
console.log(str1.split(""))

// Split converted the String to Array
let strArr = str1.split(",")  
console.log(strArr)

// reverse: it reverses the array
let strArr1 = str1.split(",").reverse()
console.log(strArr1)

// using of join converted the Array to string
let strArr2 = str1.split(",").join()
console.log(strArr2)

let strArr3 = str1.split(",").reverse().join()
console.log(strArr3)
