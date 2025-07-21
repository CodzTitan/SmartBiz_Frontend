const API_URL = "https://smartbiz-webapi.onrender.com";  // replace with your Render backend URL

document.getElementById('loadProducts').addEventListener('click', () => {
    fetch('${API_URL}/products`)
        .then(response => response.json())
        .then(data => {
            const list = data.map(p => `<li>${p.name} - ₹${p.price}</li>`).join('');
            document.getElementById('productList').innerHTML = `<ul>${list}</ul>`;
        })
        .catch(err => console.error('Error:', err));
});
