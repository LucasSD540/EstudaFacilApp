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
import Profile from "./pages/Profile";
import EditProfile from "./pages/EditProfile";
import MyConcurso from "./pages/MyConcurso_course";

const Routing = () => {
  const { studyLevel } = useStudyLevel();
  const { removeStudyLevel } = useStudyLevel();
  const location = useLocation();

  useEffect(() => {
    const urlsToRemoveUrls = [
      "/",
      "/sobre",
      "/login",
      "/enem",
      "/superior",
      "/concurso",
    ];

    if (urlsToRemoveUrls.includes(location.pathname)) {
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
      <Route
        path="/concurso-course-courses"
        element={
          <ProtectedRoute requiredStudyLevel="concurso">
            <MyConcurso />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute requiredStudyLevel={studyLevel}>
            <Profile />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile/edit-profile"
        element={
          <ProtectedRoute requiredStudyLevel={studyLevel}>
            <EditProfile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default Routing;
