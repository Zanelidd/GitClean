import { useEffect, useState } from "react";

export default function ItemsList() {
  // eslint-disable-next-line no-unused-vars
  const [itemsListData, setItemsListData] = useState([]);

  useEffect(() =>
    // axios.get()
    {}, []);
  return (
    <>
      <tr>
        <td>10</td>
        <td>IOS</td>
        <td>6</td>
        <td>4</td>
        <td>128</td>
      </tr>
      <tr>
        <td>10</td>
        <td>IOS</td>
        <td>6</td>
        <td>4</td>
        <td>128</td>
      </tr>
      <tr>
        <td>10</td>
        <td>IOS</td>
        <td>6</td>
        <td>4</td>
        <td>128</td>
      </tr>
      <tr>
        <td>10</td>
        <td>IOS</td>
        <td>6</td>
        <td>4</td>
        <td>128</td>
      </tr>
      <tr>
        <td>10</td>
        <td>IOS</td>
        <td>6</td>
        <td>4</td>
        <td>128</td>
      </tr>
    </>
  );
}
