import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Database from "./pages/Database";
import Phones from "./pages/Phones";
import AddPhone from "./pages/AddPhone";
import EstimatePhone from "./pages/EstimatePhone";
import Page404 from "./pages/Page404";

import FAQ from "./pages/FAQ";
import Layout from "./layouts/Layout";

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
            <Route path="/phone/estimate" element={<EstimatePhone />} />
            <Route path="/database" element={<Database />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
