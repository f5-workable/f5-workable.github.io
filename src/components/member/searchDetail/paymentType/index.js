import Checkbox from "./Checkbox";

const PaymentType = ({ setState }) => {
  const changePaymentType = (e) => {
    const checkboxes = document.getElementsByName("payment-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "임금형태전체") {
      checkboxes[0].checked = targetChecked;
      checkboxes.forEach((checkbox, idx) => {
        if (idx !== 0) {
          checkbox.checked = false;
        }
      });
      targetChecked ? setState(["시급", "일급", "월급", "연봉"]) : setState([]);
    } else {
      const arr = [];
      checkboxes[0].checked = false;
      checkboxes.forEach((checkbox) => {
        if (checkbox.checked === true) {
          arr.push(checkbox.value);
        }
      });
      setState(arr);
    }
  };
  return (
    <div>
      <p className="block my-2 text-lg font-semibold mt-8">임금형태</p>
      <div className="flex items-center">
        <Checkbox value="임금형태전체" labelValue="전체" onChange={changePaymentType} defaultChecked />
        <Checkbox value="시급" labelValue="시급" onChange={changePaymentType} />
        <Checkbox value="일급" labelValue="일급" onChange={changePaymentType} />
        <Checkbox value="월급" labelValue="월급" onChange={changePaymentType} />
        <Checkbox value="연봉" labelValue="연봉" onChange={changePaymentType} />
      </div>
    </div>
  );
};

export default PaymentType;
