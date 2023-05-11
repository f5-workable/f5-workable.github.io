import RadioBtn from "./RadioBtn";

const CompanyType = () => {
  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">기업형태</p>
      <div className="flex items-center">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="개인" labelValue="개인" />
        <RadioBtn value="공사,공공" labelValue="공사,공공" />
        <RadioBtn value="대기업" labelValue="대기업" />
        <RadioBtn value="외국계" labelValue="외국계" />
        <RadioBtn value="중소" labelValue="중소" />
        <RadioBtn value="협회,단체" labelValue="협회,단체" />
      </div>
    </div>
  );
};

export default CompanyType;
