import { useNavigate } from "react-router-dom";

export default function Admin() {
  const navigate = useNavigate();

  const handleClick = (arg) => {
    console.info(arg);
    navigate(`/${arg}`);
  };
  return (
    <div className="home-container">
      <div className="button-container">
        <button
          type="button"
          className="button-add"
          onClick={() => handleClick("phone/add")}
        >
          <img
            src="./src/assets/user-plus.svg"
            alt="icone personnage avec un plus"
          />
          <p>Ajouter un utilisateur</p>
        </button>
        <button type="button" className="button-modify">
          <img src="./src/assets/oneuser.svg" alt="icone personnage" />
          <p>Modifier un utilisateur</p>
        </button>
      </div>
    </div>
  );
}
