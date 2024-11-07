import { useEffect } from "react";
import { useLocation } from "react-router-dom";
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
import { useStudyLevel } from "./contexts/StudyLevelContext";

const Routing = () => {
  const { removeStudyLevel } = useStudyLevel();
  const location = useLocation();

  useEffect(() => {
    const urlsParaRemoverStudyLevel = [
      "/",
      "/sobre",
      "/login",
      "/enem",
      "/superior",
      "/concurso",
    ];

    if (urlsParaRemoverStudyLevel.includes(location.pathname)) {
      removeStudyLevel();
    }
  }, [location.pathname, removeStudyLevel]);

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
          <ProtectedRoute requiredStudyLevel="enem">
            <EnemCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/superior-course"
        element={
          <ProtectedRoute requiredStudyLevel="superior">
            <SuperiorCourse />
          </ProtectedRoute>
        }
      />
      <Route
        path="/concurso-course"
        element={
          <ProtectedRoute requiredStudyLevel="concurso">
            <ConcursoCourse />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
