import Button from "../shared/Button";

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
    </div>
  );
}

export default Hero;
