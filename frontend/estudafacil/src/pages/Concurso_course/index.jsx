import { useNavigate } from "react-router-dom";
import { useStudyLevel } from "../../contexts/StudyLevelContext";

const ConcursoCourse = () => {
  const { removeStudyLevel } = useStudyLevel();
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    removeStudyLevel();
    navigate("/");
  };

  return (
    <div>
      <h1>Concurso autenticado!</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default ConcursoCourse;
