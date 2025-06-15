//const menuToggle = document.querySelector('.menu-toggle');
// const nav = document.querySelector('nav');

// menuToggle.addEventListener('click', () => {
//     nav.classList.toggle('active');
// }); 

// JavaScript for responsive navigation menu toggle
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
    nav.classList.toggle("active");
});

// Typing effect for home section
const typingText = document.querySelector(".typing-text span");
const roles = ["Adjunct Lecturer", "Tech Enthusiast", "Mentor", "Researcher"];
let currentRoleIndex = 0;
let charIndex = 0;
let typingDelay = 100;
let erasingDelay = 50;
let newTextDelay = 2000;

function type() {
    if (charIndex < roles[currentRoleIndex].length) {
        typingText.textContent += roles[currentRoleIndex].charAt(charIndex);
        charIndex++;
        setTimeout(type, typingDelay);
    } else {
        setTimeout(erase, newTextDelay);
    }
}

function erase() {
    if (charIndex > 0) {
        typingText.textContent = roles[currentRoleIndex].substring(0, charIndex - 1);
        charIndex--;
        setTimeout(erase, erasingDelay);
    } else {
        currentRoleIndex = (currentRoleIndex + 1) % roles.length;
        setTimeout(type, typingDelay);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    setTimeout(type, newTextDelay);
});
