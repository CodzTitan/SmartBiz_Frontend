const API_URL = "https://smartbiz-webapi.onrender.com"; // your backend

document.getElementById('signupBtn').addEventListener('click', async () => {
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();

  const msg = document.getElementById('message');
  msg.innerText = "";

  if (!email || !password) {
    msg.innerText = "Both fields are required!";
    return;
  }

  try {
    const response = await fetch(`${API_URL}/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: email, password })
    });

    const result = await response.json();
    if (response.ok) {
      msg.innerText = "Signup successful! You can now login.";
    } else {
      msg.innerText = result.message || "Signup failed!";
    }
  } catch (err) {
    console.error("Signup Error:", err);
    msg.innerText = "Network error!";
  }
});
