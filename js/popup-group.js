const groupPopups = document.querySelectorAll(".popup-group");

groupPopups.forEach((groupPopup) => {
  groupPopup.innerHTML = `
    <div class="popup__wrapper">
      <h1 class="title--text">Группа занимается аналитикой опыта умных городов в сфере архитектуры и градостроительства</h1>
      <div class="wrapper">
        <div>
          <h2 class="title-text">Состав группы</h2>
          <ul class="list">
            <li class="item">• Иванов Иван Иванович</li>
            <li class="item">• Иванов Иван Иванович</li>
            <li class="item">• Иванов Иван Иванович</li>
            <li class="item">• Иванов Иван Иванович</li>
            <li class="item">• Иванов Иван Иванович</li>
            <li class="item">• Иванов Иван Иванович</li>
          </ul>
        </div>
        <div>
          <h2 class="title-text">Тьютор группы</h2>
          <ul class="list">
            <li class="item">• Иванов Иван Иванович</li>
            <li class="item">• Иванов Иван Иванович</li>
          </ul>
        </div>
      </div>
      <div class="wrapper">
        <button class="button">Вступить в группу</button>
        <button class="button">Задать вопрос</button>
      </div>
    </div>
  `;
});
