import { useState } from "react";
import down from "../assets/images/down_icon.png";
import * as S from "./styles";

const Doubt = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openCloseDoubt = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <S.doubtDiv isOpen={isOpen} onClick={openCloseDoubt}>
        <div>
          <div className="flex-div">
            <h4 className="doubt-title">Dúvida</h4>
            <img className="down-icon" src={down} alt="Expandir" />
          </div>
          {isOpen ? (
            <p className="doubt-content">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto
              velit saepe cumque unde distinctio recusandae voluptatem placeat
              asperiores vitae veritatis.
            </p>
          ) : (
            <></>
          )}
        </div>
      </S.doubtDiv>
    </>
  );
};

export default Doubt;
