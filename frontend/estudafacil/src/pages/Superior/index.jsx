import Card from "../../components/Card";

const Superior = () => {
  return (
    <div className="container">
      <Card planName="FREE" marginStyle="32px" />
      <Card planName="PREMIUM" backgroundColor="#1ABC9C" />
      <Card planName="PLUS" backgroundColor="#E67E22" marginStyle="32px" />
    </div>
  );
};

export default Superior;
