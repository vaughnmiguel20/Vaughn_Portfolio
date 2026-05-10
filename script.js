const loader = document.getElementById("loader");

window.addEventListener("load", () => {
  if (loader) {
    loader.style.display = "none";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  const scrollBtn = document.getElementById("scrollTop");
  const sections = document.querySelectorAll("section");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });
  }

  if (scrollBtn) {
    const updateScrollButton = () => {
      scrollBtn.style.display = window.scrollY > 300 ? "block" : "none";
    };

    window.addEventListener("scroll", updateScrollButton);
    updateScrollButton();

    scrollBtn.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });
  }

  if (sections.length) {
    const revealSections = () => {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();

        if (rect.top < window.innerHeight - 100) {
          section.style.opacity = "1";
          section.style.transform = "translateY(0)";
        }
      });
    };

    sections.forEach(section => {
      section.style.opacity = "0";
      section.style.transform = "translateY(50px)";
      section.style.transition = "all 0.8s ease";
    });

    revealSections();
    window.addEventListener("scroll", revealSections);
  }
});
