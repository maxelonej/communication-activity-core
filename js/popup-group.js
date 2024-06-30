const groupPopups = document.querySelectorAll(".popup-group");

groupPopups.forEach((groupPopup) => {
  groupPopup.innerHTML = `
    <div class="popup__wrapper">
      <h1 class="text__title">Группа занимается аналитикой опыта умных городов в сфере архитектуры и градостроительства
      </h1>
      <div class="texts">
        <div class="text">
          <h2 class="text__title">Состав группы</h2>
          <ul class="text__list">
            <li class="text__item">• Иванов Иван Иванович</li>
            <li class="text__item">• Иванов Иван Иванович</li>
            <li class="text__item">• Иванов Иван Иванович</li>
            <li class="text__item">• Иванов Иван Иванович</li>
            <li class="text__item">• Иванов Иван Иванович</li>
            <li class="text__item">• Иванов Иван Иванович</li>
          </ul>
        </div>
        <div class="text">
          <h2 class="text__title">Тьютор группы</h2>
          <ul class="text__list">
            <li class="text__item">• Иванов Иван Иванович</li>
            <li class="text__item">• Иванов Иван Иванович</li>
          </ul>
        </div>
      </div>
      <div class="buttons">
        <button class="button">Вступить в группу</button>
        <button class="button">Задать вопрос</button>
      </div>
    </div>
  `;
});
