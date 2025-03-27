document.addEventListener("DOMContentLoaded", function () {
  const openButton = document.getElementById("menu-open-button");
  const closeButton = document.getElementById("menu-close-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const menuItems = document.querySelectorAll(".menu-item");

  const overlay = document.createElement("div");
  overlay.className = "overlay";
  document.body.appendChild(overlay);

  const openMenu = () => {
    mobileMenu.setAttribute("active", "true");
    overlay.setAttribute("active", "true");
    openButton.setAttribute("active", "true");
    closeButton.setAttribute("active", "true");
  };

  const closeMenu = () => {
    mobileMenu.removeAttribute("active");
    overlay.removeAttribute("active");
    openButton.removeAttribute("active");
    closeButton.removeAttribute("active");
  };

  openButton.addEventListener("click", () => openMenu());
  closeButton.addEventListener("click", () => closeMenu());
  overlay.addEventListener("click", () => closeMenu());
  menuItems.forEach((item) => {
    item.addEventListener("click", () => closeMenu());
  });
});
