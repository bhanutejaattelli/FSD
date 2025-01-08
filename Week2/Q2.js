function calculateTotal(...numbers) {
    return numbers.reduce((sum, number) => sum + number, 0);
  }
  
  const total = calculateTotal(10, 20, 30, 40);
  
  console.log(total); 