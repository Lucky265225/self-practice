// Write a function addProperty(obj, key, value) that adds a new 
// property to an object and returns the updated object.
function addProperty(obj,key,value){
    obj[key] = value
    return obj
}
// console.log(addProperty({ name: 'John' }, 'age', 25)) 
// { name: 'John', age: 25 }
// console.log(addProperty({}, 'city', 'New York'))
// { city: 'New York' }


// Write a function mergeObject(obj1, obj2) and return merges two 
// objects.
function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}
// console.log(mergeObject({ name: 'John', age: 25 }, { city: 'New York' })) 
//{ name: 'John', age: 25, city: 'New York' }
// console.log(mergeObject({ name: 'Jane' }, { age: 30, country: 'USA' })) 
//{ name: 'Jane', age: 30, country: 'USA' }


// Write a function getFreqOfWords(sentence) that returns an object with keys representing 
// unique words in lowercase and values representing the frequency of occurrences of each 
// word with ignore case in the sentence. If the input string is null or undefined, return undefined.
function getFreqOfWords(sentence){
    if(sentence === null || sentence === undefined){
        return undefined
    }
    let splitWords = sentence.toLowerCase().split(" ")
    let obj = {}
    for(word of splitWords){
        if(obj[word]){
            obj[word] += 1
        }else{
            obj[word] = 1
        }
    }
    return obj
}
// console.log(getFreqOfWords('Today is present and present is your gift'))
 //{ today: 1, is: 2, present: 2, and: 1, your: 1, gift: 1 }
// console.log(getFreqOfWords('Do you best just do it'))
 //{ do: 2, you: 1, best: 1, just: 1, it: 1 }
// console.log(getFreqOfWords(null)) //undefined
// console.log(getFreqOfWords(undefined)) //undefined


// Write a function extractAndRename(obj) that extracts properties 
// name and age from an object, renames them to fullName and 
// yearsOld, and returns a new object with these properties.
function extractAndRename(obj){
    const {name:fullName,age:yearsOld} = obj
    return {fullName,yearsOld}
}
// console.log(extractAndRename({ name: 'John', age: 25, city: 'New York' })) 
 // { fullName: 'John', yearsOld: 25 }
// console.log(extractAndRename({ name: 'Jane', age: 30 })) 
 // { fullName: 'Jane', yearsOld: 30 }


// Write a function mergeAndDestructure(obj1, obj2) that merges two 
// objects using the spread operator, and then destructures the merged 
// object to extract specific properties. Return an object with the extracted properties.
function mergeAndDestructure(obj1,obj2){
    const {name,age} = {...obj1,...obj2}
    return {name,age}
}
// console.log(mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' })) 
// { name: 'John', age: 25 }
// console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' })) 
// { name: 'Jane', age: 30 }


// Write a function removeDuplicateWords(sentence) that takes a string as input and returns a new 
// string with all duplicate words removed, while preserving the order of the first occurrence of 
// each word. The function should be case insensitive, but the output should maintain the original 
// casing. If the input is null, undefined, or an empty string, return an empty string.
function removeDuplicateWords(sentence){
    if(!sentence || sentence === null || sentence === undefined){
        return ""
    }
    // const seen = [];
    // const words = sentence.split(" ");
    // const result = [];

    // for (const word of words) {
    //     const lowerWord = word.toLowerCase();
    //     if (!seen.includes(lowerWord)) {
    //     seen.push(lowerWord);
    //     result.push(word);
    //     }
    // }

    // return result.join(" ");
    const words = sentence.split(" ");
    const newSen = [];
    for(i of words){
        if( !(newSen.map(x => x.toLowerCase())).includes(i.toLowerCase())){
            newSen.push(i)
        }
    }
    return newSen.join(" ")
}
// console.log(removeDuplicateWords("This is a test This test is easy."))  // "This is a test easy."
// console.log(removeDuplicateWords("Hello hello HELLO world!")) // "Hello world!"
// console.log(removeDuplicateWords("One two two three three three")) // "One two three"
// console.log(removeDuplicateWords("")) // ""
// console.log(removeDuplicateWords(null)) // ""


