let detail = { username: "hello", password: "hh" };
const username = document.getElementById("username");
const password = document.getElementById("password");
const btn = document.getElementById("btn");
const error = document.querySelector(".error");

username.addEventListener("change", (e) => {
    detail.username = e.target.value;
  });
  password.addEventListener("change", (e) => {
    detail.password = e.target.value;
  });
  btn.addEventListener("click", () => {
   error.style.display = "flex"

   if(detail.username == ""){
    error.innerHTML = "Please enter a username"
   }
   
   if(detail.password == ""){
    error.innerHTML = "Please enter a password"
   }

   if(detail.username == "" && detail.password == ""){
    error.innerHTML = "Please enter a username of password"
   }
   if(detail.username !== "" && detail.password !== ""){
    error.innerHTML = `welcome ${detail.username}! you have successfully signed in`
   }
  })
  