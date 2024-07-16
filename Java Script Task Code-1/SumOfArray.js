//Sum of all numbers in an array using Anonymous and IIFE function

//Anonymous Function
console.log("Anonymous Function")

const sumOfArray = function(arrayValues)
{   
    let sum = 0
    for(let i of arrayValues)
    {
        sum += i 
    }
    console.log(sum)
}
sumOfArray([2, 4, 6])

// IIFE Function
console.log("IIFE Function");
(function(arrayValues){
    let sum = 0
    for(let i of arrayValues)
    {
        sum += i
    }
    console.log(sum)
})([2, 4, 6])