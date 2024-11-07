import * as S from "./styles";
import Slider from "../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import students from "../../components/assets/images/students.png";
import ConcursoCard from "../../components/ConcursoCard";

const ConcursoCourse = () => {
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
    <S.concursoDiv>
      <Slider settings={settings}>
        <SwiperSlide>
          <img src={students} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={students} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={students} alt="Estudantes" />
        </SwiperSlide>
      </Slider>
      <div className="container">
        <div className="concurso-title-div">
          <span>|</span>
          <p>PRINCIPAIS CONCURSOS</p>
        </div>
        <S.cardDiv>
          <ConcursoCard />
          <ConcursoCard />
          <ConcursoCard />
          <ConcursoCard />
          <ConcursoCard />
          <ConcursoCard />
        </S.cardDiv>
      </div>
    </S.concursoDiv>
  );
};

export default ConcursoCourse;
