import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";

import { CurrentUserProvider } from "./contexts/UserContext";
import { CurrentModalProvider } from "./contexts/ModalContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <CurrentModalProvider>
        <App />
      </CurrentModalProvider>
    </CurrentUserProvider>
  </React.StrictMode>
);
