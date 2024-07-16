// Convert all the strings to title caps in a string array using Arrow function

console.log("Arrow Function")

const nameTitleCaps = (arrNames) =>{
    for(let i = 0; i < arrNames.length; i++)
    {
        let titleCaps = arrNames[i].charAt(0).toUpperCase() + arrNames[i].slice(1)
        console.log(titleCaps)
    }
}
nameTitleCaps(['mohan sivakumar', 'information', 'technology'])