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
    </header>
  );
}
