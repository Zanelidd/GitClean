import { useEffect, useState } from "react";
import axios from "axios";
import ItemsList from "../components/ItemsList";

export default function Database() {
  const [itemsListData, setItemsListData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/database`)
      .then((response) => setItemsListData(response.data))
      .catch((err) => console.error(err));
  }, []);

  const downloadFile = ({ data, fileName, fileType }) => {
    const blob = new Blob([data], { type: fileType });

    const a = document.createElement("a");
    a.download = fileName;
    a.href = window.URL.createObjectURL(blob);
    const clickEvt = new MouseEvent("click", {
      view: window,
      bubbles: true,
      cancelable: true,
    });
    a.dispatchEvent(clickEvt);
    a.remove();
  };

  const exportToCsv = (e) => {
    e.preventDefault();

    const headers = [
      "Id;Marque;Modele;Ecran;Reseau;Systeme d exploitation;RAM;Stockage",
    ];

    const itemsCsv = itemsListData.reduce((acc, item) => {
      const { id, brand, model, screen, network, os, ram, storage } = item;
      acc.push([id, brand, model, screen, network, os, ram, storage].join(";"));
      return acc;
    }, []);

    downloadFile({
      data: [...headers, ...itemsCsv].join("\n"),
      fileName: "products.csv",
      fileType: "text/csv",
    });
  };
  return (
    <div className="database-container">
      <h1>Tous les appareils</h1>
      <div className="tables-container">
        <div className="table-products-container">
          <table className="table-products">
            <thead>
              <tr className="row-head">
                <th className="column-header">Marque</th>
                <th className="column-header">Modèle</th>
                <th className="column-header">Écran</th>
                <th className="column-header">Réseau</th>
                <th className="column-header">Sys. d'exploitation</th>
                <th className="column-header">RAM</th>
                <th className="column-header">Stockage</th>
              </tr>
            </thead>
            <tbody>
              <ItemsList itemsListData={itemsListData} />
            </tbody>
          </table>
        </div>
      </div>
      <div className="button-container">
        <button type="button" onClick={exportToCsv}>
          Export fichier .CSV
        </button>
      </div>
    </div>
  );
}
