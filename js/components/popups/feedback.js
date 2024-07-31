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
