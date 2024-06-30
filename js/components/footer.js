const footers = document.querySelectorAll("footer.footer");

footers.forEach((footer) => {
  footer.innerHTML = `
    <div class="footer__wrapper">
      <a class="footer__link activate-popup" data-popup="popup-feedback">Обратная связь</a>
      <p class="footer__copyright footer__paragraph">© ${new Date().getFullYear()}, <a class="footer__link" href="#">КДЯ</a></p>
    </div>
  `;
});

const feedbackPopups = document.querySelectorAll(".popup-feedback");

feedbackPopups.forEach((feedbackPopup) => {
  feedbackPopup.innerHTML = `
      <div class="popup__wrapper">
        <form action="/submit-form" method="post">
          <fieldset class="popup__fieldset">
            <textarea name="popup__message" id="popup__message" class="popup__message"
              placeholder="Введите сообщение"></textarea>
            <button class="popup__button" type="submit">Отправить</button>
          </fieldset>
        </form>
      </div>
  `;
});

// Popups
const popups = document.querySelectorAll(".popup");
const links = document.querySelectorAll(".activate-popup");

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.stopPropagation();
    const popupName = link.dataset.popup;
    const popup = document.querySelector(`.popup.${popupName}`);
    if (popup) {
      popup.classList.toggle("active");
    }
  });
});

document.addEventListener("click", (event) => {
  popups.forEach((popup) => {
    const popupWrapper = popup.querySelector(".popup__wrapper");
    if (
      !popupWrapper.contains(event.target) &&
      popup.classList.contains("active")
    ) {
      popup.classList.remove("active");
    }
  });
});
