import Button from "../shared/Button";

const heroButtonsText = ["Новости", "taom.academy"];

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
        Проект служит целям оптимизации внутреннего и внешнего взаимодействия,
        повышения качества образовательного процесса
      </p>

      {heroButtonsText.map((heroButtonText, index) => {
        return (
          <Button key={`${index}: ${heroButtonText}`} text={heroButtonText} />
        );
      })}
    </div>
  );
}

export default Hero;
