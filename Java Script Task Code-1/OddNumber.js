// Printing Odd numbers from Array using Anonymous and IIFE function

//Anonymous Function
console.log("Anonymous Function")
const oddNumbers = function(arrVal)
{
    for(let i=0; i< arrVal.length; i++)
    {
        if(arrVal[i] % 2 != 0)
        {
            console.log(arrVal[i],'is Odd Number')
        }
    }
}

let arrOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
oddNumbers(arrOne)

// IIFE Function
console.log("IIFE Function");

(function(arrVal){   
    for(let i=0; i< arrVal.length; i++)
    {
        if(arrVal[i] % 2 !== 0)
        {
            console.log(arrVal[i],'is Odd Number')
        }
    }
})([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);