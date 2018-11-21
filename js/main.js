let burger = document.querySelector(".burger");
let nav__hidden = document.querySelector(".nav__hidden");
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    nav__hidden.classList.toggle("active");
});