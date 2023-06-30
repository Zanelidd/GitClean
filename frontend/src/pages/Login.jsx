import { useContext, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import UserContext from "../contexts/UserContext";

export default function Login() {
  const { setUser } = useContext(UserContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const navigate = useNavigate();

  function tempo() {
    setTimeout(() => navigate("/home"), 1000);
  }

  function userLogin() {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/users`, { email, password })
      .then((response) => {
        if (response.status === 200) {
          setUser(response.data);
        }
      });
  }

  function submit(e) {
    e.preventDefault();
    userLogin();
    tempo();
  }
  return (
    <div className="login-container">
      <img className="logo" src="./src/assets/logo.png" alt="logo" />
      <div className="login-information">
        <h1>SE CONNECTER</h1>
        <form className="form-container" onSubmit={submit}>
          <div className="input-container">
            <label htmlFor="email">Email :</label>
            <input
              type="text"
              id="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
            />
            <label htmlFor="password">Password : </label>
            <input
              type="password"
              id="password"
              onChange={(e) => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button type="submit"> Se connecter</button>
        </form>
      </div>
    </div>
  );
}
