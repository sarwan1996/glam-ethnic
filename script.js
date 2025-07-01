let cart = JSON.parse(localStorage.getItem('cart')) || [];

// Add a product to the cart (with title, price, image)
function addToCart(title, price, image) {
  // Check if item already exists
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({
      title,
      price,
      image,
      quantity: 1
    });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

// Count total quantity across all cart items
function updateCartCount() {
  const total = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
  const el = document.getElementById('cart-count');
  if (el) el.innerText = total;
}

// On page load
document.addEventListener('DOMContentLoaded', () => {
  updateCartCount();
});
