import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children, requiredStudyLevel }) => {
  const token = localStorage.getItem("jwtToken");
  const studyLevel = localStorage.getItem("studyLevel");

  if (!token || studyLevel !== requiredStudyLevel) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
