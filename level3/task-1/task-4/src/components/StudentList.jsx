import React from 'react';

const StudentList = () => {
  const students = [
    { id: 1, name: 'John', age: 20 },
    { id: 2, name: 'Emma', age: 21 },
    { id: 3, name: 'Mike', age: 22 },
    { id: 4, name: 'Sophia', age: 23 },
  ];

  return (
    <div className="list-container">
      <h2>Student List</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            {student.name} - Age: {student.age}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StudentList;
