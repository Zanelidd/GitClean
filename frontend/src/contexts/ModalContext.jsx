/* eslint-disable react/jsx-no-constructed-context-values */
import { createContext, useState } from "react";
import PropTypes from "prop-types";

const CurrentModalContext = createContext();
export default CurrentModalContext;

export function CurrentModalProvider({ children }) {
  const [modal, setModal] = useState({});
  return (
    <CurrentModalContext.Provider value={{ modal, setModal }}>
      {children}
    </CurrentModalContext.Provider>
  );
}

CurrentModalProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
