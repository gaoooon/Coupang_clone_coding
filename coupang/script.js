const checkBox = document.querySelectorAll(".checkbox");

function handleClickCheckBox(event) {
  ``;
  const target = event.target;
  if (target.classList.contains("img")) {
    target.classList.remove("img");
    target.classList.add("imgChange");
  } else if (target.classList.contains("imgChange")) {
    target.classList.remove("imgChange");
    target.classList.add("img");
  }
}
for (i = 0; i < 11; i++) {
  checkBox[i].addEventListener("click", handleClickCheckBox);
}
