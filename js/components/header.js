const headers = document.querySelectorAll("header.header");

headers.forEach((header) => {
  header.innerHTML = `
    <div class="header__wrapper">
      <!-- logo -->
      <a class="header__logo-link" href="/index.html">
        <img class="header__logo" src="/img/logo.png" alt="Лого">
      </a>
      <!-- navigation -->
      <nav class="header__nav">
        <ul class="header__nav-list">
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/pas.html">ПАС</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/project-exchange.html">Биржа проектов</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/competitions.html">Конкурсы</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/taomskills.html">ТАУ SKILLS</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/internships.html">Практики и стажировки</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/scientific-conferences.html">Научные конференции</a>
          </li>
          <li class="header__nav-item">
            <a class="header__nav-link" href="/pages/competencies.html">Компетенции</a>
          </li>
        </ul>
      </nav>
      <!-- links -->
      <div class="header__links">
        <a class="header__links-link" href="/pages/calendar.html">
          <img class="header__links-icon" src="/img/calendar.png" alt="Календарь мероприятий">
        </a>
        <a class="header__links-link" href="/pages/auth.html">
          <img class="header__links-icon" src="/img/profile.png" alt="Профиль">
        </a>
        <!-- burger menu -->
        <div id="burger" class="header__links-link header__burger-open">
          <img class="header__links-icon header__burger-open-icon" src="/img/burger-open.svg" alt="Открыть меню">
        </div>
      </div>
    </div>

    <!-- burger content -->
    <div class="header__burger-content">
      <nav class="header__burger__nav">
        <div class="header__burger-close">
          <img class="header__burger-close-icon" src="/img/burger-close.svg" alt="Закрыть меню">
        </div>
        <ul class="header__burger__nav-list">
          <!-- burger menu -->
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/pas.html">ПАС</a>
          </li>
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/project-exchange.html">Биржа проектов</a>
          </li>
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/competition.html">Конкурсы</a>
          </li>
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/taomskills.html">ТАУ SKILLS</a>
          </li>
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/internships.html">Практики и стажировки</a>
          </li>
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/scientific-conferences.html">Научные конференции</a>
          </li>
          <li class="header__burger__nav-item">
            <a class="header__burger__nav-link" href="/pages/competencies.html">Компетенции</a>
          </li>
        </ul>
      </nav>
    </div>
  `;
});
