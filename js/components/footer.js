const footers = document.querySelectorAll("footer.footer");

footers.forEach((footer) => {
  footer.innerHTML = `
    <div class="footer__wrapper">
      <a class="footer__link activate-popup">Обратная связь</a>
      <p class="footer__copyright footer__paragraph">© ${new Date().getFullYear()}, <a class="footer__link" href="#">КДЯ</a></p>
    </div>

    <div class="popup">
      <div class="popup__wrapper">
        <form action="/submit-form" method="post">
          <fieldset class="popup__fieldset">
            <textarea name="popup__message" id="popup__message" class="popup__message"
              placeholder="Введите сообщение"></textarea>
            <button class="popup__button" type="submit">Отправить</button>
          </fieldset>
        </form>
      </div>
    </div>
  `;
});

const popup = document.querySelector(".popup");
const link = document.querySelector(".activate-popup");
const popupWrapper = document.querySelector(".popup__wrapper");

let originalOverflowY = document.body.style.overflowY;

link.addEventListener("click", (e) => {
  e.stopPropagation();
  popup.classList.toggle("active");
  document.body.style.overflowY = "hidden";
});

document.addEventListener("click", (event) => {
  if (
    !popupWrapper.contains(event.target) &&
    popup.classList.contains("active")
  ) {
    document.body.style.overflowY = originalOverflowY;
    popup.classList.remove("active");
  }
});
