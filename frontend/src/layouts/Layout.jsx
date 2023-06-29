import { Outlet } from "react-router-dom";
import Header from "../components/header/Header";

function Layout() {
  return (
    <>
      <div className="background-logo" />
      <Header />
      <Outlet />
    </>
  );
}

export default Layout;
