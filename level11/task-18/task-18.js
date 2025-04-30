let students = [
    { name: "Alice", age: 21, grades: [85, 90, 88] },
    { name: "Bob", age: 19, grades: [70, 75, 80] },
    { name: "Charlie", age: 22, grades: [95, 85, 92] }
  ];
  
  let names = students.map(s => s.name);
  let olderStudents = students.filter(s => s.age > 20);
  let avgAllGrades = students.reduce((acc, s) => acc.concat(s.grades), []).reduce((sum, g, _, arr) => sum + g / arr.length, 0);
  let avgGradesOlder = students.filter(s => s.age > 20).flatMap(s => s.grades).reduce((sum, g, _, arr) => sum + g / arr.length, 0);
  
  console.log("Names:", names);
  console.log("Older than 20:", olderStudents);
  console.log("Average Grade (All):", avgAllGrades.toFixed(2));
  console.log("Average Grade (Older):", avgGradesOlder.toFixed(2));
  