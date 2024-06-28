export class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <header class="header">
        <div class="header__wrapper">
          <!-- logo -->
          <a class="header__logo-link" href="index.html">
            <img class="header__logo" src="img/logo.svg" alt="Лого">
          </a>
          <!-- navigation -->
          <nav class="header__nav">
            <ul class="header__nav-list">
              <li class="header__nav-item">
                <a class="header__nav-link" href="pas.html">ПАС</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="project-exchange.html">Биржа проектов</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="competition.html">Конкурсы</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="taomskills.html">TaomSkills</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="internships.html">Практики и стажировки</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="scientific-conferences.html">Научные конференции</a>
              </li>
              <li class="header__nav-item">
                <a class="header__nav-link" href="competencies.html">Компетенции</a>
              </li>
            </ul>
          </nav>
          <!-- links -->
          <div class="header__links">
            <a class="header__links-link" href="calendar.html">
              <img class="header__links-icon" src="img/calendar.svg" alt="Календарь мероприятий">
            </a>
            <a class="header__links-link" href="profile.html">
              <img class="header__links-icon" src="img/profile.svg" alt="Профиль">
            </a>
            <!-- burger menu -->
            <div id="burger" class="header__links-link header__burger-open">
              <img class="header__links-icon header__burger-open-icon" src="./img/burger-open.svg" alt="Открыть меню">
            </div>
          </div>
        </div>

        <!-- burger content -->
        <div class="header__burger-content">
          <nav class="header__burger__nav">
            <div class="header__burger-close">
              <img class="header__burger-close-icon" src="img/burger-close.svg" alt="Закрыть меню">
            </div>
            <ul class="header__burger__nav-list">
              <!-- burger menu -->
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="pas.html">ПАС</a>
              </li>
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="project-exchange.html">Биржа проектов</a>
              </li>
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="competition.html">Конкурсы</a>
              </li>
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="taomskills.html">TaomSkills</a>
              </li>
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="internships.html">Практики и стажировки</a>
              </li>
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="scientific-conferences.html">Научные конференции</a>
              </li>
              <li class="header__burger__nav-item">
                <a class="header__burger__nav-link" href="competencies.html">Компетенции</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      `;
  }
}

customElements.define("cac-header", Header);

// burger content
const burgerContent = document.querySelector(".header__burger-content");
// burger icon in header
const burger = document.querySelector(".header__burger-open");

burger.addEventListener("click", () => {
  burgerContent.classList.add("active");
});

document
  .querySelector(".header__burger-close")
  .addEventListener("click", () => {
    burgerContent.classList.remove("active");
  });

document.addEventListener("click", (e) => {
  if (!burgerContent.contains(e.target) && !burger.contains(e.target)) {
    burgerContent.classList.remove("active");
  }
});
