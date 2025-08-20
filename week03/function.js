function addNumber(...x){
    return x.reduce((a,b) => a+b,0)
}
console.log(addNumber(1));

console.log(typeof addNumber);// output : function

//1. function declaration
function sum(a,b){
    return a+b
}
sum(1,2)// Called to work

let x = sum
console.log(x(1,2));

//2. function expression (arrow syntax)
let sum2 = (a,b) => a+b

//3. function expression (annonymousfunction declaration)
let sum3 = function (){
    return a+b
}

function Test(x){
    return Test2
}
function Test2(x){
    return x+50
}
// console.log(Test(Test2)(10));

function sum4(...number){
    let result = 0
    for(let i = 0 ; i < arguments.length ; i++){
        result+=arguments[i]
    }
    return result
}

console.log(sum4(1,2,3,4));



