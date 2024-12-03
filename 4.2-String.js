let text = "HELLO JavaScript, Welcome to our world best JavaScript course"
// What is the output for the following code?

console.log(text.slice(1))
console.log(text.slice(1,10))
console.log(text.substring(-1))
console.log(text.replace("ELLO","ello"))

// 1. Write a js function that prints the letters 'a' through 'z' in the console. You should use a loop to iterate through the letters and print each on a new line

console.log("a".charCodeAt(0))
console.log("z".charCodeAt(0))
console.log(String.fromCharCode(122))

for(let char=97; char<=122;char++){
    // console.log(char,String.fromCharCode(char))
    console.log(String.fromCharCode(char))
}

// 2. Write a function to count the number of vowels in a string?

const checkAllVowel = (str) =>{
    const vowels = "aeiou"
    let count = 0
    for(let char of str){
        // console.log(str.includes(char))
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(checkAllVowel("Hello World"))


// 3. Write a js function to check if the given string is Pangran or not ?

const PangranChecker = (str) =>{
    let inputArr = str.toLowerCase().split("")

    const values = inputArr.filter((curElm) =>
        curElm.charCodeAt() >= "a".charCodeAt() && curElm.charCodeAt() <= "z".charCodeAt()
    );
    return new Set(values).size === 26
}
console.log(PangranChecker("The quick brown fox jumps over the lazy dog")) // it contain a-z letter give True

console.log(PangranChecker("The uick brown fox jumps over the lazy dog")) // False


