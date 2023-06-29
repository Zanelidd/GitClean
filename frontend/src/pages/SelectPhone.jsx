import axios from "axios";
import { useContext, useEffect, useReducer, useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductContext from "../contexts/ProductContext";

function reducer(state, action) {
  switch (action.type) {
    case "update_input":
      return {
        ...state,
        [action.key]: action.value,
      };
    default:
      return state;
  }
}
const initialState = {
  brand: "",
  model: "",
  OS: "",
  screenSize: "",
  network: "",
  storage: "",
  ram: "",
};

export default function SelectPhone() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const [brands, setBrands] = useState();
  const [OSs, setOSs] = useState();
  const [networks, setNetworks] = useState();
  const [rams, setRams] = useState();
  const [storages, setStorages] = useState();
  const { setSelected } = useContext(ProductContext);

  const screens = ["3.5'", "4'", "5'", "6'", "7'", "8'", "9'"];
  const models = ["iphone 10", "Galaxy 12", "iphone 14", " Galaxy 20"];

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/brands`).then((response) => {
      setBrands(response.data);
    });
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/oss`).then((response) => {
      setOSs(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/networks`)
      .then((response) => {
        setNetworks(response.data);
      });
  }, []);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/rams`).then((response) => {
      setRams(response.data);
    });
  }, []);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/storages`)
      .then((response) => {
        setStorages(response.data);
      });
  }, []);

  function postInfos(props) {
    axios
      .post(`${import.meta.env.VITE_BACKEND_URL}/database`, props)
      .then((response) => {
        console.info(response.data[0]);
        setSelected(response.data[0]);
      });
  }

  function HandleClickNavigate() {
    navigate("/phone/select/estimate");
  }

  return (
    <div className="select-phone-container">
      <h1>Estimer un appareil</h1>
      <div className="select-container">
        <select
          name="Marque"
          id="brand"
          label="brand"
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "brand",
            });
          }}
        >
          <option value="Marque">Marque</option>
          {brands &&
            brands.map((brand) => {
              return (
                <option key={brand.id} value={brand.name}>
                  {brand.name}
                </option>
              );
            })}
        </select>

        <select
          name="Modèle"
          id="model"
          label="model"
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "model",
            });
          }}
        >
          <option value="Modèle">Modèle</option>
          {models &&
            models.map((model) => {
              return (
                <option key={model} value={model}>
                  {model}
                </option>
              );
            })}
        </select>

        <select
          name="Système d'exploitation"
          id="OS"
          label="OS"
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "os",
            });
          }}
        >
          <option value="os">Sytème d'exploitation</option>
          {OSs &&
            OSs.map((os) => {
              return (
                <option key={os.id} value={os.version}>
                  {os.version}
                </option>
              );
            })}
        </select>

        <select
          name="Taille d'écran"
          id="screen-size"
          label="screen-size"
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "screenSize",
            });
          }}
        >
          <option value="Taille d'écran">Taille d'écran</option>
          {screens.map((screen) => {
            return (
              <option key={screen} value={screen}>
                {screen}
              </option>
            );
          })}
        </select>

        <select
          name="Réseau"
          id="network"
          label="network"
          onChange={(e) => {
            dispatch({
              type: "update_input",
              value: e.target.value,
              key: "network",
            });
          }}
        >
          <option value="Réseau">Réseau</option>
          {networks &&
            networks.map((network) => {
              return (
                <option key={network.id} value={network.name}>
                  {network.name}
                </option>
              );
            })}
        </select>
      </div>
      <div className="checkbox-container">
        <p>Stockage : </p>
        <div className="storage-container">
          {storages &&
            storages.map((storage) => {
              return (
                <label key={storage.id} htmlFor={storage.name}>
                  <input
                    type="checkbox"
                    name={storage.name}
                    id="checkbox"
                    value={storage.name}
                    onChange={(e) => {
                      dispatch({
                        type: "update_input",
                        value: e.target.value,
                        key: "storage",
                      });
                    }}
                  />
                  {storage.name}
                </label>
              );
            })}
        </div>

        <p>RAM :</p>
        <div className="ram-container">
          {rams &&
            rams.map((ram) => {
              return (
                <label key={ram.id} htmlFor={ram.name}>
                  <input
                    type="checkbox"
                    name={ram.name}
                    id="checkbox"
                    value={ram.name}
                    onChange={(e) => {
                      dispatch({
                        type: "update_input",
                        value: e.target.value,
                        key: "ram",
                      });
                    }}
                  />
                  {ram.name}
                </label>
              );
            })}
        </div>
      </div>
      <button
        type="button"
        className="button-find"
        onClick={() => {
          postInfos(state);
          setTimeout(() => {
            HandleClickNavigate();
          }, 1000);
        }}
      >
        Trouver l'appareil
      </button>
    </div>
  );
}
