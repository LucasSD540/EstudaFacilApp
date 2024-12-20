import SuperiorCard from "../../components/SuperiorCard";
import Slider from "../../components/Slider/Slider";
import { SwiperSlide } from "swiper/react";
import superior1 from "../../components/assets/images/superior1.jpeg";
import superior2 from "../../components/assets/images/superior2.jpeg";
import superior3 from "../../components/assets/images/superior3.jpeg";
import * as S from "./styles";

const SuperiorCourse = () => {
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
    <S.supeiorDiv>
      <Slider settings={settings}>
        <SwiperSlide>
          <img src={superior1} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={superior2} alt="Estudantes" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={superior3} alt="Estudantes" />
        </SwiperSlide>
      </Slider>
      <div className="container">
        <S.buttonsDiv>
          <button>Todos</button>
          <button>2023/1</button>
          <button>2023/2</button>
          <button>2024/1</button>
          <button>2024/2</button>
          <button>Cursos Livres</button>
        </S.buttonsDiv>
        <S.cardDiv className="card-div">
          <SuperiorCard />
          <SuperiorCard />
          <SuperiorCard />
          <SuperiorCard />
          <SuperiorCard />
          <SuperiorCard />
        </S.cardDiv>
      </div>
    </S.supeiorDiv>
  );
};

export default SuperiorCourse;
