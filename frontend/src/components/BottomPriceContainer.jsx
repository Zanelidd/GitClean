import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types";
import ProgressCircle from "./ProgressCircle";

export default function BottomPriceContainer({ price }) {
  const navigate = useNavigate();
  return (
    <div className="bottom-container">
      <div className="categorie-container">
        <ProgressCircle />
      </div>
      <div className="price-container">
        <p className="price-title">Prix conseillé :</p>
        <p className="price">{price}€</p>
        <button
          type="button"
          className="button-new-estimate"
          onClick={() => {
            navigate("/phone/select");
          }}
        >
          Estimer un nouvel appareil
        </button>
      </div>
    </div>
  );
}

BottomPriceContainer.propTypes = {
  price: PropTypes.string.isRequired,
};
