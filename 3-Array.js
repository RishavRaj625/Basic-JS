// Empty Array
let arr = []
console.log(typeof arr)

// By using array Constructor
let fruit = new Array("apple","orange","banana");
console.log(fruit)

// By using array literal
let fruits = ["apple","orange","banana","grapes","PineApples"]
console.log(fruits)
// Index

console.log(fruits[1])
fruits[2] = "Mango" // Modify
console.log(fruits)


// Array Traversal

// 1. For of loop, also known as iterable

for(let item of fruits){
    console.log(item)
}

console.log("\n")
// 2. For loop
let fruit1 = ["apple","orange","banana","grapes","PineApples"]
for(let i=0;i<fruit1.length;i++){
    console.log(fruit1[i])
}

//3. For in (in means index)

console.log("\n")

for(let item in fruit1){
    console.log(item)
}

// 4. forEach

fruit1.forEach((currElm, index, arr) =>{
    // console.log(currElm);
    // console.log(index)
    console.log(`${currElm} ${index}`)
    // console.log(arr) it gives value of array
})

// 5. Map Function (forEach is same but it can't return value)
console.log("\n")

fruit1.map((currElm,index,arr) => {
    console.log(`${currElm} ${index}`)
})
// Map Function (forEach is same but it can't return value)
const myMapArr = fruit1.map((element,index,arr) => {
    // return `${element} ${index}`
    return `My fruits is ${element}`
}) 
console.log(myMapArr) // it gives the output in the form of array




