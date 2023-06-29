import ProgressCircle from "./ProgressCircle";

export default function BottomPriceContainer() {
  return (
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
  );
}
