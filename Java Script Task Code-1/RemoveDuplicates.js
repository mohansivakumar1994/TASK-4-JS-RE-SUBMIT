// Remove duplicates from an array
// Filter method : creates a new array of elements that matches the passed condition through the callback function. 
//                 It will include only those elements for which true is returned.
// item: This parameter holds the value of the elements being processed currently.
// index: This parameter is optional, it holds the index of the current element in the array starting from 0.

// Anonymous Function
console.log("Anonymous Function")
let arrVals = ["apple", "mango", "Grapes", "apple", "orange", "mango", "mango", "Banana"];

let arrOfDuplicates = function removeDuplicates(arr) {
	return arr.filter((item,index) => arr.indexOf(item) === index);
}
console.log(arrOfDuplicates(arrVals));

// IIFE Function
console.log("IIFE Function");

(function (arr){
	console.log(arr.filter((item,index) => arr.indexOf(item) === index));
})
(["apple", "mango", "Grapes", "apple", "orange", "mango", "mango", "Banana"]);