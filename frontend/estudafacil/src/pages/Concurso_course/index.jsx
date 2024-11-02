import { useNavigate } from "react-router-dom";

const ConcursoCourse = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("jwtToken");
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
