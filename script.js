const products = [
  { title: 'Silk Saree', price: 1499, image: 'images/saree1.jpg', category: 'saree' },
  { title: 'Floral Ruffle Saree', price: 1899, image: 'images/saree2.jpg', category: 'saree' },
  { title: 'Designer Chudi', price: 999, image: 'images/chudi1.jpg', category: 'chudi' },
  { title: 'Cotton Chudi Set', price: 799, image: 'images/chudi2.jpg', category: 'chudi' }
];

let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(productTitle) {
  const item = products.find(p => p.title === productTitle);
  const existing = cart.find(p => p.title === productTitle);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...item, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((acc, cur) => acc + cur.qty, 0);
  const el = document.getElementById('cart-count');
  if (el) el.innerText = count;
}

document.addEventListener('DOMContentLoaded', updateCartCount);

function renderProducts(category, limit = null, containerId = 'product-list') {
  const container = document.getElementById(containerId);
  const filtered = category ? products.filter(p => p.category === category) : products;
  const display = limit ? filtered.slice(0, limit) : filtered;
  container.innerHTML = display.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.title}">
      <h3>${p.title}</h3>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.title}')">Add to Cart</button>
    </div>
  `).join('');
}
