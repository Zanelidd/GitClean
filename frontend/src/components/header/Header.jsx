import { Link } from "react-router-dom";
import ImageLogo from "../../assets/logo_emmaus_connect.svg";

export default function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img
          className="imgLogoHeader"
          src={ImageLogo}
          alt="logo_emmaus_connect.svg"
        />
      </Link>
      <div className="Burger">
        <input
          type="checkbox"
          role="button"
          aria-label="Display the menu"
          className="menu"
        />
      </div>
    </header>
  );
}
