class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="header-wrapper">
        <div class="logo">
          <a href="index.html"><img src="img/logo.png" alt="logo"></a>
        </div>
        <nav>
          <ul class="nav-link">
            <li><a href="pas.html">ПАС</a></li>
            <li><a href="project-exchange.html">Биржа проектов</a></li>
            <li><a href="competition.html">Конкурсы</a></li>
            <li><a href="taomskills.html">TaomSkills</a></li>
            <li><a href="internships.html">Практики и стажировки</a></li>
          </ul>
        </nav>
        <div class="img-links">
          <a href="profile.html"><img class="icon" src="img/profile.png" alt="profile"></a>
        </div>
        <div class="burger">
          <img src="../img/burger-menu.svg" alt="burger menu">
        </div>
      </div>

      <div class="burger-open">
        <nav>
          <ul class="nav-link">
            <li><a href="pas.html">ПАС</a></li>
            <li><a href="project-exchange.html">Биржа проектов</a></li>
            <li><a href="competition.html">Конкурсы</a></li>
            <li><a href="taomskills.html">TaomSkills</a></li>
            <li><a href="internships.html">Практики и стажировки</a></li>
          </ul>
          <div class="img-links">
            <a href="profile.html"><img class="icon" src="img/profile.png" alt="profile"></a>
          </div>
          <div class="burger-close">
            <img src="img/cross.svg" alt="cross">
          </div>
        </nav>
      </div>
      `
  }
}

class Feedback extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <div class="popup feedback-popup">
        <div class="popup-content">
          <div class="popup-top">
            <h2 class="title">Обратная связь</h2>
            <div class="popup-close">
              <img src="img/cross.svg" alt="cross">
            </div>
          </div>
          <span class="line"></span>
          <form class="feedback-form">
            <input type="text" name="name" id="name" placeholder="* Укажите ваше имя" required>
            <input type="email" name="email" id="email" placeholder="* Укажите ваш E-mail" required>
            <textarea name="msg" id="msg" cols="30" rows="10" placeholder="* Введите ваше сообщение" required></textarea>
            <button type="submit">Отправить</button>
          </form>
        </div>
      </div>
    `
  }
}

customElements.define('app-header', Header);
customElements.define('app-feedback', Feedback)