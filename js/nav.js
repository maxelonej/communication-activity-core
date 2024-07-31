// set navigation link active
const currentPage = window.location.pathname.split("/").pop();
const navLinks = document.querySelectorAll(".header__nav-link");

navLinks.forEach((link) => {
  const linkUrl = new URL(link.href, window.location.origin);
  if (linkUrl.pathname.endsWith(`/${currentPage}`)) {
    link.classList.add("active");
  }
});