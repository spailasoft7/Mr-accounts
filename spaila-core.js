// GET CURRENT USER
async function getUser(){

  const { data: { user } } =
    await supabaseClient.auth.getUser();

  return user;
}

// CHECK SESSION
async function isLoggedIn(){

  const { data: { session } } =
    await supabaseClient.auth.getSession();

  return !!session;
}

// LOGOUT
async function logout(){

  await supabaseClient.auth.signOut();

  window.location.href = "index.html";
}

// LOAD USER INTO UI
async function loadUser(){

  const user = await getUser();

  if(user){
    document.getElementById("user").innerText =
      "Logged in as: " + user.email;
  }
}