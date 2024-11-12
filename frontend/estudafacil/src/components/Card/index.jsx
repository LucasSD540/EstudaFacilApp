import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import correct from "../../components/assets/images/correct.png";
import wrong from "../../components/assets/images/wrong.png";
import * as S from "./styles";

const Card = ({
  planName,
  backgroundColor,
  marginStyle,
  shadowColor,
  studyLevelLink,
  studyLevel,
  plan,
}) => {
  const [plans, setPlans] = useState({ free: [], premium: [], plus: [] });

  useEffect(() => {
    console.log("Current studyLevel:", studyLevel);
    setPlans({ free: [], premium: [], plus: [] });

    const getPlans = async () => {
      try {
        const response = await axios.get(
          `http://127.0.0.1:8000/api/plans/list/?study_level=${studyLevel}`,
          {
            params: { study_level: studyLevel },
          }
        );

        console.log(response);

        const plansData = { free: [], premium: [], plus: [] };

        response.data.forEach((plan) => {
          const planData = {
            ...plan,
            features: plan.features_details,
          };

          if (plan.plan_name.toLowerCase() === "free") {
            plansData.free.push(planData);
          } else if (plan.plan_name.toLowerCase() === "premium") {
            plansData.premium.push(planData);
          } else if (plan.plan_name.toLowerCase() === "plus") {
            plansData.plus.push(planData);
          }
        });

        setPlans(plansData);
      } catch (error) {
        console.error("Erro ao buscar planos:", error);
      }
    };

    getPlans();
  }, [studyLevel]);

  const renderFeatures = (features) =>
    features
      .sort((a, b) => b.is_include - a.is_include)
      .map((feature, index) => (
        <li className="list-item" key={index}>
          <img src={feature.is_include ? correct : wrong} alt="" />
          <p>{feature.text_content}</p>
        </li>
      ));

  const getStudyLevel = () => {
    localStorage.setItem("studyLevel", studyLevel);
  };

  return (
    <S.planDiv
      backgroundColor={backgroundColor}
      marginStyle={marginStyle}
      shadowColor={shadowColor}
      plan={plan}
    >
      <div className="plan-name first">
        <p>{planName}</p>
      </div>
      <ul className="list free">
        {plans.free.map((plan, index) => (
          <div key={index}>
            <p>Preço: {plan.plan_price}</p>
            {renderFeatures(plan.features)}
          </div>
        ))}
      </ul>
      <ul className="list premium">
        {plans.premium.map((plan, index) => (
          <div key={index}>
            <p>Preço: {plan.plan_price}</p>
            {renderFeatures(plan.features)}
          </div>
        ))}
      </ul>
      <ul className="list plus">
        {plans.plus.map((plan, index) => (
          <div key={index}>
            <p>Preço: {plan.plan_price}</p>
            {renderFeatures(plan.features)}
          </div>
        ))}
      </ul>
      <div className="plan-name second">
        <Link to={studyLevelLink} onClick={() => getStudyLevel()}>
          INSCREVA-SE
        </Link>
      </div>
    </S.planDiv>
  );
};

export default Card;
