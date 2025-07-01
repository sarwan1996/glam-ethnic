// script.js
let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.length;
  const el = document.getElementById('cart-count');
  if (el) el.innerText = count;
}

document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();

  // Optional: delegate nav clicks if you want to intercept links
});
