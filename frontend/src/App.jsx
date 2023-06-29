import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Database from "./pages/Database";
import AddPhone from "./pages/AddPhone";
import AddUser from "./pages/AddUser";
import Layout from "./layouts/Layout";
import "./styles.scss";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<Layout />}>
            <Route path="/admin" element={<Admin />} />
            <Route path="/home" element={<Home />} />
            <Route path="/phone" element={<Phone />} />
            <Route path="/phone/add" element={<AddPhone />} />
            <Route path="/database" element={<Database />} />
            <Route path="/admin/user/add" element={<AddUser />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
