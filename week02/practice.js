// Write a function that returns all keys of an object.
function returnAllKey(object){
    return Object.keys(object)
}

// console.log(returnAllKey({ name: "Alice", age: 25, city: "Bangkok" }));

// Write a function that returns all values of an object.
function returnAllValue(object){
    let result = []
    for(key in object){
        result.push(object[key])
    }
    return result
}

// console.log(returnAllValue({ brand: "Toyota", model: "Camry", year: 2020 }));

// Write a function that checks if a given property exists in an object.
function checkInProperty(object,check){
    let keys = Object.keys(object)
    console.log(keys);
    
    return keys.includes(check) ? true : false
}

// console.log(checkInProperty({ name: "John", age: 30 }, "salary"))


// Write a function that merges two objects into one.
function mergeObject(obj1,obj2){
    return {...obj1,...obj2}
}

// console.log(mergeObject({ a: 1, b: 2 }, { c: 3, d: 4 }));
