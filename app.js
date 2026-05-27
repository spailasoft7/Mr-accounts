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

    // 🔥 GET RETURN LOCATION
    const returnUrl =
      localStorage.getItem("spaila_return_url");

    if(returnUrl){

      localStorage.removeItem("spaila_return_url");

      window.location.href = returnUrl;

    } else {

      window.location.href = "dashboard.html";
    }

  }, 800);
}
