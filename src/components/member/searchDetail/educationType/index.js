import { useEffect } from "react";
import Checkbox from "./Checkbox";

const EducationType = ({ state, setState }) => {
  const changeEducationType = (e) => {
    const checkboxes = document.getElementsByName("education-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "학력전체") {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      checkboxes[0].checked = targetChecked;
      setState([]);
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

  useEffect(() => {
    const checkboxes = document.getElementsByName("education-type");
    if (state.length === 0) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      checkboxes[0].checked = true;
    }
  }, [state]);

  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">학력</p>
      <div className="flex items-center">
        <Checkbox
          value="학력전체"
          labelValue="전체"
          onChange={changeEducationType}
          defaultChecked
        />
        <Checkbox value="고졸" labelValue="고졸" onChange={changeEducationType} />
        <Checkbox value="대졸" labelValue="대졸" onChange={changeEducationType} />
        <Checkbox value="석사" labelValue="석사" onChange={changeEducationType} />
        <Checkbox value="초대졸" labelValue="초대졸" onChange={changeEducationType} />
      </div>
    </div>
  );
};

export default EducationType;
