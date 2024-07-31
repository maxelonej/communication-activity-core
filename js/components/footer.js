const footers = document.querySelectorAll("footer.footer");

footers.forEach((footer) => {
  footer.innerHTML = `
    <div class="footer__wrapper">
      <a class="footer__link activate-popup" data-popup="popup-feedback">Обратная связь</a>
      <p class="footer__copyright footer__paragraph">© ${new Date().getFullYear()}, <a class="footer__link" href="#">КДЯ</a></p>
    </div>
  `;
});
