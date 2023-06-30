import { useState } from "react";
import axios from "axios";

export default function AddUser() {
  const [targetValues, setTargetValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    isAdmin: "",
  });

  const update = (event) => {
    const target = event.currentTarget;

    setTargetValues({
      ...targetValues,
      [target.name]: target.type === "checkbox" ? target.checked : target.value,
    });
  };

  const submit = (event) => {
    event.preventDefault();

    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users/add`, {
        firstname: targetValues.firstname,
        lastname: targetValues.lastname,
        email: targetValues.email,
        password: targetValues.password,
        isAdmin: parseInt(targetValues.isAdmin, 10),
      })
      .then((response) => console.info(response))
      .catch((err) => console.error(err));
  };
  return (
    <div className="AjoutUser">
      <h1>Ajout d’utilisateur</h1>
      <form className="addUser-form" onSubmit={submit}>
        <div className="input-name-firstname">
          <label>
            <p>Nom* :</p>
            <input
              className="input-name"
              type="text"
              name="lastname"
              onChange={update}
            />
          </label>
          <label>
            <p>Prenom* :</p>
            <input
              className="input-firstanme"
              type="text"
              name="firstname"
              onChange={update}
            />
          </label>
        </div>
        <label>
          <p>Email* :</p>
          <input
            className="input-email"
            type="text"
            name="email"
            onChange={update}
          />
        </label>
        <label>
          <p>Mot de passe* :</p>
          <input
            className="input-password"
            type="password"
            name="password"
            onChange={update}
          />
        </label>
        <label>
          <p>Role* :</p>
          <select name="isAdmin" id="" onChange={update}>
            <option value="">Selectione votre rôle</option>
            <option value="1">Administrateur</option>
            <option value="0">Salarié</option>
          </select>
        </label>
        <button className="addUser-submit" type="submit">
          Envoyer
        </button>
      </form>
    </div>
  );
}
