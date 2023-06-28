import { createContext, useState } from "react";
import PropTypes from "prop-types";

const UserContext = createContext();
export default UserContext;

export function CurrentUserProvider({ children }) {
  const [user, setUser] = useState();
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
CurrentUserProvider.propTypes = {
  children: PropTypes.element.isRequired,
};
