import { useEffect, useState } from "react";
import axios from "axios";

export default function ItemsList() {
  const [itemsListData, setItemsListData] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BACKEND_URL}/database`)
      .then((response) => setItemsListData(response.data))
      .catch((err) => console.error(err));
  }, []);
  return (
    <>
      {itemsListData.map((item) => (
        <tr key={item.id}>
          <td>{item.model}</td>
          <td>{item.screen_size}</td>
          <td>{item.network}</td>
          <td>{item.os_version}</td>
          <td>{item.ram}</td>
          <td>{item.storage}</td>
        </tr>
      ))}
    </>
  );
}
