import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Enem from "./pages/Enem";
import Superior from "./pages/Superior";
import Concurso from "./pages/Concurso";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/enem" element={<Enem />} />
      <Route path="/superior" element={<Superior />} />
      <Route path="/concurso" element={<Concurso />} />
    </Routes>
  );
};

export default Routing;
