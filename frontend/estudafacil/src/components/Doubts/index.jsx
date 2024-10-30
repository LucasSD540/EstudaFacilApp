import { useState } from "react";
import down from "../assets/images/down_icon.png";
import * as S from "./styles";

const Doubt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseDoubt = () => {
    setIsOpen(!isOpen);
  };

  return (
    <S.mainDiv>
      <S.doubtDiv onClick={openCloseDoubt}>
        <div className="title">
          <h4 className="doubt-title">Dúvida</h4>
          <img className="down-icon" src={down} alt="Expandir" />
        </div>
      </S.doubtDiv>
      {isOpen ? (
        <>
          <div className="response">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              velit saepe cumque unde distinctio recusandae voluptatem placeat
              asperiores vitae veritatis.
            </p>
          </div>
        </>
      ) : (
        <></>
      )}
    </S.mainDiv>
  );
};

export default Doubt;
