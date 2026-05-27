const msg = document.getElementById("msg");

async function signup(){

  const email =
    document.getElementById("email").value;

  const password =
    document.getElementById("password").value;

  const { data, error } =
    await supabaseClient.auth.signUp({
      email,
      password
    });

  if(error){

    msg.innerText = error.message;

    return;
  }

  msg.innerText =
    "Account created successfully!";
}

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

  localStorage.setItem(
    "spaila_user",
    JSON.stringify(data.user)
  );

  localStorage.setItem(
    "spaila_logged_in",
    "true"
  );

  msg.innerText = "Logged in!";

  setTimeout(()=>{

    window.location.href = "dashboard.html";

  },1000);
}