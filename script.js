// vyber burger a menu
const burger = document.querySelector('.burger');
const nav = document.querySelector('.nav-links');

// kliknutí na burger
burger.addEventListener('click', () => {
    nav.classList.toggle('nav-active'); // otevře/zavře menu
    burger.classList.toggle('toggle');  // animace burger -> kříž
});

// zavření menu po kliknutí na odkaz
const navLinks = document.querySelectorAll('.nav-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        nav.classList.remove('nav-active');
        burger.classList.remove('toggle');
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const yearEl = document.getElementById("year");
    yearEl.textContent = new Date().getFullYear();
});
