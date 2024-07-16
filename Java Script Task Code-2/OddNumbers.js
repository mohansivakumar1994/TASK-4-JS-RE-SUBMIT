// Print odd numbers in an array using Arrow function

console.log("Arrow Function")
let oddNumbers = (arrVal) => {
    for(let i=0; i< arrVal.length; i++)
    {
        if(arrVal[i] % 2 != 0)
        {
            console.log(arrVal[i],'is Odd Number')
        }
    }
}

oddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])