import PropTypes from "prop-types";
import ProgressCircle from "./ProgressCircle";

export default function BottomPriceContainer({ price, categoryName }) {
  console.info(categoryName);
  return (
    <div className="bottom-container">
      <div className="categorie-container">
        <ProgressCircle categoryName={categoryName} />
      </div>
      <div className="price-container">
        <p className="price-title">Prix conseillé :</p>
        <p className="price">{price}€</p>
        <button type="button" className="button-new-estimate">
          Estimer un nouvel appareil
        </button>
      </div>
    </div>
  );
}

BottomPriceContainer.propTypes = {
  price: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};
