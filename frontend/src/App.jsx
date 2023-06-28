import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "./pages/Login";
import Admin from "./pages/Admin";
import Home from "./pages/Home";
import Phone from "./pages/Phone";
import Database from "./pages/Database";

import "./styles.scss";

function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/home" element={<Home />} />
          <Route path="/phone" element={<Phone />} />
          <Route path="/database" element={<Database />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
