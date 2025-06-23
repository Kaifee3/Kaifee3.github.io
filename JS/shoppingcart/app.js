let cart = {};
const products = [
  { id: 1, name: "Product 1", price: 25 },
  { id: 2, name: "Product 2", price: 50 },
  { id: 3, name: "Product 3", price: 75 },
];

const showProducts = () => {
  let str = "<div class='row'>";
  products.forEach((value) => {
    str += `<div>
      <h3>${value.name}</h3>
      <h4>Rs ${value.price}</h4>
      <button onclick='addToCart(${value.id})'>Add to Cart</button>
    </div>`;
  });
  str += "</div>";
  document.getElementById("root").innerHTML = str;
  updateCartCount();
};

function addToCart(id) {
  if (cart[id]) {
    cart[id]++;
  } else {
    cart[id] = 1;
  }
  updateCartCount();
  showCart();
}

function increment(id) {
  cart[id]++;
  updateCartCount();
  showCart();
}

function decrement(id) {
  if (cart[id] > 1) {
    cart[id]--;
  } else {
    delete cart[id];
  }
  updateCartCount();
  showCart();
}

function showCart() {
  let str = "<h2>Cart Items:</h2><ul class='cart-list'>";

  let total = 0;
  
  products.forEach((value) => {
    if (cart[value.id]) {
      let quantity = cart[value.id];
      let subtotal = value.price * quantity;
      total += subtotal;
      str += `<li>
        ${value.name} - Rs ${value.price} 
        <button onclick="decrement(${value.id})">-</button> 
        ${quantity} 
        <button onclick="increment(${value.id})">+</button> 
        = Rs ${subtotal}
      </li>`;
    }
  });
  str += `</ul><h3>Total: Rs ${total}</h3>`;
  document.getElementById("root").innerHTML = str;
  updateCartCount();
}

function updateCartCount() {
  const count = Object.values(cart).reduce((sum, qty) => sum + qty, 0);
  const cartCountSpan = document.getElementById("cart-count");
  if (cartCountSpan) {
    cartCountSpan.textContent = count;
  }
}
