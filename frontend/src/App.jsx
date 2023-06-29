import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Database from "./pages/Database";
import AddPhone from "./pages/AddPhone";
import Layout from "./layouts/Layout";
import Phones from "./pages/Phones";

import "./styles.scss";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/database" element={<Database />} />
          <Route element={<Layout />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/phone" element={<Phones />} />
            <Route path="/phone/add" element={<AddPhone />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
