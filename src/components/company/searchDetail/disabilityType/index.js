import RadioBtn from "./RadioBtn";

const DisabilityType = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">장애유형</p>
      <div className="grid grid-cols-4">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="간장애" labelValue="간장애" />
        <RadioBtn value="뇌병변장애" labelValue="뇌병변장애" />
        <RadioBtn value="뇌전증장애" labelValue="뇌전증장애" />
        <RadioBtn value="시각장애" labelValue="시각장애" />
        <RadioBtn value="신장장애" labelValue="신장장애" />
        <RadioBtn value="심장장애" labelValue="심장장애" />
        <RadioBtn value="안면장애" labelValue="안면장애" />
        <RadioBtn value="언어장애" labelValue="언어장애" />
        <RadioBtn value="자폐성장애" labelValue="자폐성장애" />
        <RadioBtn value="장루요루장애" labelValue="장루요루장애" />
        <RadioBtn value="정신장애" labelValue="정신장애" />
        <RadioBtn value="지적장애" labelValue="지적장애" />
        <RadioBtn value="지체장애" labelValue="지체장애" />
        <RadioBtn value="호흡기장애" labelValue="호흡기장애" />
        <RadioBtn value="특수교육법상 장애인" labelValue="특수교육법상 장애인" />
        <RadioBtn value="국가유공" labelValue="국가유공" />
      </div>
    </div>
  );
};

export default DisabilityType;
