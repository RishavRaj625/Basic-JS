// Basic Calculator with the help of function

function Calculator(a,b,operator){
    let result;
    switch(operator){
        case "+":
            return a + b
        case "-":
            result = a - b
            return result
        case "*":
            result = a * b
            return result
        case "/":
            if (b == 0){
                console.log(`This ${a} Number is not divided by ${b}`)
            }
            else{
                result = a / b
                return result
            }
        case "**":
            result = a ** b
            return result
        case "%":
            result = a % b
            return result
        default:
            console.log("No Opertaor found...")
    }
}
let rk = Calculator(5,3,"/")
console.log(rk)

// Reverse String

// const isReverse = (str) =>{
//     for(let i=str.length-1; i>=0;i--){
//         console.log(str[i])
//     }
// }
// isReverse("Rishu Raj")

const isReverse = (str) =>{
    let Reverse = "";
    for(let i=str.length-1; i>=0;i--){
        // Both are same one is Concatenatiion and other is eval(backtic)
        Reverse = Reverse + (str[i])
        // Reverse = `${Reverse} ${str[i]}`  
    }
    return Reverse
}
let rev = isReverse("Rishu Raj")
console.log(rev)

// Palindrome Number means 
// A number that reads the same forward and backward, or when its digits are reversed. For example, 121 and 12321 are palindrome numbers. More Example like radar, level, aba etc

const palindrome = (palin) =>{
    let Reverse = ""
    for(let i = palin.length-1; i>=0; i--){
        Reverse = Reverse + palin[i]
    }

    // palin == Reverse ? true : false;  Tenary method

    if(palin == Reverse){
        // return true 
        return "Given Value is Palindrome"
    }
    else{
        // return false
        return "Given Value is not a Palindrome"

    }
}
// Given Value
let drome = palindrome("radar")
console.log(drome)
// taking argument from the users
let drome1 = prompt("Enter the name : ")
console.log(palindrome(drome1))
