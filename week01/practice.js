// Write a function that takes an array and returns it reversed.
function reverseArray(array){
    return array.sort((a,b) => b - a)
}

// console.log(reverseArray([1, 2, 3, 4, 5]));

// Write a function that returns the largest number in an array.
function findLargestNumber(array){
    return array.sort((a,b) => b - a)[0]
}

// console.log(findLargestNumber([12, 45, 7, 32, 89, 3]));

// Write a function that returns the sum of all numbers in an array.
function sumAllNumber(array){
    return array.reduce((total,n) => total + n,0)
}

// console.log(sumAllNumber([5, 10, 15]));

// Write a function that removes duplicate values from an array.
function removeDuplicate(array){
    return array.filter((num,index,self) => self.indexOf(num) === index)
}

// console.log(removeDuplicate([1, 2, 2, 3, 4, 4, 5]));

// Write a function that filters only even numbers from an array.
function evenNumber(array){
    return array.filter( num => num % 2 === 0)
}

// console.log(evenNumber([1, 2, 3, 4, 5, 6, 7]));
