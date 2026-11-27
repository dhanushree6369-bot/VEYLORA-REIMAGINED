
// MOBILE NAVIGATION
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
  });
}

// CLICKABLE LISTEN FRAMEWORK CARDS
const listenCards = document.querySelectorAll(".listen-card");

listenCards.forEach((card) => {
  card.addEventListener("click", () => {
    const isExpanded = card.classList.toggle("expanded");

    card.setAttribute("aria-expanded", isExpanded);
    card.querySelector(".card-hint").textContent =
      isExpanded ? "Click to close −" : "Click to discover +";
  });
});

// MOBILE DROPDOWN
const dropdownToggle = document.querySelector(".dropdown-toggle");
const dropdownMenu = document.querySelector(".dropdown-menu");

if (dropdownToggle && dropdownMenu) {
  dropdownToggle.addEventListener("click", () => {
    const isOpen = dropdownMenu.classList.toggle("dropdown-open");

    dropdownToggle.setAttribute("aria-expanded", isOpen);
    dropdownMenu.style.display = isOpen ? "grid" : "";
  });
}
