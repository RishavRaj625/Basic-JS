// Write a program to multiply each element with 2

const num = [1,2,3,4,5]

num.forEach((currElm,index,arr) =>{
    console.log(`${(index+1)*2}`)
})

num.forEach((currElm) => {
    console.log(currElm * 2) // having same result 
})

// using the map

num.map((currElm) => {
    console.log(currElm*2) // gives normal output
})

const val = num.map((currElm) => {
    // return currElm * 2
    return `${currElm * 2}` // both gives same result
})
console.log(val) // gives the output in the form of new array


// Add Dec at the end of an array

const months = ["Jan","march","April","June","July"]
months.push("Dec")
console.log(months)

// Method 2
months.pop()
console.log("\n")

months.splice(months.length,0,"December")
console.log(months)

// Update march to March (update)

const indexUpdate = months.indexOf("march")
months.splice(indexUpdate,1,"March")
console.log(months)

// Delete June from Array

const indextodelete = months.indexOf("June")
months.splice(indextodelete,1)
console.log(months)

// Given an array of products where each product has a name and a price, write a function that uses the filter method to return an array containing only the products with a price less than or equal to 500

// It is an object
const products = [
    {name: "Laptop", price: 1200},
    {name: "Phone", price: 800},
    {name: "Tablet", price: 300},
    {name: "Smartwatch", price: 150},
];
// to access the object we uses the .
const filterProduct = products.filter((currElm) =>{
    return currElm.price <= 500
})
console.log(filterProduct)

// Filter Unique Value

// First Method
const Value = [1,2,3,4,6,5,6,7,8,9]
let uniqueValues = Value.filter((currElm,index,arr) => {
    // console.log(index)
    // console.log(arr.indexOf(currElm))

    return arr.indexOf(currElm) === index
})
console.log(uniqueValues)

// Second Method : By using Set
const Value1 = [1,2,3,4,6,5,6,7,8,9]
console.log(new Set(Value1))
console.log([new Set(Value1)]) // now it gives in the form of array


// Using map to square each number and create a new array
const Num = [1,2,3,4,5]
const Result = Num.map((currElm) => {
    return currElm * currElm
})
console.log(Result)

// Using the map method, write a function that takes an array of strings and returns a new array where each string is captialized.

const words = ["apple", "banana","cherry", "date"]

const cap = words.map((currElm) =>{
    return currElm.toUpperCase()
})
console.log(cap)

// Uisng the map method, write a function that takes an array of numbers and returns a new array where each number is squared, but only if it's an even number

// Method 1
const number = [1,2,3,4,5]
const evenNum = number.map((currElm) =>{
    if(currElm % 2 === 0){
        return currElm * currElm
    }
    else{
        return NaN 
    }
})
console.log(evenNum)

// method 2 : it gives only even square value because it filtered the even value 

const number1 = [1,2,3,4,5]
const evenNum1 = number1.map((currElm) =>{
    if(currElm % 2 === 0){
        return currElm * currElm
    }
}).filter((currElm) => currElm != undefined);
console.log(evenNum1)


// Reduce method
// Calculates the total price of items in a shopping cart. The function should take an array of item prices as input and return the total price

const product = [100,300,250,985,260]

const totalPrice = product.reduce((accum, currElm) =>{
    return accum + currElm
},0)
console.log(totalPrice)
