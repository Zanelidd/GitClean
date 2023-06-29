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
                <th className="column-header">OS</th>
                <th className="column-header">Taille</th>
                <th className="column-header">Écran</th>
                <th className="column-header">Ram</th>
                <th className="column-header">Stockage</th>
                <th className="column-header">État</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>10</td>
                <td>IOS</td>
                <td>6</td>
                <td>4</td>
                <td>128</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
