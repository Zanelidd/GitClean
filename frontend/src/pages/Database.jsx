import ItemsList from "../components/ItemsList";

export default function Database() {
  return (
    <div className="database-container">
      <h1>Tous les appareils</h1>
      <div className="tables-container">
        <div className="table-left-container">
          <table className="table-left">
            <thead>
              <tr>
                <th className="column-header">Marque</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>iphone</td>
              </tr>
              <tr>
                <td>iphone</td>
              </tr>
              <tr>
                <td>iphone</td>
              </tr>
              <tr>
                <td>iphone</td>
              </tr>
              <tr>
                <td>iphone</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="table-right-container">
          <table className="table-right">
            <thead>
              <tr>
                <th className="column-header">Modèle</th>
                <th className="column-header">Écran</th>
                <th className="column-header">Réseau</th>
                <th className="column-header">Sys. d'exploitation</th>
                <th className="column-header">RAM</th>
                <th className="column-header">Stockage</th>
              </tr>
            </thead>
            <tbody>
              <ItemsList />
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
