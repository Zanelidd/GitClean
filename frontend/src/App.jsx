import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Database from "./pages/Database";
import AddPhone from "./pages/AddPhone";
import EstimatePhone from "./pages/EstimatePhone";
import Layout from "./layouts/Layout";
import Phones from "./pages/Phones";
import SelectPhone from "./pages/SelectPhone";

import "./styles.scss";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/database" element={<Database />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/phone" element={<Phones />} />
            <Route path="/phone/add" element={<AddPhone />} />
            <Route path="/phone/select" element={<SelectPhone />}>
              <Route path="estimate" element={<EstimatePhone />} />
            </Route>
            <Route path="/database" element={<Database />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
