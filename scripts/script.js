// JavaScript Document
var hartje = document.querySelector("article > img:nth-of-type(3)");
hartje.addEventListener("click", like);

function like() {
hartje.classList.toggle("verander");
}

 