import { useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import CurrentModalContext from "../contexts/ModalContext";

export default function ModalAddExtraOs({ setModalOs }) {
  const { setModal } = useContext(CurrentModalContext);
  const [invalidFields, setInvalidFields] = useState(new Set());
  const [invalidOsAddition, setInvalidOsAddition] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const errors = new Set();
    if (!data.get("extraVersion").length) errors.add("extraVersion");
    else errors.delete("extraVersion");
    setInvalidFields(errors);

    if (!errors.size) {
      const os = `${data.get("extraOs")} ${data.get("extraVersion")}`;
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/oss`, { os })
        .then((response) => {
          if (response.status === 201) {
            setModalOs(os);
            setModal({});
          } else setInvalidOsAddition(response.data);
        })
        .catch((err) => setInvalidOsAddition(err.response.data.error));
    }
  };
  const cancelSubmit = (e) => {
    e.preventDefault();
    setModal({});
  };

  return (
    <form onSubmit={handleSubmit} onReset={cancelSubmit} noValidate>
      <h2>Ajouter une version de système d’exploitation</h2>
      {invalidOsAddition && <p className="error">{invalidOsAddition}</p>}
      <p>
        <label htmlFor="add-extra-os">Système d’exploitation</label>
        <select id="add-extra-os" name="extraOs" required>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
        </select>
      </p>
      <p>
        <label htmlFor="add-extra-version">
          Version
          {invalidFields.has("extraVersion") && (
            <span className="error">(une version doit être saisie)</span>
          )}
        </label>
        <input
          id="add-extra-version"
          name="extraVersion"
          type="number"
          min="1"
          step="0.1"
          required
        />
      </p>
      <p>
        <input type="submit" value="Ajouter" />
        <input type="reset" value="Annuler" />
      </p>
    </form>
  );
}

ModalAddExtraOs.propTypes = {
  setModalOs: PropTypes.func.isRequired,
};
