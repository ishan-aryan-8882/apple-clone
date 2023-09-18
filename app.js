let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let lone = document.querySelector(".lone");
let ltwo = document.querySelector(".ltwo");
let nava = document.querySelectorAll("nav a");

burger.addEventListener("click", () => {
  nav.classList.toggle("nav-appear");
  lone.classList.toggle("lone-cross");
  ltwo.classList.toggle("ltwo-cross");
  nava.forEach((item, index) => {
    setTimeout(() => {
      item.classList.toggle("nav-appear");
    }, index * 50);
  });
});

let header = document.querySelector("header");
let hero = document.querySelector(".hero");
window.addEventListener("scroll", () => {
  let rect = header.getBoundingClientRect();
  let rectt = hero.getBoundingClientRect();
  if (rect.bottom > rectt.top && rect.bottom < rectt.bottom) {
    header.style.background = "rgb(214,214,214)";
  } else {
    header.style.background = "white";
  }
});
