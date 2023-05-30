// const h1 = document.querySelector("h1");
// const loginForm = document.querySelector("#login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");

// function handleButtonClick() {
//   const username = loginInput.value;
//   //   if (username === "") {
//   //     alert("write your name");
//   //   } else if (username.length > 15) {
//   //     alert("yout name is too long");
//   //   } else {
//   //     console.log("hi", username);
//   //   }
//   console.log(username);
// }

// function handleColorClick() {
//   h1.classList.toggle("clicked");
// }

// h1.addEventListener("click", handleColorClick);
// loginButton.addEventListener("click", handleButtonClick);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("input");
const loginButton = document.querySelector("button");
const greeting = document.querySelector("h1");
const CLASS_NAME = "hidden";
const STORAGE_KEY = "username";

function handleSubmitedForm(event) {
  event.preventDefault();
  loginForm.classList.add(CLASS_NAME);
  const userName = loginInput.value;
  localStorage.setItem(STORAGE_KEY, userName);
  paintingGreeting();
}

function paintingGreeting() {
  const username = localStorage.getItem(STORAGE_KEY);
  greeting.innerText = `hi ${username}`;
  greeting.classList.remove(CLASS_NAME);
}

const savedStorage = localStorage.getItem(STORAGE_KEY);

if (savedStorage === null) {
  loginForm.classList.remove(CLASS_NAME);
  loginForm.addEventListener("submit", handleSubmitedForm);
} else {
  paintingGreeting();
}
