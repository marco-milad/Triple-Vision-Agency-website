export function loadNavbar() {
  const navbar = `
  <nav class="navbar-custom">
    <div class="container">

      <!-- Left Section: Logo + Divider + Links -->
      <div class="nav-left">
        <!-- Logo -->
        <a class="nav-logo" href="index.html">
          <img src="https://res.cloudinary.com/dcui0elwh/image/upload/v1763917799/logo2_transparent_jjpgv6.png" alt="Logo" />
        </a>

        <!-- Divider -->
        <span class="nav-divider">|</span>

        <!-- Links -->
        <ul class="nav-links">
          <li><a href="index.html">Home</a></li>
          <li><a href="work.html">Our Work</a></li>
          <li><a href="projects.html">Project</a></li>

          <!-- Services + Dropdown -->
          <li class="dropdown">
            <a href="#" class="dropdown-btn">Services ▾</a>
            <ul class="dropdown-menu">
              <li><a href="Branding.html">Branding</a></li>
              <li><a href="Print-Manufacture.html">Print & Manufacture</a></li>
              <li><a href="Photography.html">Photography</a></li>
              <li><a href="media-production.html">Media Production</a></li>
              <li><a href="Event-Management.html">Event Management</a></li>
              <li><a href="Social-Media-Management.html">Social Media Management</a></li>
              <li><a href="web-design.html">Web Design & Development</a></li>
            </ul>
          </li>

          <li><a href="about.html">About Us</a></li>
        </ul>
      </div>

      <!-- Hamburger Menu (Mobile Only) -->
      <button class="hamburger" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <!-- Right Section: Button -->
      <a class="talk-btn" href="#">Let's Talk ✉️</a>

      <!-- Mobile Menu -->
      <div class="nav-mobile">
        <!-- Close Button (Mobile Only) -->
        <button class="close-menu" aria-label="Close menu">&times;</button>

        <!-- Links -->
        <ul class="nav-links-mobile">
          <li><a href="index.html">Home</a></li>
          <li><a href="work.html">Our Work</a></li>
          <li><a href="projects.html">Project</a></li>

          <!-- Services + Dropdown -->
          <li class="dropdown-mobile">
            <a href="#" class="dropdown-btn-mobile">Services</a>
            <ul class="dropdown-menu-mobile">
              <li><a href="Branding.html">Branding</a></li>
              <li><a href="Print-Manufacture.html">Print & Manufacture</a></li>
              <li><a href="Photography.html">Photography</a></li>
              <li><a href="media-production.html">Media Production</a></li>
              <li><a href="Event-Management.html">Event Management</a></li>
              <li><a href="Social-Media-Management.html">Social Media Management</a></li>
              <li><a href="web-design.html">Web Design & Development</a></li>
            </ul>
          </li>

          <li><a href="about.html">About Us</a></li>
        </ul>

        <!-- Button -->
        <a class="talk-btn-mobile" href="#">Let's Talk ✉️</a>
      </div>

      <!-- Overlay (Mobile Only) -->
      <div class="overlay"></div>

    </div>
  </nav>
  `;

  document.body.insertAdjacentHTML("afterbegin", navbar);

  // ===== ELEMENTS =====
  const hamburger = document.querySelector(".hamburger");
  const closeMenu = document.querySelector(".close-menu");
  const navMobile = document.querySelector(".nav-mobile");
  const overlay = document.querySelector(".overlay");
  const dropdown = document.querySelector(".dropdown");
  const dropdownBtn = dropdown?.querySelector(".dropdown-btn");
  const dropdownMobile = document.querySelector(".dropdown-mobile");
  const dropdownBtnMobile = dropdownMobile?.querySelector(".dropdown-btn-mobile");

  // ===== TOGGLE MOBILE MENU (Open & Close) =====
  function toggleMobileMenu() {
    const isActive = navMobile.classList.contains("active");
    
    if (isActive) {
      // Close Menu
      navMobile.classList.remove("active");
      overlay.classList.remove("active");
      hamburger.classList.remove("active");
      document.body.style.overflow = "";
    } else {
      // Open Menu
      navMobile.classList.add("active");
      overlay.classList.add("active");
      hamburger.classList.add("active");
      document.body.style.overflow = "hidden";
    }
  }

  // Hamburger Toggle
  hamburger.addEventListener("click", toggleMobileMenu);

  // Close Menu (X button & Overlay)
  function closeMobileMenu() {
    navMobile.classList.remove("active");
    overlay.classList.remove("active");
    hamburger.classList.remove("active");
    document.body.style.overflow = "";
  }

  closeMenu.addEventListener("click", closeMobileMenu);
  overlay.addEventListener("click", closeMobileMenu);

  // ===== DROPDOWN (Desktop: Hover / Mobile: Click) =====
  // Desktop Hover
  if (dropdown) {
    dropdown.addEventListener("mouseenter", () => {
      if (window.innerWidth > 768) {
        dropdown.classList.add("show");
      }
    });

    dropdown.addEventListener("mouseleave", () => {
      if (window.innerWidth > 768) {
        dropdown.classList.remove("show");
      }
    });

    if (dropdownBtn) {
      dropdownBtn.addEventListener("click", (e) => {
        if (window.innerWidth <= 768) {
          e.preventDefault();
          dropdown.classList.toggle("show");
        }
      });
    }
  }

  // Mobile Click
  if (dropdownMobile && dropdownBtnMobile) {
    dropdownBtnMobile.addEventListener("click", (e) => {
      e.preventDefault();
      dropdownMobile.classList.toggle("show");
    });
  }
}