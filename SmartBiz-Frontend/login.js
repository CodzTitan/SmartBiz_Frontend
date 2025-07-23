const API_URL = "https://smartbiz-webapi.onrender.com";

document.getElementById('loginBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  
  try {
    const response = await fetch(`${API_URL}/login/`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (response.ok) {
      document.getElementById('message').textContent = "Login successful ✅";
      // Save token or redirect
      localStorage.setItem('token', data.token);
      // window.location.href = "dashboard.html";
    } else {
      document.getElementById('message').textContent = data.message || "Login failed ❌";
    }
  } catch (err) {
    console.error(err);
    document.getElementById('message').textContent = "Error connecting to server.";
  }
});
