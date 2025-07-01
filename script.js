const products = [
  { title: "Silk Saree", price: 1499, image: "images/saree1.jpg", category: "saree" },
  { title: "Floral Ruffle Saree", price: 1899, image: "images/saree2.jpg", category: "saree" },
  { title: "Designer Chudi", price: 999, image: "images/chudi1.jpg", category: "chudi" },
  { title: "Cotton Chudi Set", price: 799, image: "images/chudi2.jpg", category: "chudi" },
];

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(product) {
  const existing = cart.find(p => p.title === product.title);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const count = cart.reduce((sum, item) => sum + item.qty, 0);
  const el = document.getElementById("cart-count");
  if (el) el.innerText = count;
}

function loadProducts() {
  const container = document.getElementById("productList");
  if (!container) return;

  const urlParams = new URLSearchParams(window.location.search);
  const category = urlParams.get("category");

  const filtered = category ? products.filter(p => p.category === category) : products;

  container.innerHTML = filtered.map(product => `
    <div class="product-card">
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>₹${product.price}</p>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    </div>
  `).join("");
}

document.addEventListener("DOMContentLoaded", () => {
  updateCartCount();
  loadProducts();
});
