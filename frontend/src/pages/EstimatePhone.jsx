import axios from "axios";
import { useContext, useEffect, useState } from "react";
import BottomPriceContainer from "../components/BottomPriceContainer";
import BottomSelectState from "../components/BottomSelectState";
import ProductContext from "../contexts/ProductContext";

export default function EstimatePhone() {
  const [state, setState] = useState([]);
  const { selected } = useContext(ProductContext);
  const [selectedState, setSelectedState] = useState([]);

  console.info("selected : ", selected);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/state`).then((response) => {
      setTimeout(() => setState(response.data), 500);
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {selected.brandname?.length && (
        <div className="estimate-container">
          <div className="caract-container">
            <img src="/src/assets/phone_14_01.jpg" alt="" />
            <div className="side-content">
              <h2 className="side-content-title">
                {selected.brandname} - {selected.model}
              </h2>
              <div className="infos-container">
                <p>Système d'exploitation : {selected.os} </p>
                <p>Taille d'écran : {selected.screen}</p>
                <p>Réseau : {selected.network}</p>
                <p>Ram : {selected.ram}</p>
                <p>Capacité de stockage : {selected.storage}</p>
                {selectedState.length > 0 && <p>Etat : {selectedState} </p>}
              </div>
            </div>
          </div>
          {selectedState.length > 0 && <BottomPriceContainer />}
          {!selectedState.length && (
            <BottomSelectState
              state={state}
              setSelectedState={setSelectedState}
            />
          )}
        </div>
      )}
    </>
  );
}
