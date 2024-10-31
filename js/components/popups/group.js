const groupPopups = document.querySelectorAll(".popup-group");

groupPopups.forEach((groupPopup) => {
  groupPopup.innerHTML = `
    <div class="popup__wrapper">
      <div class="wrapper">
        <div>
          <h2 class="title-text">Состав группы</h2>
          <ul class="list">
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
            <li class="item">• </li>
          </ul>
        </div>
        <div class="staff">
          <div>
            <h2 class="title-text">Тьютор группы</h2>
            <ul class="list">
              <li class="item">• </li>
              <li class="item">• </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="wrapper">
        <button class="button">Вступить в группу</button>
        <button class="button">Задать вопрос</button>
      </div>
    </div>
  `;
});
