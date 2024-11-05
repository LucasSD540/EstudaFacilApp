import { useNavigate } from "react-router-dom";

const SuperiorCourse = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("studyLevelAuthenticated");
    navigate("/");
  };

  return (
    <div>
      <h1>Superior autenticado!</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default SuperiorCourse;
