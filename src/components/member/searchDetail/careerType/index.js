import Checkbox from "./Checkbox";

const CareerType = ({ setState }) => {
  const changeCareerType = (e) => {
    const checkboxes = document.getElementsByName("career-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "경력전체") {
      checkboxes[0].checked = targetChecked;
      checkboxes.forEach((checkbox, idx) => {
        if (idx !== 0) {
          checkbox.checked = false;
        }
      });
      targetChecked ? setState(["신입", "경력"]) : setState([]);
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
      <p className="block mb-2 text-lg font-semibold">경력</p>
      <div className="flex items-center">
        <Checkbox
          value="경력전체"
          labelValue="전체"
          onChange={changeCareerType}
          defaultChecked
        />
        <Checkbox value="신입" labelValue="신입" onChange={changeCareerType} />
        <Checkbox value="경력" labelValue="경력" onChange={changeCareerType} />
      </div>
    </div>
  );
};

export default CareerType;
