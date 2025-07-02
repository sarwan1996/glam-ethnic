const products = [
  {
    title: "Silk Saree",
    price: 1499,
    image: "images/saree1.jpg",
    category: "saree"
  },
  {
    title: "Floral Ruffle Saree",
    price: 1899,
    image: "images/saree2.jpg",
    category: "saree"
  },
  {
    title: "Printed Cotton Chudi",
    price: 1299,
    image: "images/chudi1.jpg",
    category: "chudi"
  }
  {
    title: "Printed Cotton Chudi",
    price: 1299,
    image: "images/chudi2.jpg",
    category: "chudi"
  }
];

function renderProducts(category, filter, containerId) {
  fetch("products.json")
    .then(res => res.json())
    .then(products => {
      const container = document.getElementById(containerId);
      container.innerHTML = "";

      const filtered = products.filter(
        product => product.category === category
      );

      filtered.forEach(product => {
        const card = document.createElement("div");
        card.className = "product-card";
        card.innerHTML = `
          <img src="${product.image}" alt="${product.name}" />
          <h4>${product.name}</h4>
          <p>$${product.price.toFixed(2)}</p>
          <button data-id="${product.id}">Add to Cart</button>
        `;
        container.appendChild(card);
      });
    })
    .catch(err => {
      console.error("Error loading products:", err);
    });
}

// Make available globally
window.renderProducts = renderProducts;
