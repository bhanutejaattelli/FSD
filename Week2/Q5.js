function updateProductInfo(product) {
    const { id, name } = product;
    
    return {
      ...{id,name},
      discount: 10,
      inStock: true
    };
  }
  
  const product = { id: 101, name: 'Laptop', price: 1000, category: 'Electronics' };
  //const dis=10;
  //const instock=true;
  const updatedProduct = updateProductInfo(product);
  
  console.log(updatedProduct);
  