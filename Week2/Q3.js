function updateEmployeeDetails(newRole, ...employee) {
    return {      
      role: newRole,
      ...employee    
    };
}
const employee = { name: 'Bhanu Teja', role: 'Student', age: 20, location: 'IND' };
const updatedEmployee = updateEmployeeDetails( 'Developer',employee);
console.log(updatedEmployee); 