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

 
// console.log("Test 14a:", nthHighestUniqueSalary(
//   [
//     { name: "A", salary: 50000 },
//     { name: "B", salary: 50000 },
//     { name: "C", salary: 40000 },
//     { name: "D", salary: 30000 }
//   ],
//   1
// ));
// // Output: Test 14a: [{name:"A",salary:50000},{name:"B",salary:50000}]
 
// console.log("Test 14b:", nthHighestUniqueSalary(
//   [
//     { name: "A", salary: 50000 },
//     { name: "B", salary: 50000 },
//     { name: "C", salary: 40000 },
//     { name: "D", salary: 30000 }
//   ],
//   2
// ));
// // Output: Test 14b: [{name:"C",salary:40000}]
 
// console.log("Test 14c:", nthHighestUniqueSalary(
//   [
//     { name: "A", salary: 50000 },
//     { name: "B", salary: 50000 },
//     { name: "C", salary: 40000 },
//     { name: "D", salary: 30000 }
//   ],
//   4
// ));
// Output: Test 14c: []  (เพราะมีแค่ 3 อันดับเงินเดือนแบบไม่ซ้ำ)

// เขียนฟังก์ชัน mergeData(arr1, arr2) รวม array object ตาม id ถ้าซ้ำให้นำของ arr2 ทับ
function mergeData(arr1, arr2) {
  // เขียนโค้ดที่นี่
  return [...arr1,...arr2].reduce((acc,cur) => {
    let findObj = acc.findIndex(obj => obj.id === cur.id)
    if(findObj === -1){
      acc.push(cur)
    }else{
      acc[findObj] = cur
    }
    return acc
  },[])
}
// console.log(
//   "Test 11:",
//   mergeData(
//     [
//       { id: 1, val: 10 },
//       { id: 2, val: 20 },
//     ],
//     [
//       { id: 2, val: 99 },
//       { id: 3, val: 30 },
//     ]
//   )
// );
// Output: Test 11: [{id:1,val:10},{id:2,val:99},{id:3,val:30}]

// โจทย์ 15 (Class):
// สร้างคลาส EmployeeStats จัดการพนักงาน {id, name, dept, salary}
// มีเมธอด:
// - upsert(emp): เพิ่ม/อัปเดตข้อมูลพนักงานตาม id
// - raise(id, amount): ปรับเงินเดือนพนักงานเพิ่มตามจำนวน amount
// - median(dept): คืน "ค่ามัธยฐาน" ของเงินเดือนในแผนกที่ระบุ (ถ้าไม่มี ให้คืน null)
class EmployeeStats {
  // เขียนโค้ดที่นี่...
  constructor(){
    this.employees = []
  }
  getemployess(){
    return this.employees
  }
  upsert(newemp){
    let id = this.employees.findIndex(emp => emp.id === newemp.id)
    id !== -1 ?  this.employees[id] = newemp : this.employees.push(newemp)
  }
  raise(id, amount){
    let emp = this.employees.find(emp => emp.id === id)
    emp.salary+=amount
  }
  median(dept){
    let numOfdept = this.employees.filter(emp => emp.dept === dept).length
    let sortSalary = this.employees.filter(emp => emp.dept === dept).sort((a,b) => a.salary - b.salary).map(emp => emp.salary)
    // console.log(numOfdept);
    // console.log(sortSalary);
    if(numOfdept === 0){
      return null
    }

    if(numOfdept % 2 === 0){
      return (sortSalary[(numOfdept / 2) - 1] + sortSalary[(numOfdept / 2)])/2
    }else{
      return sortSalary[Math.floor(numOfdept / 2)]
    }
  }
}
const es = new EmployeeStats();
es.upsert({ id: 1, name: "Ann", dept: "IT", salary: 30000 });
es.upsert({ id: 2, name: "Bee", dept: "IT", salary: 50000 });
es.upsert({ id: 2, name: "Big", dept: "IT", salary: 50000 });
es.upsert({ id: 3, name: "Cat", dept: "HR", salary: 40000 });
es.raise(1, 10000); // Ann จาก 30000 → 40000
 
console.log("Test 15:", {
  medianIT: es.median("IT"),
  medianHR: es.median("HR"),
  medianSales: es.median("Sales")
});
 
// Output: Test 15: { medianIT: 45000, medianHR: 40000, medianSales: null }

// console.log(es.getemployess());
