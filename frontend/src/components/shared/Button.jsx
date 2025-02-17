function Button({ onClick, text, rounded, Component = "button", href }) {
  return (
    <Component
      onClick={onClick}
      className={`button ${rounded ? "rounded" : ""}`}
      href={href}
    >
      {text}
    </Component>
  );
}

export default Button;
