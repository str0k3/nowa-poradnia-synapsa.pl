document.addEventListener("DOMContentLoaded", function () {
  // Mobile Menu Toggle
  const menuToggle = document.querySelector(".mobile-menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      const expanded = navLinks.classList.contains("active");
      menuToggle.setAttribute("aria-expanded", expanded);
      // Animate hamburger icon
      menuToggle.textContent = expanded ? "✕" : "☰";
    });

    // Close mobile menu when clicking outside
    document.addEventListener("click", function (event) {
      if (!event.target.closest("nav")) {
        navLinks.classList.remove("active");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
      }
    });
  }

  // Active Page Highlighting
  const currentPath = window.location.pathname;
  const navLinksAll = document.querySelectorAll(".nav-links a");

  navLinksAll.forEach((link) => {
    const linkPath = new URL(link.href).pathname;

    // Normalize paths (remove trailing slashes for comparison, except root)
    const normalizedCurrent =
      currentPath === "/" ? "/" : currentPath.replace(/\/$/, "");
    const normalizedLink = linkPath === "/" ? "/" : linkPath.replace(/\/$/, "");

    // Only match if paths are exactly the same
    if (normalizedCurrent === normalizedLink) {
      link.classList.add("active");
    }
  });

  // Header Scroll Effect
  const header = document.querySelector("header");
  let lastScroll = 0;

  window.addEventListener("scroll", function () {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 50) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }

    lastScroll = currentScroll;
  });

  // Cookie Consent
  const cookieConsent = document.getElementById("cookie-consent");
  const acceptCookies = document.getElementById("accept-cookies");

  if (!localStorage.getItem("cookiesAccepted")) {
    cookieConsent.style.display = "block";
  }

  if (acceptCookies) {
    acceptCookies.addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      cookieConsent.style.display = "none";
    });
  }
});
