import ProgressCircle from "../components/ProgressCircle";

export default function EstimatePhone() {
  return (
    <div className="estimate-container">
      <div className="caract-container">
        <img src="/src/assets/phone_14_01.jpg" alt="" />
        <div className="side-content">
          <h2 className="side-content-title">Marque -Modèle téléphone</h2>
          <div className="infos-container">
            <p>Système d'exploitation : </p>
            <p>Taille d'écran :</p>
            <p>Réseau :</p>
            <p>Ram :</p>
            <p>Capacité de stockage :</p>
            <p>Etat : </p>
          </div>
        </div>
      </div>
      <div className="bottom-container">
        <div className="categorie-container">
          <ProgressCircle />
        </div>
        <div className="price-container">
          <p className="price-title">Prix conseillé :</p>
          <p className="price">75€</p>
          <button type="button" className="button-new-estimate">
            Estimer un nouvel appareil
          </button>
        </div>
      </div>
    </div>
  );
}
