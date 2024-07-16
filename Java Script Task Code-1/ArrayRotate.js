// Rotate an array by k times

//Anonymous Function
console.log("Anonymous Function")

const rotateArray1 = function(arrValues, k) {

    for (let i = 0; i < k; i++) {
        arrValues.unshift(arrValues.pop())
    }
    console.log(arrValues);
  }

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let kTimes = 3
rotateArray1(arr,kTimes)

// IIFE Function
console.log("IIFE Function");

(function(arrValues, k) {

    for (let i = 0; i < k; i++) {
        arrValues.unshift(arrValues.pop())
    }
    console.log(arrValues);
})
([1, 2, 3, 4, 5, 6, 7, 8, 9, 10],3)
