// set navigation link active
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".header__nav-link");

navLinks.forEach((link) => {
  if (link.href.includes(currentPage)) {
    link.classList.add("active");
  }
});
