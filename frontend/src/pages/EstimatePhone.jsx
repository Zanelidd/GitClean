import BottomPriceContainer from "../components/BottomPriceContainer";
// import BottomSelectState from "../components/BottomSelectState";

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
      <BottomPriceContainer />
      {/* <BottomSelectState /> */}
    </div>
  );
}
