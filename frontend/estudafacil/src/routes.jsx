import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Enem from "./pages/Enem";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/enem" element={<Enem />} />
    </Routes>
  );
};

export default Routing;
