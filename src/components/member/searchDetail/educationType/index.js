import RadioBtn from "./RadioBtn";

const EducationType = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">학력</p>
      <div className="flex items-center">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="고졸" labelValue="고졸" />
        <RadioBtn value="대졸" labelValue="대졸" />
        <RadioBtn value="석사" labelValue="석사" />
        <RadioBtn value="초대졸" labelValue="초대졸" />
      </div>
    </div>
  );
};

export default EducationType;
