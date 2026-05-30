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

  // 🔥 SINGLE SOURCE OF TRUTH TOKEN
  const token =
    data.session.access_token;

  const user =
    data.user;

  // SAVE FOR ALL APPS
  localStorage.setItem(
    "spaila_token",
    token
  );

  localStorage.setItem(
    "spaila_user",
    JSON.stringify(user)
  );

  // OPTIONAL redirect back to app
  const redirect =
    localStorage.getItem("spaila_redirect");

  if(redirect){
    window.location.href = redirect;
  }else{
    window.location.href = "dashboard.html";
  }
}
