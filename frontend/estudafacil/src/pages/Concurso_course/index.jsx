import * as S from "./styles";
import Slider from "../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import concurso_1 from "../../components/assets/images/concurso_1.jpeg";
import concurso_2 from "../../components/assets/images/concurso_2.jpeg";
import concurso_3 from "../../components/assets/images/concurso_3.jpeg";
import ConcursoCard from "../../components/ConcursoCard";

const ConcursoCourse = () => {
  const settings = {
    spaceBetween: 50,
    slidesPerView: 1,
    navigation: true,
    pagination: {
      clickable: true,
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <S.concursoDiv>
      <Slider settings={settings}>
        <SwiperSlide>
          <img src={concurso_1} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={concurso_2} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={concurso_3} alt="Estudantes" />
        </SwiperSlide>
      </Slider>
      <div className="container">
        <div className="concurso-title-div">
          <span>|</span>
          <p>PRINCIPAIS CONCURSOS</p>
        </div>
        <S.cardDiv className="card-div">
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
