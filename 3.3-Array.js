// Searching and Filter in an Array

// 1. indexOf : it gives the index number

const persons = ["Ram", "Hari", "Sita","Bishal","Gita"]

console.log(persons.indexOf("Sita")) // it gives the index number
console.log(persons)

// 2. includes() : if the element is present in the array then it gives true value otherwise it gives the false 

console.log(persons.includes("Bishal")) 

const num = [88,85,87,85,94,95,96,85,98]
console.log(num.indexOf(85))
console.log(num.includes(95))

const result = num.indexOf(85) // it gives the index number where first 85 is presen / occurance 
console.log(result)

const result1 = num.lastIndexOf(85) // it give the index number where last 85 is present
console.log(result1)

// Find()
const number = [22,25,21,24,33,34,36]
const val = number.find((currElm) =>{
    return currElm > 23
})
console.log(val)

// findIndex()

const num1 = [1,2,3,4,5,6,7,12,9]
const val1 = num1.map((currElm) => currElm* 5);
console.log(val1)

const val2 = val1.findIndex((currElm) =>{
    return currElm > 10
})
console.log(val2)

// Filter : it gives total element in the form of array ,Find gives only one element

const Num = [1,2,3,4,5,6,7,12,9]
const val3 = Num.filter((currElm) =>{
    return currElm > 5
})
console.log(val3)


// Let's say user wants to delete value 6

let value = 6 
let fil = [1,2,3,4,6,5,6,7,8,9]

let updatedCard = fil.filter((currElm) => {
    return currElm != value;
})
console.log(updatedCard)