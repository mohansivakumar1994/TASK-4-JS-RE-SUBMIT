//Return all the prime numbers in an array using Arrow function

//Arrow Function
console.log("Arrow Function")

let prime = (arr) => {
    let sortArray = []
    arr.forEach((num) =>{
        let factor = 0;
        for(let i =0; i <=num; i++)
        {
            if((num % i) === 0)
            {
                factor++
            } 
        }
        if(factor === 2)
        {
            sortArray.push(num)
        }
    })
    console.log(sortArray)
}

let arrValues = [2, 3, 5, 7, 9, 11, 17, 20]
prime(arrValues)