// Write a function findValue(arr) that takes an array of numbers and 
// returns an object with the following properties:
//  • min: the minimum value in the array
//  • max: the maximum value in the array
//  • sum: the sum of all the values in the array
//  • avg: the average of all the values in the array
function findValue(arr){
    let sum = arr.reduce((a,b) => a+b,0)
    let sortArr = arr.sort((a,b) => a - b)
    const value = {
        min : sortArr[0],
        max : sortArr[arr.length - 1],
        sum : sum,
        avg : sum/arr.length
    }
    return value
}
// console.log(findValue([1, 2, 3, 4, 5]));


// Write a function convertToUppercase(arr) that takes an array of 
// strings and returns a new array with all strings converted to uppercase.
function convertToUppercase(arr){
    return arr.map( w => w.toUpperCase())
}
// console.log(convertToUppercase(['hello', 'world'])) // ['HELLO', 'WORLD']
// console.log(convertToUppercase(['javascript', 'is', 'fun'])) // ['JAVASCRIPT', 'IS', 'FUN']


// Write a function findMax(arr) that takes an array of numbers and 
// returns the maximum value using the reduce method.
function findMax(arr){
    return arr.reduce((max,current) => current > max ? current : max)
}
// console.log(findMax([1, 2, 3, 4])) // 4
// console.log(findMax([10, 5, 8, 7])) // 10


// Write a function removeFalsyValues(arr) that takes an array and 
// returns a new array with all falsy values removed. Falsy values include 
// 0, empty string, false, null, and undefined.
function removeFalsyValues(arr){
    return arr.filter( v => !(v === null || v === "" || v === undefined || v === false || v === 0))
}
// console.log(removeFalsyValues([0, 1, false, 2, '', 3])) // [1, 2, 3]
// console.log(removeFalsyValues(['a', '', 'b', null, 'c'])) // ['a', 'b', 'c’]
// console.log(removeFalsyValues([null, undefined, 'A'])) // ['A']


// Write a function doubleAndFilterEvenNumbers(arr) that takes an 
// array of numbers, filter out odd numbers and returns a new array 
// with doubled numbers.
function doubleAndFilterEvenNumbers(arr){ 
    return arr.filter( n => n % 2 === 0).map( n => n*2)
}
// console.log(doubleAndFilterEvenNumbers([1, 2, 3, 4])) // [4, 8]
// console.log(doubleAndFilterEvenNumbers([5, 6, 7, 8])) // [12, 16]


// Write a function filterEvenNumbers(arr) that takes an array of 
// numbers and returns a new array with only the even numbers.
function filterEvenNumbers(arr){
    return arr.filter( n => n % 2 === 0)
}
// console.log(filterEvenNumbers([1, 2, 3, 4])) // [2, 4]
// console.log(filterEvenNumbers([5, 6, 7, 8])) // [6, 8]


// Write a function populateArray(length, value) that creates an array of 
// given length and fills it with the specified value.
function populateArray(length,value){
    const arr = new Array(length).fill(value)
    return arr
}
// console.log(populateArray(3, 'a')) // ['a', 'a', 'a']
// console.log(populateArray(5, 0)) // [0, 0, 0, 0, 0]


// Write a function squareNumbers(arr) that takes an array of numbers 
// and returns a new array with each number squared.
function squareNumbers(arr){
    return arr.map( n => n**2)
}
// console.log(squareNumbers([1, 2, 3, 4])) // [1, 4, 9, 16]
// console.log(squareNumbers([5, 6])) // [25, 36]


// Write a function processNumbers(arr) that takes an array of 
// numbers, squares each number, filters out the even numbers, and 
// returns the sum of the remaining numbers.
function processNumbers(arr){
    const [a,,c,] = arr
    return a**2 + c**2
}
// console.log(processNumbers([1, 2, 3, 4])) // 10 (1^2 + 3^2) 
// console.log(processNumbers([5, 6, 7, 8])) // 74 (5^2 + 7^2)