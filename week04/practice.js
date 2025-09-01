// โจทย์ 14:
// เขียนฟังก์ชัน nthHighestUniqueSalary(employees, n)
// คืน Array ของ "พนักงานทั้งหมด" ที่มีเงินเดือนเป็น "อันดับที่ n แบบไม่ซ้ำ" (1 = เงินเดือนสูงสุด)
// ถ้าไม่มีอันดับที่ n ให้คืน []
function nthHighestUniqueSalary(employees, n) {
    let group_salary = employees.map((em) => em.salary).filter((salary,index,self) => self.indexOf(salary) === index)
    if(n > group_salary.lenght) return []
    let result  = employees.filter( em => em.salary === group_salary[n-1])
    return result
}

 
console.log("Test 14a:", nthHighestUniqueSalary(
  [
    { name: "A", salary: 50000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 40000 },
    { name: "D", salary: 30000 }
  ],
  1
));
// Output: Test 14a: [{name:"A",salary:50000},{name:"B",salary:50000}]
 
console.log("Test 14b:", nthHighestUniqueSalary(
  [
    { name: "A", salary: 50000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 40000 },
    { name: "D", salary: 30000 }
  ],
  2
));
// Output: Test 14b: [{name:"C",salary:40000}]
 
console.log("Test 14c:", nthHighestUniqueSalary(
  [
    { name: "A", salary: 50000 },
    { name: "B", salary: 50000 },
    { name: "C", salary: 40000 },
    { name: "D", salary: 30000 }
  ],
  4
));
// Output: Test 14c: []  (เพราะมีแค่ 3 อันดับเงินเดือนแบบไม่ซ้ำ)