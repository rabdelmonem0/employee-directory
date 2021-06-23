import React, { useState, useEffect } from 'react';
import './App.css';
import { EmployeeTable } from './components/EmployeeTable';
import axios from 'axios'
;
function App() {
  const [employees, setEmployees] = useState([]);
  const [filteredEmployees, setFilteredEmployees] = useState(employees);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
      axios.get("https://randomuser.me/api/?results=10&nat=us")
          .then(res => setEmployees(res.data.results))
          .catch(err => console.log(err))
  }, []);

  // use a filter function
  const filterEmployees = (search) => {
    setFilteredEmployees(employees.filter(employee => employee.first.name.toLowercase().includes(search)))
  }

  // filter data with input change
  const handleInputChange = e => {
    setSearchTerm(e.target.value);
    
    filterEmployees(searchTerm);
}           

  return (
   <div className="container">
     <input
     id="search" 
     type="text" 
     className="form-control" 
     placeholder="Search Employees"
     onChange={handleInputChange}
     value={searchTerm} />
     
     <EmployeeTable employees={employees} filteredEmployees={filteredEmployees}/>
   </div>
  );
}

export default App;
