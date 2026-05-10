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

  const certificatesGrid = document.getElementById("certificatesGrid");
  if (certificatesGrid) {
    const certificateImages = [
      "certificates/Screenshot 2026-05-10 151058.png",
      "certificates/Screenshot 2026-05-10 151115.png",
      "certificates/Screenshot 2026-05-10 151128.png",
      "certificates/Screenshot 2026-05-10 151139.png",
      "certificates/Screenshot 2026-05-10 151152.png",
      "certificates/Screenshot 2026-05-10 151200.png",
      "certificates/Screenshot 2026-05-10 151212.png",
      "certificates/Screenshot 2026-05-10 151227.png",
      "certificates/Screenshot 2026-05-10 151237.png",
      "certificates/Screenshot 2026-05-10 151248.png",
      "certificates/Screenshot 2026-05-10 151257.png",
      "certificates/Screenshot 2026-05-10 151307.png",
      "certificates/Screenshot 2026-05-10 151317.png",
      "certificates/Screenshot 2026-05-10 151330.png",
      "certificates/Screenshot 2026-05-10 151340.png",
      "certificates/Screenshot 2026-05-10 151353.png",
      "certificates/Screenshot 2026-05-10 151403.png",
      "certificates/Screenshot 2026-05-10 151414.png",
      "certificates/Screenshot 2026-05-10 151426.png",
      "certificates/Screenshot 2026-05-10 151436.png",
      "certificates/Screenshot 2026-05-10 151447.png"
    ];

    certificateImages.forEach((src, index) => {
      const card = document.createElement("div");
      card.className = "certificate-card";

      const img = document.createElement("img");
      img.src = src;
      img.alt = `Certificate ${index + 1}`;

      const caption = document.createElement("p");
      caption.textContent = `Certificate ${index + 1}`;

      card.appendChild(img);
      card.appendChild(caption);
      certificatesGrid.appendChild(card);
    });
  }
});
