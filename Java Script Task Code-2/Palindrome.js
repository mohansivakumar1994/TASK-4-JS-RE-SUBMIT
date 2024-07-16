// Return all the palindromes in an array using Arrow function

console.log("Arrow Function")
let findAllPalindromes = (arrValues) =>{
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