let burger = document.querySelector(".burger");
let nav = document.querySelector("nav");
let lone = document.querySelector(".lone");
let ltwo = document.querySelector(".ltwo");
let nava = document.querySelectorAll("nav a");

burger.addEventListener('click', () => {
    nav.classList.toggle("nav-appear");
    lone.classList.toggle("lone-cross");
    ltwo.classList.toggle("ltwo-cross");
    nava.forEach((item, index) => {
        setTimeout(() => {
            item.classList.toggle('nav-appear');
        }, index * 50);
    });
});
