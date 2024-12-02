// How to Sort and Compare an Array
//  Sorting an Array: The sort method sorts the elements of an array in place and returns the sorted array. By default, it sorts elements as strings

const fruits = ["Banana","Apple","Orange","Mango"]
fruits.sort()
console.log(fruits)

// compare callback function
const numbers = [1,2,4,3,6,5,6,7,4,8,9]
const sortedNumbers = numbers.sort((a,b) =>{
    if(a>b) return 1;
    if(b>a) return -1;
})
console.log(numbers) // it gives the array in ascending order

// Descending order change the return value

const number = [1,12,4,3,16,5,6,7,4,8,9]
const des = number.sort((a,b) =>{
    if (a > b) return -1;
    if (b > a) return 1; 
})
console.log(des)


// Reduce method

