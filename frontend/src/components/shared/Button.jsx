function Button({ text, rounded }) {
  return (
    <button className={`button ${rounded ? "rounded" : ""}`}>{text}</button>
  );
}

export default Button;
