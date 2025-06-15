function Student(name, gender, age) {
//   const currentYear =  new Date().getFullYear();
    this.name = name;
    this.gender = gender;
    this.age = age;
    this.marks = [];
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
  if (this.hasOwnProperty('marks') == true) {
    for (let i = 0; i < marks.length; i++) {
        this.marks.push(marks[i]); 
    }
  }
}

Student.prototype.getAverage = function () {
  let average;
  if (this.hasOwnProperty('marks') == false || (this.marks.length === 0)) {
    average = 0;
  } else {
    average = this.marks.reduce((acc, item, index, array) => {
      acc += item;
      if (index === array.length - 1) {
        return acc / array.length;
      }
      return acc;
    }, 0); 
  }
  return average;
}

Student.prototype.exclude = function (reason) {
  delete this.subject;  
  delete this.marks;
  this.excluded = reason;   
}


let Person1 = new Student('Kirill', 'male', 22);
// let Person2 = new Student('Ilya', 'male', 22);
// let Person3 = new Student('Regina', 'female', 21);
console.log('Person1:', Person1);
// console.log('Person2:', Person2);
// console.log('Person3:', Person3);

Person1.setSubject('physics');
console.log('Person1:', Person1);

console.log(Person1.getAverage());
Person1.addMarks(4,4,5,3);
console.log('Person1:', Person1);

console.log(Person1.getAverage());

Person1.exclude('прогулы');
console.log('Person1:', Person1);

console.log(Person1.getAverage());
Person1.addMarks(4,4,5,3);
console.log('Person1:', Person1);
