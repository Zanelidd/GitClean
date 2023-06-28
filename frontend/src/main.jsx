import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { CurrentUserProvider } from "./contexts/UserContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CurrentUserProvider>
      <App />
    </CurrentUserProvider>
  </React.StrictMode>
);
