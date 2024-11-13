import Slider from "../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import enem1 from "../../components/assets/images/enem1.jpeg";
import enem2 from "../../components/assets/images/enem2.jpeg";
import enem3 from "../../components/assets/images/enem3.jpeg";
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
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    loop: true,
  };

  return (
    <S.enemDiv>
      <Slider settings={settings}>
        <SwiperSlide className="swiper-slide">
          <img src={enem1} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={enem2} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <img src={enem3} alt="Estudantes" />
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
