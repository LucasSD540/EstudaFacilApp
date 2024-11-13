import save from "../assets/images/save_icon.png";
import pdf from "../assets/images/pdf_icon.png";
import play from "../assets/images/play_icon.png";
import task from "../assets/images/task_icon.png";
import * as S from "./styles";

const MyConcursoCard = () => {
  return (
    <S.concursoCard>
      <div className="first-div">
        <div className="concursoInfo">
          <button className="concurso-btn">Concurso</button>
          <p className="companyName">Caixa Econômica Federal</p>
          <p className="concursoLevel">Técnico Bancário - Ensino médio</p>
        </div>
        <img src={save} alt="" />
      </div>
      <div className="second-div">
        <div className="course-statistics">
          <div className="course-statistics-item">
            <img src={play} alt="" />
            <p>%0</p>
          </div>
          <div className="course-statistics-item">
            <img src={task} alt="" />
            <p>%0</p>
          </div>
          <div className="course-statistics-item">
            <img src={pdf} alt="" />
            <p>%0</p>
          </div>
        </div>
        <div className="course-buttons">
          <button className="btn-1">Começar</button>
          <button className="btn-2">Saiba Mais</button>
        </div>
      </div>
    </S.concursoCard>
  );
};

export default MyConcursoCard;
