import { useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import CurrentModalContext from "../contexts/ModalContext";

export default function ModalAddExtraRam({ setModalRam }) {
  const { setModal } = useContext(CurrentModalContext);
  const [invalidRamAddition, setInvalidRamAddition] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const ram = `${data.get("extraNumber")} Go`;
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/rams`, { ram })
      .then((response) => {
        if (response.status === 201) {
          setModalRam(ram);
          setModal({});
        } else setInvalidRamAddition(response.data);
      })
      .catch((err) => setInvalidRamAddition(err.response.data.error));
  };
  const cancelSubmit = (e) => {
    e.preventDefault();
    setModal({});
  };

  return (
    <form onSubmit={handleSubmit} onReset={cancelSubmit} noValidate>
      <h2>Ajouter une capacité de RAM</h2>
      {invalidRamAddition && <p className="error">{invalidRamAddition}</p>}
      <p>
        <label htmlFor="add-extra-number">Quantité</label>
        <select id="add-extra-number" name="extraNumber" required>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="16">16</option>
          <option value="32">32</option>
          <option value="64">64</option>
          <option value="128">128</option>
          <option value="256">256</option>
          <option value="512">512</option>
        </select>
      </p>
      <p>
        <input type="submit" value="Ajouter" />
        <input type="reset" value="Annuler" />
      </p>
    </form>
  );
}

ModalAddExtraRam.propTypes = {
  setModalRam: PropTypes.func.isRequired,
};
