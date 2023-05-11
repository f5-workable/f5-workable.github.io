import RadioBtn from "./RadioBtn";

const SeverityType = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">중증여부</p>
      <div className="flex items-center">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="경증" labelValue="경증" />
        <RadioBtn value="중증" labelValue="중증" />
      </div>
    </div>
  );
};

export default SeverityType;
