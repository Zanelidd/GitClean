import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./layouts/Layout";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Database from "./pages/Database";
import Phones from "./pages/Phones";
import AddPhone from "./pages/AddPhone";
import AddUser from "./pages/AddUser";
import EstimatePhone from "./pages/EstimatePhone";
import Page404 from "./pages/Page404";
import FAQ from "./pages/FAQ";
import SelectPhone from "./pages/SelectPhone";
import EditUser from "./pages/EditUser";

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
            <Route path="/phone/select" element={<SelectPhone />} />
            <Route path="/phone/select/estimate" element={<EstimatePhone />} />
            <Route path="/database" element={<Database />} />
            <Route path="/admin/user/add" element={<AddUser />} />
            <Route path="/admin/user/edit" element={<EditUser />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="*" element={<Page404 />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
