let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(title, price, image) {
  cart.push({ title, price, image });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.length;
  const el = document.getElementById('cart-count');
  if (el) el.innerText = count;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
