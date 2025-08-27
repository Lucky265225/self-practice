// const words = ["apple", "mango", "orange", "banana"]
// words.reverse()
// console.log(words);

//1. annonymous arrow function
// const startAWords = words.filter((word) => word.startsWith("a"))
// console.log(startAWords);

//2. annonymous function declaration
// const startAWords1 = words.filter(function (word){
//     return word.startsWith("a")
// })
// console.log(startAWords1);

//3. named arrow function
// const startAWords3 = (word) => word.startsWith("a")
// const startAWords4 = words.filter(startAWords3)
// console.log(startAWords4);
 
//4. named function declaration
// function startAWords5(word){
//     return word.startsWith("a")
// }
// const startAWords6 = words.filter(startAWords5)
// console.log(startAWords6);

//use forEach
// const startAWords7 = []
// words.forEach((word) => {
//     if(word.startsWith("a")){
//         startAWords7.push(word)
//     }
// })
// console.log(startAWords7);

const employees = [
  {
    id: "e1001",
    firstname: "Somchai",
    lastname: "Jaidee",
  },
  {
    id: "e1002",
    firstname: "Pornchai",
    lastname: "Deejai",
  },
  {
    id: "e1005",
    firstname: "Suda",
    lastname: "Rakdee",
  },
]
// Each person's fullname
// const employeeFullname = employees.map(em => (`${em.firstname} ${em.lastname}`).toUpperCase())
// console.log(employeeFullname);

// const employeeJai = employees.map(em => (`${em.firstname} ${em.lastname}`).toUpperCase())
//                     .filter((emJai) => emJai.includes("JAI"))
// console.log(employeeJai);


const carts = [
  { productId: 1002, price: 10, amount: 5 },
  { productId: 2005, price: 100, amount: 2 },
  { productId: 5001, price: 5, amount: 4 },
]
//net price = total price * VAT 7%
// const netPrice = carts.reduce((total,product) => total + (product.price*product.amount),0)*1.07 
// console.log(netPrice);


// const words = ["apple", "orange", "banana"]
//add 'cherry', 'berry' after 'orange'
// words.splice(2, 0, "cherry", "berry") //(index,number of delete)
// console.log(words) //[ 'apple', 'orange', 'cherry', 'berry', 'banana' ]
// //delete 'cherry'
// words.splice(2, 1) //(index,number of delete)
// console.log(words) //[ 'apple', 'orange', 'berry', 'banana' ]
// //replace 'berry' with 'mango'
// words.splice(2, 1, "mango") //(index,number of delete)
// console.log(words) //[ 'apple', 'orange', 'mango', 'banana' ]


const words = ["apple", "orange", "banana", "mango", "cherry"]
// console.log(words.slice(1)) // ["orange", "banana", "mango", "cherry"]
// console.log(words.slice(0, 3)) //["apple", "orange", "banana"]
// console.log(words.slice(2, 5)) // ["banana", "mango", "cherry"]
// console.log(words.slice(2)) // ["banana", "mango", "cherry"]
// console.log(words.slice(-3)) // ["banana", "mango", "cherry"]
 

// words.fill(null) //(value,start,end) end is not include
console.log(words);
//words.fill(null,1,3) //change index 1 and 2 not include 3
