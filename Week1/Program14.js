class Item {
    constructor(name, price, quantity) {
      this.name = name;
      this.price = parseFloat(price);
      this.quantity = parseInt(quantity);
    }
  }
  
  class Cart {
    constructor() {
      this.items = JSON.parse(localStorage.getItem("cart")) || [];
      this.discount = 0;
    }
  
    saveToLocalStorage() {
      localStorage.setItem("cart", JSON.stringify(this.items));
    }
  
    addItem(item) {
      const existingItem = this.items.find(i => i.name === item.name);
      if (existingItem) {
        existingItem.quantity += item.quantity;
      } else {
        this.items.push(item);
      }
      this.saveToLocalStorage();
      this.displayCart();
    }
  
    removeItem(name) {
      this.items = this.items.filter(item => item.name !== name);
      this.saveToLocalStorage();
      this.displayCart();
    }
  
    updateQuantity(name, quantity) {
      const item = this.items.find(i => i.name === name);
      if (item) {
        item.quantity = quantity;
        if (item.quantity <= 0) {
          this.removeItem(name);
        }
        this.saveToLocalStorage();
        this.displayCart();
      }
    }
  
    applyDiscount(code) {
      const discounts = { SAVE10: 0.1, SAVE20: 0.2 }; // Example discount codes
      if (discounts[code]) {
        this.discount = discounts[code];
        alert(`Discount of ${discounts[code] * 100}% applied.`);
      } else {
        alert("Invalid discount code.");
      }
      this.displayCart();
    }
  
    calculateTotal() {
      let total = this.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
      return total - total * this.discount;
    }
  
    displayCart() {
      const cartContents = document.getElementById("cartContents");
      cartContents.innerHTML = "";
  
      this.items.forEach(item => {
        const itemDiv = document.createElement("div");
        itemDiv.innerHTML = `
          <strong>${item.name}</strong> - $${item.price} x ${item.quantity}
          <button onclick="removeItemFromCart('${item.name}')">Remove</button>
          <input type="number" min="1" value="${item.quantity}" 
                 onchange="updateItemQuantity('${item.name}', this.value)">
        `;
        cartContents.appendChild(itemDiv);
      });
  
      const totalPrice = document.getElementById("totalPrice");
      totalPrice.textContent = `Total Price: $${this.calculateTotal().toFixed(2)}`;
    }
  }
  
  const cart = new Cart();
  cart.displayCart();
  
  function addItemToCart() {
    const name = document.getElementById("itemName").value;
    const price = document.getElementById("itemPrice").value;
    const quantity = document.getElementById("itemQuantity").value;
  
    if (!name || !price || !quantity) {
      alert("Please fill in all fields.");
      return;
    }
  
    const item = new Item(name, price, parseInt(quantity));
    cart.addItem(item);
  
    document.getElementById("itemName").value = "";
    document.getElementById("itemPrice").value = "";
    document.getElementById("itemQuantity").value = "";
  }
  
  function removeItemFromCart(name) {
    cart.removeItem(name);
  }
  
  function updateItemQuantity(name, quantity) {
    cart.updateQuantity(name, parseInt(quantity));
  }
  
  function applyDiscount() {
    const discountCode = document.getElementById("discountCode").value;
    cart.applyDiscount(discountCode);
  }
  