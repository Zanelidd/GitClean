import PropTypes from "prop-types";

export default function ItemsList({ itemsListData }) {
  return (
    <>
      {itemsListData.map((item) => (
        <tr key={item.id}>
          <td className="brand-column fix">{item.brand}</td>
          <td>{item.model}</td>
          <td>{item.screen}</td>
          <td>{item.network}</td>
          <td>{item.os}</td>
          <td>{item.ram}</td>
          <td>{item.storage}</td>
        </tr>
      ))}
    </>
  );
}

ItemsList.propTypes = {
  itemsListData: PropTypes.arrayOf(PropTypes.shape().isRequired).isRequired,
};
