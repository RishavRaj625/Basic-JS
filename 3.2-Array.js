// How to insert,Add, Replace and Delete Elements in Array(CRUD)

const persons = ["Ram", "Hari", "Sita","Bishal"]
console.log(persons)

persons.push("Gita") //Push method help to Add elememt in last 
console.log(persons)
console.log(persons.push()) // Push method give the length of array

persons.pop() // Pop remove the last element
console.log(persons)


let fruit1 = ["apple","orange","banana","grapes","PineApples"]
fruit1.unshift("Gauva") // adding new element in first of array 
console.log(fruit1)
console.log(fruit1.unshift("Gauva")) // gives length

// Shift : remove the first element of array
console.log(fruit1.shift())
console.log(fruit1)

// Splice
let fruit = ["apple","orange","banana","grapes","PineApples"]
// gives empty data
// console.log(fruit.splice()) 

// gives the output from index 1
//console.log(fruit.splice(1)) 

// it delete the orange starting index 1 and last delete index also 1 so orange was deleted from array
// console.log(fruit.splice(1,1)) 

console.log(fruit.splice(1,1,"orange")) // now orange is added in index 1
console.log(fruit)

// what if you want to add the elemnt at the end

// fruit.splice(-1,0,"Mango") // adding in last 2nd 
fruit.splice(fruit.length,0,"Mango") // adding in last
console.log(fruit)



