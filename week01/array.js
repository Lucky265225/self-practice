//---------------array---------------
//array เข้าถึงโดยใข้ index ทำให้มีลำดับ เริ่ม index ที่ 0 , length-1
let array = ["LUCKY","lucky","LK","lk"]
let size_array = array.length
let last_array = array[array.length - 1]

array.push({LK:"LUKCY"},["LK","LUCKY"])

for(let i = 0 ; i < array.length ; i++){
    console.log(array[i])
}

array.pop(last_array)

//shrink array with any operation
let [first,...rest] = array
console.log(first);
console.log(rest);

//apply spread on string varible
let spread = "HELLO"
console.log([...spread]);

//create array with new constructor
const arr1 = new Array()
console.log(arr1);
const arr2 = new Array(5)
console.log(arr2);
const arr3 = new Array("js","j","s")
console.log(arr3);

//rest operator work in a destructuring array
let [,,a,,...e] = [5,10,15,20,25]
console.log(a);
