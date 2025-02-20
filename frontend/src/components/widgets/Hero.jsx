import Button from "../shared/Button";
import heroLogo from "../../assets/hero logo.svg";

function Hero() {
  return (
    <div className="hero container">
      <h1 className="title">
        Коммуникационно
        <br />
        Деятельностное
        <br />
        Ядро
      </h1>

      <p className="description">
        Платформа служит целям оптимизации внутреннего и внешнего
        взаимодействия, повышения качества образовательного процесса
      </p>

      <Button text="Новости" />

      <img className="hero-logo" src={heroLogo} alt="Лого Академии" />
    </div>
  );
}

export default Hero;
