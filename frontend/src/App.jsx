import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Database from "./pages/Database";
import AddPhone from "./pages/AddPhone";
import Phones from "./pages/Phones";

import Header from "./components/header/Header";

import "./styles.scss";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/phones" element={<Phones />} />
        <Route path="/phone/add" element={<AddPhone />} />
        <Route path="/database" element={<Database />} />
      </Routes>
    </Router>
  );
}

export default App;
