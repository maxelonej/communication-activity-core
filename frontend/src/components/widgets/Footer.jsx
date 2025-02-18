import Button from "../shared/Button";

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div>
          <Button
            text="taom.academy"
            Component="a"
            href="https://taom.academy"
            rounded
          />
          <Button text="Обратная связь" rounded />
        </div>
        <p className="copyright">&copy; {new Date().getFullYear()} КДЯ</p>
      </div>
    </footer>
  );
}

export default Footer;
