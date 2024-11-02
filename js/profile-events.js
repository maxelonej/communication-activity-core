const buttons = document.querySelectorAll(".wrapper[data-type='tags'] .button");
const cards = document.querySelectorAll('#events .container[data-type="card"]');

if (buttons.length && cards.length) {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const tag = button.getAttribute("data-tag");
      const isActive = button.getAttribute("data-type") === "active";

      // Убираем активный класс с всех кнопок
      buttons.forEach((btn) => btn.setAttribute("data-type", "inactive"));

      // Если кнопка была неактивной, активируем её
      if (!isActive) {
        button.setAttribute("data-type", "active");
      }

      // Фильтруем карточки
      cards.forEach((card) => {
        const cardTags = card.getAttribute("data-tags").split(" ");
        if (isActive || cardTags.includes(tag)) {
          // Показываем карточки с анимацией
          animateCard(card, true);
        } else {
          // Скрываем карточки, которые не соответствуют выбранному тегу
          card.style.display = "none"; // Скрываем карточку сразу
        }
      });
    });
  });
}

function animateCard(card, show) {
  if (show) {
    card.style.display = "flex"; // Убедитесь, что карточка отображается
    card.style.opacity = 0; // Устанавливаем начальную непрозрачность

    // Используем requestAnimationFrame для обновления стиля
    requestAnimationFrame(() => {
      card.animate(
        [
          { opacity: 0, transform: "translateY(-20px)" },
          { opacity: 1, transform: "translateY(0)" },
        ],
        {
          duration: 800,
          easing: "ease-in-out",
        }
      );
      card.style.opacity = 1; // Устанавливаем окончательную непрозрачность
    });
  }
}