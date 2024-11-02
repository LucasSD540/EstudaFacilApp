import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import About from "./pages/About";
import Enem from "./pages/Enem";
import Superior from "./pages/Superior";
import Concurso from "./pages/Concurso";
import EnemCourse from "./pages/Enem_course";
import SuperiorCourse from "./pages/Superior_course";
import ConcursoCourse from "./pages/Concurso_course";
import ProtectedRoute from "./components/ProtectedRoute";

const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sobre" element={<About />} />
      <Route path="/enem" element={<Enem />} />
      <Route path="/superior" element={<Superior />} />
      <Route path="/concurso" element={<Concurso />} />
      <Route
        path="/enem-course"
        element={
          <ProtectedRoute>
            <EnemCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superior-course"
        element={
          <ProtectedRoute>
            <SuperiorCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/concurso-course"
        element={
          <ProtectedRoute>
            <ConcursoCourse />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
