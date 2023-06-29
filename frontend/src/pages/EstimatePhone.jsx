import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import BottomPriceContainer from "../components/BottomPriceContainer";
import BottomSelectState from "../components/BottomSelectState";

export default function EstimatePhone() {
  const [infos, setInfos] = useState([]);
  const [state, setState] = useState([]);
  const [selectedState, setSelectedState] = useState([]);
  const location = useLocation();
  console.info("location : ", location);
  console.info("infos : ", infos);

  useEffect(() => {
    setInfos(location.state);
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/state`).then((response) => {
      setTimeout(() => setState(response.data), 500);
    });
  }, []);

  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <>
      {state.length && (
        <div className="estimate-container">
          <div className="caract-container">
            <img src="/src/assets/phone_14_01.jpg" alt="" />
            <div className="side-content">
              <h2 className="side-content-title">
                {infos.brandname} - {infos.model}
              </h2>
              <div className="infos-container">
                <p>Système d'exploitation : {infos.os} </p>
                <p>Taille d'écran : {infos.screen}</p>
                <p>Réseau : {infos.network}</p>
                <p>Ram : {infos.ram}</p>
                <p>Capacité de stockage : {infos.storage}</p>
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
