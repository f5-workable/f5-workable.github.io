import RadioBtn from "./RadioBtn";

const EmploymentType = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">고용형태</p>
      <div className="flex items-center">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="계약직" labelValue="계약직" />
        <RadioBtn value="상용직" labelValue="상용직" />
        <RadioBtn value="시간제" labelValue="시간제" />
      </div>
    </div>
  );
};

export default EmploymentType;
