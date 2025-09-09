const cs = console.log

let array = [1,2,3,4,5]
let array_constructor = new Array(5,0)
let array_of = Array.of(1) // can create one numberic
let array_from = Array.from(array) // return new array
let letters = [..."HELLO WORLD"]


let object = {name : "ky" , name : "lucky"} // if key same name. it will return last property. this object literal
function Point_con(x,y){ // constructor function
    this.x = x
    this.y = y
}
const p1 = new Point_con(10,20)
const p2 = new Point_con(30,40)

class Point_cla{ // ES6 Class
    constructor(x,y){
        this.x = x 
        this.y = y
    }
}
const p3 = new Point_cla(50,60)
const p4 = new Point_cla(70,80)
const object_old = {ID : 101 , firstname : "luck" , lastname : "ky"}
const object_new = Object.create(object_old) // object_new is prototype
// cs(object_new) // return {} but can call by key of object_old


// function expressions
const getRetangleArea = function(w,h){
    return w * h
}
// named function expressions
const fact = function factorial(n){
    if(n <= 1){
        return 1 
    }
    return n * factorial(n - 1)
}
// arrow function
// let a = 10
// let b = 10
// let c = () => a * b


// ให้เขียนฟังก์ชันที่รับออบเจ็กต์ student และใช้ nested destructuring 
// พร้อม default parameter เพื่อดึงค่า firstName และ lastName ของนักเรียน ถ้าไม่มี lastName ให้กำหนดค่าเป็น "Unknown"
function getFullName({ fullName: {firstName,lastName="Unknow"}}){
    return `${firstName} ${lastName}`
}
const student = {
  id: 101,
  fullName: {
    firstName: "Somchai"
  }
};
// console.log(getFullName(student));


// ให้เขียนโค้ดที่หาค่า ผลรวมของเลขคู่ที่มากกว่า 10 จากอาเรย์ Input ตัวอย่าง
function plusArray(num){
    return num.filter(n => n > 10 && n % 2 === 0).reduce((acc,cur)=>acc+cur,0)
}
const nums = [3, 8, 12, 25, 40, 7, 18];
// cs(plusArray(nums))


// สร้างโมดูล mathUtils.js ที่มีทั้ง named export (add, multiply) และ default export (PI) แล้ว import มาในไฟล์ main.js Expected Behavior
import PI, { add, multiply } from './mathUtils.js';
// console.log(add(5, 10));      // 15
// console.log(multiply(3, 4));  // 12
// console.log(PI);              // 3.14159


// ให้เขียนฟังก์ชัน isEqual(obj1, obj2) ที่เปรียบเทียบว่า 2 objects มีค่าเหมือนกันหรือไม่ โดย
// ใช้ === ตรวจสอบ referential equality
// และเขียนโค้ดตรวจสอบ shallow equality (ค่า property ตรงกันทุกตัว แต่เป็นคนละ reference)
// Input ตัวอย่าง
function isEqual(obj1,obj2){
    if(obj1 === obj2){
        let key1 = Object.keys(obj1)
        let key2 = Object.keys(obj2)
        if(key1.length !== key2.length){
            return false
        }
        for(let key in key1){
            if(obj1[key] !== obj2[key]){
                return false
            }
        }
        return true
    }
    return false
}
const a = { id: 1, name: "JS" };
const b = { id: 1, name: "JS" };
const c = a;
// console.log(isEqual(a, b));
// console.log(isEqual(a, c));


// ให้เขียนฟังก์ชัน getSubjectInfo ที่รับ object course แล้วใช้ deep destructuring + 
// rest parameter เพื่อดึงค่า courseName และ instructor.firstname ออกมา 
// และคืนค่าเป็น object ใหม่ที่รวม property ทั้งหมดใน instructor (ยกเว้น firstname) ไว้ใน field others.
function getSubjectInfo({courseName,instructor:{firstname,lastname,email}}){
    return {courseName,firstname,other:{lastname,email}}
}
const course = {
  courseId: "INT201",
  courseName: "Client Side Programming",
  instructor: {
    firstname: "Umaporn",
    lastname: "Supasitthimethee",
    email: "uma@example.com"
  }
};
// console.log(getSubjectInfo(course));


// รับ array ของ object { id, score }เลือกเฉพาะคนที่ score >= 50
// แปลงเป็นสตริง "id:score"รวมทุกค่าเข้าด้วยกันโดยใช้ ;
const students = [
  { id: 1, score: 49 },
  { id: 2, score: 70 },
  { id: 3, score: 88 },
  { id: 4, score: 30 }
];
// cs(students.filter( user => user.score >= 50).map( user => `${user.id}:${user.score}`).join(";"))


// ให้เขียนฟังก์ชัน makeMultiplier(factor) ที่ return ฟังก์ชันใหม่ (closure) สำหรับคูณค่าที่รับเข้ามา
// แล้วใช้มันคู่กับ map() เพื่อคูณทุกค่าด้วย 10
function makeMultiplier(x){
    return  e => e * x
}
const numss = [1, 2, 3, 4];
const multiplyBy10 = makeMultiplier(10);
// console.log(numss.map(multiplyBy10));


// ให้เขียนโมดูล dataUtils.js ที่ export ฟังก์ชัน groupByCategory(products)
// รับ array ของ object { id, name, category } คืนค่าเป็น object ที่ group ตาม category
import { groupByCategory } from './dataUtils.js';
const products = [
  { id: 1, name: "Pen", category: "Stationery" },
  { id: 2, name: "Book", category: "Stationery" },
  { id: 3, name: "Apple", category: "Food" }
];
// console.log(groupByCategory(products));
