import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import Page403 from "./Page403";

import UserContext from "../contexts/UserContext";

export default function Home() {
  const { user } = useContext(UserContext);

  const navigate = useNavigate();

  const handleClick = (arg) => {
    navigate(`/${arg}`);
  };
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {user ? (
        <div className="home-container">
          <div className="button-container">
            {user.admin === 1 && (
              <button
                type="button"
                className="button-new"
                onClick={() => handleClick("phone/add")}
              >
                <img src="./src/assets/plus-circle.svg" alt="icone plus" />
                <p>Nouvel appareil</p>
              </button>
            )}
            <button
              type="button"
              className="button-estimate"
              onClick={() => handleClick("phone/select")}
            >
              <img src="./src/assets/percent.svg" alt="icone pourcentage" />
              <p>Estimer appareil</p>
            </button>
            <button
              type="button"
              className="button-faq"
              onClick={() => handleClick("faq")}
            >
              <img src="./src/assets/help-circle.svg" alt="icone faq" />
              <p>Foire aux questions</p>
            </button>
            {user.admin === 1 && (
              <>
                <button
                  type="button"
                  className="button-all"
                  onClick={() => handleClick("database")}
                >
                  <img src="./src/assets/list.svg" alt="icone liste" />
                  <p>Tous les appareils</p>
                </button>
                <button
                  type="button"
                  className="button-users"
                  onClick={() => handleClick("admin")}
                >
                  <img src="./src/assets/users.svg" alt="icone personnage" />
                  <p>Gestion utilisateurs</p>
                </button>
              </>
            )}
            <button
              type="button"
              className="button-out"
              onClick={() => handleClick("")}
            >
              <img src="./src/assets/log-out.svg" alt="icone sortie" />
              <p>Déconnexion</p>
            </button>
          </div>
        </div>
      ) : (
        <Page403 />
      )}
    </>
  );
}
