//Return all the prime numbers in an array using Anonymous and IIFE function

//Anonymous Function
console.log("Anonymous Function")

let medianSortedArray = function(arrayOne, arrayTwo){
    let arr = arrayOne.concat(arrayTwo)
    arr.sort((a,b) => (a-b))
    let n = arr.length
    if(n % 2 === 0)
    {
        console.log((arr[n/2]+arr[n/2-1])/2)
    }
    else
    {
        console.log(arr[Math.floor(n/2)])
    }
}

let arrOneValues = [1, 3, 5, 7]
let arrTwoValues = [2, 4, 6, 8]
medianSortedArray(arrOneValues, arrTwoValues)

// IIFE Function
console.log("IIFE Function");

(function(arrayOne, arrayTwo){
    let arr = arrayOne.concat(arrayTwo)
    arr.sort((a,b) => (a-b))
    let n = arr.length
    if(n % 2 === 0)
    {
        console.log((arr[n/2]+arr[n/2-1])/2)
    }
    else
    {
        console.log(arr[Math.floor(n/2)])
    }
})
([1, 3, 5], [2, 4, 6])