export default function SelectPhone() {
  return (
    <div className="select-phone-container">
      <h1>Estimer un appareil</h1>
      <div className="select-container">
        <select name="Marque" id="brand" label="brand">
          <option value="Marque">Marque</option>
        </select>

        <select name="Modèle" id="model" label="model ">
          <option value="Modèle">Modèle</option>
        </select>

        <select name="Système d'exploitation" id="OS" label="OS">
          <option value="OS">Sytème d'exploitation</option>
        </select>

        <select name="Taille d'écran" id="screen-size" label="screen-size">
          <option value="Taille d'écran">Taille d'écran</option>
        </select>

        <select name="Réseau" id="network" label="network">
          <option value="Réseau">Réseau</option>
        </select>
      </div>
      <div className="checkbox-container">
        <p>Stockage : </p>
        <div className="storage-container">
          <label htmlFor="16Go">
            <input type="checkbox" name="16Go" id="checkbox" />
            16Go
          </label>
          <label htmlFor="64Go">
            <input type="checkbox" name="64Go" id="checkbox" />
            64Go
          </label>
          <label htmlFor="128Go">
            <input type="checkbox" name="128Go" id="checkbox" />
            128Go
          </label>
          <label htmlFor="256Go">
            <input type="checkbox" name="256Go" id="checkbox" />
            256Go
          </label>
        </div>

        <p>RAM :</p>
        <div className="ram-container">
          <label htmlFor="4Go">
            <input type="checkbox" name="4Go" id="checkbox" />
            4Go
          </label>
          <label htmlFor="8Go">
            <input type="checkbox" name="8Go" id="checkbox" />
            8Go
          </label>
          <label htmlFor="10Go">
            <input type="checkbox" name="10Go" id="checkbox" />
            10Go
          </label>
          <label htmlFor="12Go">
            <input type="checkbox" name="12Go" id="checkbox" />
            12Go
          </label>
        </div>
      </div>
      <button type="button" className="button-find">
        Trouver l'appareil
      </button>
    </div>
  );
}
