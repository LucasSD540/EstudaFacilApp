import Slider from "../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import enem_students from "../../components/assets/images/enem_students.png";
import EnemCard from "../../components/EnemCard";
import * as S from "./styles";

const EnemCourse = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    loop: true,
  };

  return (
    <S.enemDiv>
      <Slider settings={settings}>
        <SwiperSlide>
          <img src={enem_students} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={enem_students} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={enem_students} alt="Estudantes" />
        </SwiperSlide>
      </Slider>
      <div className="container">
        <div className="enem-title-div">
          <span>|</span>
          <p>MINHAS AULAS</p>
        </div>
        <S.cardDiv>
          <EnemCard />
          <EnemCard />
          <EnemCard />
          <EnemCard />
          <EnemCard />
          <EnemCard />
        </S.cardDiv>
      </div>
    </S.enemDiv>
  );
};

export default EnemCourse;
