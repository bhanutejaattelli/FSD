function updateEmployeeDetails(newRole, employee) {
    return {      
      ...employee,
      role: newRole
          
    };
}
const employee = { name: 'Bhanu Teja', role: 'Student', age: 20, location: 'IND' };
const updatedEmployee = updateEmployeeDetails( 'Developer',employee);
console.log(updatedEmployee); 