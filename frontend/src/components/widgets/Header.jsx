import logo from "../../assets/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <a href="#/">
            <img
              className="logo"
              src={logo}
              alt="Главная"
              title="Главная"
              draggable="false"
            />
          </a>
          <ul className="header__menu">
            <li className="menu__item">
              <a className="menu__link" href="#/internships">
                Практики и стажировки
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#/projects">
                Биржа проектов
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#/pas">
                ПАС
              </a>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
