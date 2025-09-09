// name export
function echo(msg) {
  return msg
}
// default export
function getLength(str) {
  return str.length
}

const GPAAverage = 3.0

class Book {
  constructor(isbn) {
    this.isbn = isbn
  }
}

const user = {name : "lucky" , age : 20}

export {
    echo,
    getLength as default,
    GPAAverage as GPA,
    Book,
    user
}

// module.exports = { 
//     echo, 
//     getLength, 
//     GPA: GPAAverage, 
//     Book 
// }


 