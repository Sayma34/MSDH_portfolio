/*const pageLinks = ["service.html", "skills.html", "education.html", "research.html", "achievement.html", "contact.html"];
const randomNavButton = document.getElementById("random-nav");
if (randomNavButton) {
  randomNavButton.addEventListener("click", function () {
    const randomPage = pageLinks[Math.floor(Math.random() * pageLinks.length)];
    window.location.href = randomPage;
  });
} */

  // --- Random Navigation ---
const pageLinks = ["service.html", "skills.html", "education.html", "research.html", "achievement.html", "contact.html"];
const randomNavButton = document.getElementById("random-nav");
if (randomNavButton) {
  randomNavButton.addEventListener("click", function () {
    const randomPage = pageLinks[Math.floor(Math.random() * pageLinks.length)];
    window.location.href = randomPage;
  });
}

// --- Typing Text Effect ---
const typingText = document.getElementById("typed-text");
const roles = ["Aspiring Data Science Educator","Researcher", "Lecturer", "Engineer", "Innovator"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
  if (!typingText) return; // Safeguard: only run on index page

  const currentRole = roles[roleIndex];
  if (isDeleting) {
    typingText.textContent = currentRole.substring(0, charIndex--);
    if (charIndex < 0) {
      isDeleting = false;
      roleIndex = (roleIndex + 1) % roles.length;
    }
  } else {
    typingText.textContent = currentRole.substring(0, charIndex++);
    if (charIndex > currentRole.length) {
      isDeleting = true;
      setTimeout(type, 800);
      return;
    }
  }
  setTimeout(type, isDeleting ? 50 : 100);
}

document.addEventListener("DOMContentLoaded", type);
