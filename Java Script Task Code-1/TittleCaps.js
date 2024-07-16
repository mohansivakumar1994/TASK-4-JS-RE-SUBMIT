// all the strings to title caps in a string array using Anonymous and IIFE function
//Anonymous Function
console.log("Anonymous Function")

let nameArray = ['mohan sivakumar', 'information', 'technology']
const nameTitleCaps = function (arrNames){
    for(let i = 0; i < arrNames.length; i++)
    {
        let titleCaps = arrNames[i].charAt(0).toUpperCase() + arrNames[i].slice(1)
        console.log(titleCaps)
    }
}
nameTitleCaps(nameArray)

// IIFE Function
console.log("IIFE Function");
(function(nameArray){
    for(let i = 0; i < nameArray.length; i++)
    {
        let titleCaps = nameArray[i].charAt(0).toUpperCase() + nameArray[i].slice(1)
        console.log(titleCaps)
    }
})(['mohan sivakumar', 'information', 'technology']);