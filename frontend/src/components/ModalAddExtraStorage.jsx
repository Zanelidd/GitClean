import { useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import CurrentModalContext from "../contexts/ModalContext";

export default function ModalAddExtraStorage({ setModalStorage }) {
  const { setModal } = useContext(CurrentModalContext);
  const [invalidStorageAddition, setInvalidStorageAddition] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const storage = `${data.get("extraNumber")} ${data.get("extraUnit")}`;
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/storages`, { storage })
      .then((response) => {
        if (response.status === 201) {
          setModalStorage(storage);
          setModal({});
        } else setInvalidStorageAddition(response.data);
      })
      .catch((err) => setInvalidStorageAddition(err.response.data.error));
  };
  const cancelSubmit = (e) => {
    e.preventDefault();
    setModal({});
  };

  return (
    <form onSubmit={handleSubmit} onReset={cancelSubmit} noValidate>
      <h2>Ajouter une capacité de RAM</h2>
      {invalidStorageAddition && (
        <p className="error">{invalidStorageAddition}</p>
      )}
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
        <label htmlFor="add-extra-unit">Unité</label>
        <select id="add-extra-unit" name="extraUnit" required>
          <option value="Go">Go</option>
          <option value="To">To</option>
        </select>
      </p>
      <p>
        <input type="submit" value="Ajouter" />
        <input type="reset" value="Annuler" />
      </p>
    </form>
  );
}

ModalAddExtraStorage.propTypes = {
  setModalStorage: PropTypes.func.isRequired,
};
