const msg = document.getElementById("msg");

// SIGN UP
async function signup(){

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const { data, error } =
    await supabaseClient.auth.signUp({
      email,
      password
    });

  if(error){
    msg.innerText = error.message;
    return;
  }

  msg.innerText = "Account created! Now login.";
}

// LOGIN
async function login(){

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const { data, error } =
    await supabaseClient.auth.signInWithPassword({
      email,
      password
    });

  if(error){

    msg.innerText = error.message;
    return;
  }

  // SAVE SESSION
  localStorage.setItem(
    "spaila_session",
    JSON.stringify(data.session)
  );

  // SAVE USER
  localStorage.setItem(
    "spaila_user",
    JSON.stringify(data.user)
  );

  msg.innerText = "Login successful!";

  // REDIRECT
  setTimeout(() => {

    window.location.href =
      "dashboard.html";

  }, 1000);
}
