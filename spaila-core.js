function isSpailaLoggedIn(){

  return localStorage.getItem(
    "spaila_logged_in"
  ) === "true";
}

function getSpailaUser(){

  return JSON.parse(
    localStorage.getItem("spaila_user")
  );
}

function logout(){

  localStorage.removeItem("spaila_user");

  localStorage.removeItem("spaila_logged_in");

  window.location.href = "index.html";
}