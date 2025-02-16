import logo from "../../assets/logo.svg";

function Header() {
  return (
    <>
      <header className="header">
        <div className="container">
          <img className="logo" src={logo} alt="Лого" draggable="false" />
          <ul className="header__menu">
            <li className="menu__item">
              <a className="menu__link" href="#">
                Практики и стажировки
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
                Биржа проектов
              </a>
            </li>
            <li className="menu__item">
              <a className="menu__link" href="#">
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
