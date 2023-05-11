import RadioBtn from "./RadioBtn";

const CareerType = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">경력</p>
      <div className="flex items-center">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="신입" labelValue="신입" />
        <RadioBtn value="경력" labelValue="경력" />
      </div>
    </div>
  );
};

export default CareerType;
