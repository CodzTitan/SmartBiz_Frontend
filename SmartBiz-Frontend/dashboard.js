const API_URL = "https://smartbiz-webapi.onrender.com";

document.getElementById('loadProducts').addEventListener('click', async () => {
  try {
    const response = await fetch(`${API_URL}/products/`);
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

document.getElementById('addProductBtn').addEventListener('click', async () => {
    const name = document.getElementById('productName').value.trim();
    const price = parseFloat(document.getElementById('productPrice').value);
    const stock = parseInt(document.getElementById('productStock').value);

    if (!name || isNaN(price) || isNaN(stock)) {
        document.getElementById('addMessage').textContent = "Please enter valid product details.";
        return;
    }

    try {
        const response = await fetch(`${API_URL}/products`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, price, stock })
        });

        const result = await response.json();

        if (response.ok) {
            document.getElementById('addMessage').textContent = "✅ Product added successfully!";
        } else {
            document.getElementById('addMessage').textContent = result.message || "❌ Failed to add product.";
        }
    } catch (err) {
        console.error(err);
        document.getElementById('addMessage').textContent = "⚠️ Error connecting to server.";
    }
});
