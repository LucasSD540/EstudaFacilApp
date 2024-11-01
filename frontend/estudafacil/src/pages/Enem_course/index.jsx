import { useNavigate } from "react-router-dom";

const EnemCourse = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
    navigate("/");
  };

  return (
    <div>
      <h1>Autenticado!</h1>
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );
};

export default EnemCourse;
