import { useEffect, useState } from "react";
import down from "../assets/images/down_icon.png";
import Axios from "axios";
import * as S from "./styles";

const Doubt = () => {
  const [isOpenIndex, setIsOpenIndex] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(
          "http://127.0.0.1:8000/api/doubt/list/"
        );
        setData(response.data);
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();
  }, []);

  const toggleDoubt = (index) => {
    setIsOpenIndex(isOpenIndex === index ? null : index);
  };

  return (
    <>
      {data.map((doubt, index) => (
        <S.doubtDiv
          key={doubt.id}
          isOpen={isOpenIndex === index}
          onClick={() => toggleDoubt(index)}
        >
          <div>
            <div className="flex-div">
              <h4 className="doubt-title">{doubt.title}</h4>
              <img className="down-icon" src={down} alt="Expandir" />
            </div>
            {isOpenIndex === index && (
              <p className="doubt-content">{doubt.text_content}</p>
            )}
          </div>
        </S.doubtDiv>
      ))}
    </>
  );
};

export default Doubt;
