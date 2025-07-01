const products = [
  {
    title: "Silk Saree",
    price: 1499,
    image: "images/silk.jpg",
    category: "saree"
  },
  {
    title: "Floral Ruffle Saree",
    price: 1899,
    image: "images/floral.jpg",
    category: "saree"
  },
  {
    title: "Printed Cotton Chudi",
    price: 1299,
    image: "images/chudi.jpg",
    category: "chudi"
  }
];

function renderProducts(category, limit, targetId) {
  const container = document.getElementById(targetId);
  const filtered = products.filter(p => p.category === category);
  const selected = limit ? filtered.slice(0, limit) : filtered;

  container.innerHTML = selected.map(p => `
    <div class="product-card">
      <img src="${p.image}" alt="${p.title}">
      <h4>${p.title}</h4>
      <p>₹${p.price}</p>
      <button onclick="addToCart('${p.title}', ${p.price}, '${p.image}')">Add to Cart</button>
    </div>
  `).join('');
}

function addToCart(title, price, image) {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const existing = cart.find(item => item.title === title);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ title, price, image, qty: 1 });
  }
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const count = cart.reduce((acc, item) => acc + item.qty, 0);
  document.getElementById("cart-count").innerText = count;
}

updateCartCount();
