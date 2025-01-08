function mergeArrays(...arrays) {
    return [].concat(...arrays);
  }
  
  const result = mergeArrays([1, 2], [3, 4], [5, 6]);
  
  console.log(result); 
  