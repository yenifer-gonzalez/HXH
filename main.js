const burgerMenu = document.querySelector(".burgerMenu");
const navMenu = document.querySelector(".navMenu");

burgerMenu.addEventListener("click", () => {
burgerMenu.classList.toggle("active");
navMenu.classList.toggle("active");
})

document.querySelectorAll(".navLink").forEach(n => n.addEventListener("click", () => {
burgerMenu.classList.remove("active");
navMenu.classList.remove("active");
}))