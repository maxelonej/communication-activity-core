const btns = document.querySelectorAll(".wrapper[data-type='tags'] .button");
const cards = document.querySelectorAll('#events .container[data-type="card"]');

// Если существуют на странице
if (btns.length && cards.length) {
  btns.forEach((btn) => {
    // Кнопка при клике
    btn.addEventListener("click", () => {
      // Тег кнопки
      const btnTag = btn.getAttribute("data-tag");
      // Проверка статуса кнопки
      const isActive = btn.getAttribute("data-type") === "active";

      // Поставить всем кнопкам статус inactive
      btns.forEach((btn) => btn.setAttribute("data-type", "inactive"));

      // Кнопке, по которой кликнули, дать статус active, если она inactive
      if (!isActive) {
        btn.setAttribute("data-type", "active");
      }

      cards.forEach((card) => {
        // Записать тег карточки
        const cardTag = card.getAttribute("data-tag");
        // Тег карточки совпадает с тегом кнопки
        if (isActive || cardTag.includes(btnTag)) {
          // Показать и анимировать
          animateCard(card, true);
        } else {
          card.style.display = "none";
        }
      });
    });
  });
}

const animateCard = (card, show) => {
  if (show) {
    // Показать
    card.style.display = "flex";

    // Анимировать
    card.animate(
      // keyframes
      [
        { opacity: 0, transform: "translateY(-20px)" },
        { opacity: 1, transform: "translateY(0)" },
      ],
      // options
      {
        duration: 800,
        easing: "ease-in-out",
      }
    );
  }
};
