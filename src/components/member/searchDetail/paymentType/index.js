import RadioBtn from "./RadioBtn";

const PaymentType = () => {
  return (
    <div>
      <p className="block my-2 text-lg font-semibold mt-8">임금형태</p>
      <div className="flex items-center">
        <RadioBtn value="전체" labelValue="전체" defaultChecked />
        <RadioBtn value="시급" labelValue="시급" />
        <RadioBtn value="일급" labelValue="일급" />
        <RadioBtn value="월급" labelValue="월급" />
        <RadioBtn value="연봉" labelValue="연봉" />
      </div>
    </div>
  );
};

export default PaymentType;
