import { useEffect, useState } from "react";
import axios from "axios";

import addButton from "../assets/add.svg";

function AddPhone() {
  const [oss, setOss] = useState([]);
  const [brands, setBrands] = useState([]);
  const [networks, setNetworks] = useState([]);
  const [rams, setRams] = useState([]);
  const [storages, setStorages] = useState([]);
  const [invalidFields, setInvalidFields] = useState(new Set());
  const host = import.meta.env.VITE_BACKEND_URL;
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const checkboxes = ["ramId", "storageId"];
    const errors = new Set();
    for (const key of checkboxes) {
      if (!data.has(key)) errors.add(key);
    }
    for (const key of data.keys()) {
      if (!checkboxes.includes(key)) {
        if (!data.get(key).trim()) errors.add(key);
        else errors.delete(key);
      }
    }
    setInvalidFields(errors);
  };

  useEffect(() => {
    axios
      .get(`${host}/os`)
      .then((response) => setOss(response.data))
      .catch((err) => console.error(err));
    axios
      .get(`${host}/brands`)
      .then((response) => setBrands(response.data))
      .catch((err) => console.error(err));
    axios
      .get(`${host}/networks`)
      .then((response) => setNetworks(response.data))
      .catch((err) => console.error(err));
    axios
      .get(`${host}/rams`)
      .then((response) => setRams(response.data))
      .catch((err) => console.error(err));
    axios
      .get(`${host}/storages`)
      .then((response) => setStorages(response.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <form className="add-phone" onSubmit={handleSubmit} noValidate>
      <h1>Ajouter un appareil</h1>
      <p>Tous les champs sont obligatoires</p>
      <p className="additionable-field">
        <label htmlFor="add-os-id">Système d’exploitation et version</label>
        <select id="add-os-id" name="osId" required>
          {oss.map((os) => {
            const { id, version } = os;
            return (
              <option key={id} value={id}>
                {version}
              </option>
            );
          })}
        </select>
        <button
          type="button"
          className="add-extra"
          title="Ajouter une version de système d’exploitation"
        >
          <img
            src={addButton}
            alt="Ajouter une version de système d’exploitation"
          />
        </button>
      </p>
      <p className="additionable-field">
        <label htmlFor="add-brand-id">Marque</label>
        <select id="add-brand-id" name="brandId" required>
          {brands.map((brand) => {
            const { id, name } = brand;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
        <button
          type="button"
          className="add-extra"
          title="Ajouter une mémoire RAM"
        >
          <img src={addButton} alt="Ajouter une mémoire RAM" />
        </button>
      </p>
      <p>
        <label htmlFor="add-model">
          Modèle
          {invalidFields.has("model") && (
            <span className="error">(le modèle doit être saisi)</span>
          )}
        </label>
        <input id="add-model" name="model" type="text" required />
      </p>
      <p>
        <label htmlFor="add-screen-size">
          Taille d’écran (en pouces)
          {invalidFields.has("screenSize") && (
            <span className="error">(la taille d’écran doit être saisie)</span>
          )}
        </label>
        <input
          id="add-screen-size"
          name="screenSize"
          type="number"
          min="0.1"
          step="0.1"
          required
        />
      </p>
      <p>
        <label htmlFor="add-network-id">
          Réseau (sélectionnez le meilleur réseau compatible)
        </label>
        <select id="add-network-id" name="networkId" required>
          {networks.map((network) => {
            const { id, name } = network;
            return (
              <option key={id} value={id}>
                {name}
              </option>
            );
          })}
        </select>
      </p>
      <fieldset>
        <legend>
          Mémoire RAM
          {invalidFields.has("ramId") && (
            <span className="error">
              (au moins une mémoire RAM doit être cochée)
            </span>
          )}
        </legend>
        <ul>
          {rams.map((ram) => {
            const { id, name } = ram;
            return (
              <li key={id}>
                <input
                  id={`add-ram-id-${id}`}
                  name="ramId"
                  type="checkbox"
                  value={id}
                />
                <label htmlFor={`add-ram-id-${id}`}>{name}</label>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className="add-extra"
              title="Ajouter une mémoire RAM"
            >
              <img src={addButton} alt="Ajouter une mémoire RAM" />
            </button>
          </li>
        </ul>
      </fieldset>
      <fieldset>
        <legend>
          Capacités de stockage
          {invalidFields.has("storageId") && (
            <span className="error">
              (au moins une capacité de stockage doit être cochée)
            </span>
          )}
        </legend>
        <ul>
          {storages.map((storage) => {
            const { id, name } = storage;
            return (
              <li key={id}>
                <input
                  id={`add-storage-id-${id}`}
                  name="storageId"
                  type="checkbox"
                  value={id}
                />
                <label htmlFor={`add-storage-id-${id}`}>{name}</label>
              </li>
            );
          })}
          <li>
            <button
              type="button"
              className="add-extra"
              title="Ajouter une capacité de stockage"
            >
              <img src={addButton} alt="Ajouter une capacité de stockage" />
            </button>
          </li>
        </ul>
      </fieldset>
      <p>
        <input type="submit" value="Ajouter cet appareil" />
      </p>
    </form>
  );
}

export default AddPhone;
