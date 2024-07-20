import React, { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/students')
      .then(response => {
        setStudents(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the students!', error);
      });
  }, []);

  return (
    <div className="App">
      <h1>Student List</h1>
      <ul>
        {students.map(student => (
          <li key={student._id}>
            {student.name}
            <select>
              {/* Populate the dropdown with some relevant options */}
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </select>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
