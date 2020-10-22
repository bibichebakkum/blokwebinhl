// JavaScript Document
console.log("hiii");

var hartje = document.querySelector("article > img:nth-of-type(2)");

hartje.addEventListener("click", ietsDoen);

function ietsDoen() {
hartje.classList.toggle("verander");
}

 