const studentScores = [
    { name : "alice", score : 85},
    { name : "bob", score : 92},
    { name : "charlie", score : 68},
    { name : "david", score : 55},
    { name : "eve", score : 78},
]

function getPassingNames(array){
    return array.filter(std => std.score >= 70).map(std => std.name.toUpperCase())
}

const passingNames = getPassingNames(studentScores)
// console.log(passingNames);

let include_string = "abcd"
let includes_array = ["a","bb","abc"]
// console.log(include_string.includes("b"));
// console.log(includes_array.includes("b"));

let array_tradition = [1,2,3,4,5]
array_tradition.reverse((a,b)=> a - b) // แก้ original
// console.log(array_tradition);

const array_sort = [12,3,9,100]
array_sort.sort((a,b) => b - a)
// console.log(array_sort);


const students = [
  { id: 66500102, name: "Suda", gpa: 2.5 },
  { id: 66500555, name: "ada", gpa: 2.8 },
  { id: 66500589, name: "pornchai", gpa: 3.25 },
  { id: 66500104, name: "Pornsak", gpa: 3.8 },
]

console.log(students.sort((std1,std2) => std1.name.localeCompare(std2.name)))