// object literal
let student = {
    string : "jack",
    number : 5,
    array : [1,2,3,4,5],
    object : { q1 : "1" , q2 : "2"},
    hello : function() {return "hello"}//hello(){return "hello"} เขียนแบบนี้ได้เหมือนกัน
}

// for(key in student){
//     console.log(key+ " : "+ student[key]);
// }

// console.log(student.hello());

// object contructor
function Student(firstName,lastName,age){
    this.firstName = firstName
    this.lastName = lastName
    this.age = age
}

// const jack = new Student("jack","ky",19)

// console.log(jack);

// class
class Person{
    constructor(firstName,lastName,age){
        this.firstName = firstName
        this.lastName = lastName
        this.age = age
    }
}

// const jacky = new Student("jack","ky",19)

// objedct.create
const jacky = new Person("jack","ky",19)
const jackyStudent = Object.create(jacky)

// ต้องระบุ key ถึงจะเห็นข้อมูล
// console.log(jackyStudent.firstName);
// jackyStudent.id = 67130500005
// console.log(jackyStudent.id);

// object เก็บค่าเป็น reference (memory address)
const std1 = {id : 1, name : "ky"}
const std2 = {id : 1, name : "ky"}

// console.log(std1 == std2)//false
// console.log(std1 === std2)//false
// console.log(Object.is(std1,std2))//false

const std3 = std1

// console.log(std1 == std3)//false
// console.log(std1 === std3)//false
// console.log(Object.is(std1,std3))//false


function dosomething(obj){
    obj = {id : 1, name : "yoyo"}
    obj.name = "xxx"
}

const pet = {id : 1, name : "pop"}
dosomething(pet)
// console.log(pet);


function compareStudent(std1,std2){
    return std1.id === std2.id && std1.name.toLowerCase() === std2.name.toLowerCase()
}

// console.log(compareStudent(std1,std2));

const std = {id : 1, name : "ky", address : {no : 111, city : "bangkok"}}
let {name:fullname, id, address:{city:myaddress}} = std
// let {no, city:myaddress} = address
console.log(myaddress);

