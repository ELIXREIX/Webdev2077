const numbers = [5, 10, 15, 20, 25];

const squaredNumbers = numbers.map(number => number ** 2);
console.log(squaredNumbers); // [25, 100, 225, 400, 625]

const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers); // [10, 20]

const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
console.log(sum); // 75

const students = [
    { id: 1, name: 'Alice', grade: 85 },
    { id: 2, name: 'Bob', grade: 75 },
    { id: 3, name: 'Charlie', grade: 95 },
    { id: 4, name: 'David', grade: 60 }
  ];

const studentNames = students.map(student => student.name);
console.log(studentNames); // ['Alice', 'Bob', 'Charlie', 'David']

const passingStudents = students.filter(student => student.grade >= 70);
console.log(passingStudents);
// [
//   { id: 1, name: 'Alice', grade: 85 },
//   { id: 2, name: 'Bob', grade: 75 },
//   { id: 3, name: 'Charlie', grade: 95 }
// ]
const totalGrade = students.reduce((accumulator, student) => accumulator + student.grade, 0);
const averageGrade = totalGrade / students.length;
console.log(averageGrade); // 78.75