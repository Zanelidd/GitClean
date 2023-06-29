import axios from "axios";
import { useEffect, useState } from "react";
import BottomPriceContainer from "../components/BottomPriceContainer";
import BottomSelectState from "../components/BottomSelectState";

export default function EstimatePhone() {
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/state`).then((response) => {
      setTimeout(() => setState(response.data), 500);
    });
  }, []);

  // useEffect(() => {
  //   axios.get(`${import.meta.env.VITE_BACKEND_URL}/product`).then((response) => {
  //     setTimeout(() => setState(response.data), 500);
  //   });
  // }, []);
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {state.length && (
        <div className="estimate-container">
          <div className="caract-container">
            <img src="/src/assets/phone_14_01.jpg" alt="" />
            <div className="side-content">
              <h2 className="side-content-title">Marque - Modèle téléphone</h2>
              <div className="infos-container">
                <p>Système d'exploitation : </p>
                <p>Taille d'écran :</p>
                <p>Réseau :</p>
                <p>Ram :</p>
                <p>Capacité de stockage :</p>
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
