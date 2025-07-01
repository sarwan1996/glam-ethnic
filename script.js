let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(title, price, image) {
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ title, price, image, quantity: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const el = document.getElementById('cart-count');
  if (el) el.innerText = total;
}

document.addEventListener('DOMContentLoaded', updateCartCount);
