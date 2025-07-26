
function loginUser(event) {
  event.preventDefault();
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  localStorage.setItem("user", JSON.stringify({ email }));
  window.location.href = "dashboard.html";
}
