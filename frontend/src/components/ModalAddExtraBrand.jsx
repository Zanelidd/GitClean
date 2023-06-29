import { useContext, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";

import CurrentModalContext from "../contexts/ModalContext";

export default function ModalAddExtraBrand({ setModalBrand }) {
  const { setModal } = useContext(CurrentModalContext);
  const [invalidFields, setInvalidFields] = useState(new Set());
  const [invalidBrandAddition, setInvalidBrandAddition] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const errors = new Set();
    if (!data.get("extraBrand").trim().length) errors.add("extraBrand");
    else errors.delete("extraBrand");
    setInvalidFields(errors);

    if (!errors.size) {
      const brand = data.get("extraBrand");
      axios
        .post(`${import.meta.env.VITE_BACKEND_URL}/brands`, { brand })
        .then((response) => {
          if (response.status === 201) {
            setModalBrand(brand);
            setModal({});
          } else setInvalidBrandAddition(response.data);
        })
        .catch((err) => setInvalidBrandAddition(err.response.data.error));
    }
  };
  const cancelSubmit = (e) => {
    e.preventDefault();
    setModal({});
  };

  return (
    <form onSubmit={handleSubmit} onReset={cancelSubmit} noValidate>
      <h2>Ajouter une marque</h2>
      {invalidBrandAddition && <p className="error">{invalidBrandAddition}</p>}
      <p>
        <label htmlFor="add-extra-brand">
          Marque
          {invalidFields.has("extraBrand") && (
            <span className="error">(une marque doit être saisie)</span>
          )}
        </label>
        <input
          id="add-extra-brand"
          name="extraBrand"
          maxLength={254}
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

ModalAddExtraBrand.propTypes = {
  setModalBrand: PropTypes.func.isRequired,
};
