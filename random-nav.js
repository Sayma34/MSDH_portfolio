const pageLinks = [
    "service.html",
    "skills.html",
    "education.html",
    "research.html",
    "achievement.html",
    "contact.html"
  ];
  
  const randomNavButton = document.getElementById("random-nav");
  
  randomNavButton.addEventListener("click", function() {
    if (confirm("Are you sure you want to navigate to a random page?")) {
      const randomIndex = Math.floor(Math.random() * pageLinks.length);
      const randomPage = pageLinks[randomIndex];
      window.location.href = randomPage;
    }
  });