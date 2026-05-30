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

  // 🔥 IMPORTANT: sync Supabase session
  await supabaseClient.auth.setSession(
    data.session
  );

  // SAVE TOKEN (your bridge system)
  localStorage.setItem(
    "spaila_token",
    data.session.access_token
  );

  // SAVE USER
  localStorage.setItem(
    "spaila_user",
    JSON.stringify(data.user)
  );

  msg.innerText =
    "Login successful!";

  setTimeout(() => {

    window.location.href =
      "dashboard.html";

  }, 1000);
}
