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
    </div>
  );
}
