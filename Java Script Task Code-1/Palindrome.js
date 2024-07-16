// Return all the palindromes in an array using Anonymous and IIFE function

console.log("Anonymous Function")
let findAllPalindromes = function(arrValues){
    for(let val of arrValues)
    {
        if(val === val.split('').reverse().join(''))
        {
            console.log(val,"is Palindrome")
        }
        else
        {
            console.log(val,"is not Palindrome")
        }   
    }
}

let inputArray = ["raceCar", "hello", "level", "12321", "not", "radar"];
findAllPalindromes(inputArray)

//IIFE Function
console.log("IIFE Function");

(function(arrVal){
    for(let val of arrVal)
    {
        if(val === val.split('').reverse().join(''))
        {
            console.log(val,"is Palindrome")
        }
        else
        {
            console.log(val,"is not Palindrome")
        }   
    }
})
(["raceCar", "hello", "level", "12321", "not", "radar"]);