import { createContext, useState } from "react";
import PropTypes from "prop-types";

const ProductContext = createContext();
export default ProductContext;

export function CurrentProductProvider({ children }) {
  const [selected, setSelected] = useState();
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ProductContext.Provider value={{ selected, setSelected }}>
      {children}
    </ProductContext.Provider>
  );
}
CurrentProductProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
