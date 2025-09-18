document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("header, section, footer");
  sections.forEach((section, index) => {
    section.style.opacity = 0;
    section.style.transform = "translateY(-20px)";
    section.style.transition = "opacity 0.8s ease, transform 0.8s ease";
    setTimeout(() => {
      section.style.opacity = 1;
      section.style.transform = "translateY(0)";
    }, index * 300);
  });

  const images = document.querySelectorAll(".drink-grid img");
  images.forEach((img) => {
    img.style.transition = "transform 0.3s ease";
    img.addEventListener("mouseover", () => {
      img.style.transform = "scale(1.1)";
    });
    img.addEventListener("mouseout", () => {
      img.style.transform = "scale(1)";
    });
  });

  let clickCount = 0;
  const clickCounter = document.getElementById('clickCounter');
  const tryButton = document.getElementById("tryButton");
  tryButton.addEventListener('click', () => {
    clickCount++;
    clickCounter.textContent = 'Count: ' + clickCount;
  });

  const toggleMoodButton = document.getElementById('toggleMood');
  toggleMoodButton.addEventListener('click', () => {
    document.body.classList.toggle('night-mode');
  });
});

document.addEventListener("scroll", () => {
  const navbar = document.querySelector(".navbar");
  if (window.scrollY > 50) {
    navbar.classList.add("shrink");
  } else {
    navbar.classList.remove("shrink");
  }
});