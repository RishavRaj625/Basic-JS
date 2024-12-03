let val = "Hello World"
console.log(val.length) // it count the extra space

let name1 = "Hello my name is 'Rishu Raj'.\ I am from 'Deoghar' "
console.log(name1)

// String Search Methods

let text = "Kalyan Sir"
console.log(text.indexOf("Sir")) // it check the S it present in index number 7

// Making array

let strArr = Array.from(text)
console.log(strArr)

let strmap = strArr.map((currElm,index) => {
    return `${currElm} - ${index}`
})
console.log(strmap)


// Search method

let text1 = "Hello JavaScript, Welcome to our world best JavaScript course"
let result = text1.search("JavaScript")
let result1 = text1.search(/Javascript/i) // no error
console.log(result)
console.log(result1)

// match() : Returns an array of the matched values or null if no match is found

let str = "Hello JavaScript, Welcome to our world best JavaScript course"

let out = str.match("JavaScript")
console.log(out)

let output = str.match(/JavaScript/) // Here the js convert the normal text into regular expression str.match(/JavaScript/) without the g(global) flag
console.log(output) // Same output


// startsWith(): The startsWith() method returns true if a string begins with a specified value otherwise it returns false

let fin = "Hello JavaScript, Welcome to our world best JavaScript course"

// let startRes = fin.startsWith("Hello") // True
let startRes = fin.startsWith("hel") // False
console.log(startRes)
