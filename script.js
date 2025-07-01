let cart = [];

function addToCart(product) {
  cart.push(product);
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = JSON.parse(localStorage.getItem('cart'))?.length || 0;
  document.getElementById('cart-count').innerText = count;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
