const API_URL = "https://smartbiz-webapi.onrender.com";

document.getElementById('loadProducts').addEventListener('click', async () => {
  try {
    const response = await fetch(`${API_URL}/products`);
    const data = await response.json();

    const list = data.map(p => 
      `<li><strong>${p.name}</strong> - ₹${p.price} (Stock: ${p.stock})</li>`
    ).join('');

    document.getElementById('productList').innerHTML = `<ul>${list}</ul>`;
  } catch (err) {
    console.error('Error fetching products:', err);
    document.getElementById('productList').textContent = "Failed to load products.";
  }
});
