const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDEEN_CLASSNAME = "hidden";

function onLoginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add("hidden");
  // greeting.innerText = "Hello" + username;
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDEEN_CLASSNAME);
}

loginForm.addEventListener("submit", onLoginSubmit);
