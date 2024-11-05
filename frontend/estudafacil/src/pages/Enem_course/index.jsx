import { useNavigate } from "react-router-dom";

const EnemCourse = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    localStorage.removeItem("studyLevelAuthenticated");
    navigate("/");
  };

  return (
    <div>
      <h1>Enem autenticado!</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default EnemCourse;
