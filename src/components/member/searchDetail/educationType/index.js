import Checkbox from "./Checkbox";

const EducationType = ({ setState }) => {
  const changeEducationType = (e) => {
    const checkboxes = document.getElementsByName("education-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "학력전체") {
      checkboxes[0].checked = targetChecked;
      checkboxes.forEach((checkbox, idx) => {
        if (idx !== 0) {
          checkbox.checked = false;
        }
      });
      targetChecked
        ? setState(["고졸", "대졸", "석사", "초대졸"])
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
      <p className="block mb-2 text-lg font-semibold">학력</p>
      <div className="flex items-center">
        <Checkbox value="학력전체" labelValue="전체" onChange={changeEducationType} defaultChecked />
        <Checkbox value="고졸" labelValue="고졸" onChange={changeEducationType} />
        <Checkbox value="대졸" labelValue="대졸" onChange={changeEducationType} />
        <Checkbox value="석사" labelValue="석사" onChange={changeEducationType} />
        <Checkbox value="초대졸" labelValue="초대졸" onChange={changeEducationType} />
      </div>
    </div>
  );
};

export default EducationType;
