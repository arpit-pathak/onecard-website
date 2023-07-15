let ham = document.querySelector(".ham");
let hamburger = document.querySelector(".hamburger");
let list = document.querySelector(".list");

hamburger.addEventListener("click", handleClick);

function handleClick() {
  ham.classList.toggle("close", !ham.classList.contains("close"));
  list.classList.toggle("showList", !list.classList.contains("showList"));
}