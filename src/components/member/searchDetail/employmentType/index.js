import Checkbox from "./Checkbox";

const EmploymentType = ({setState}) => {
  const changeEmploymentType = (e) => {
    const checkboxes = document.getElementsByName("employment-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "고용형태전체") {
      checkboxes[0].checked = targetChecked;
      checkboxes.forEach((checkbox, idx) => {
        if (idx !== 0) {
          checkbox.checked = false;
        }
      });
      targetChecked
        ? setState(["계약직", "상용직", "시간제"])
        : setState([]);
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
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">고용형태</p>
      <div className="flex items-center">
        <Checkbox value="고용형태전체" labelValue="전체" onChange={changeEmploymentType} defaultChecked />
        <Checkbox value="계약직" labelValue="계약직" onChange={changeEmploymentType} />
        <Checkbox value="상용직" labelValue="상용직" onChange={changeEmploymentType} />
        <Checkbox value="시간제" labelValue="시간제" onChange={changeEmploymentType} />
      </div>
    </div>
  );
};

export default EmploymentType;
