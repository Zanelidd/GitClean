import { Outlet } from "react-router-dom";

import Header from "../components/header/Header";

function Layout() {
  return (
    <div className="layout">
      <Header />
      <Outlet />
    </div>
  );
}

export default Layout;
