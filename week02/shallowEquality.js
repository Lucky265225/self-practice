// โดยปกติ object เวลาเปรียบเทียบจะเปรียบเทียบจากหน่วยความจำวาสถูกเก็บที่เดียวกันหรือไม่
// เราจะเปรียบเทียบโครงสร้างข้างใน object ว่่าเหมือนกันไหม เช่น key , value ซึ่ง shallow equality เป็ฯการเปรียบเทียบเหล่านี้
function shallowEquality(obj1,obj2){
    // เราจะเอา object มาแยกเป็น key เอามาเก็บในรูปแบบของ array
    let key1 = Object.keys(obj1)// ["a","b"]
    let key2 = Object.keys(obj2)// ["a","b"]

    if(key1.length !== key2.length){// เช็คความยาว array หากไม่่เท่ากันตัดเป็น false เลย
        return false
    }

    for(let key in key1){// loop เข้า array เผื่อจะดึง key ออกมาใช้
        if(obj1[key] !== obj2[key]){// object[key] เผื่อดึง value ออกมาเช็คว่ามีค่่าเท่ากันไหม ถ้าไม่เท่า false
            return false
        }
    }

    return true
    
}

console.log(shallowEquality({a:1,b:2},{a:1,b:2}));
console.log(shallowEquality({a:1,b:2},{a:1,b:2,c:3}));
