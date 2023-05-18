import { useEffect } from "react";
import Checkbox from "./Checkbox";

const CareerType = ({ state, setState }) => {
  const changeCareerType = (e) => {
    const checkboxes = document.getElementsByName("career-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "경력전체") {
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
    const checkboxes = document.getElementsByName("career-type");
    if (state.length === 0) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      checkboxes[0].checked = true;
    }
  }, [state]);

  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-medium">경력</p>
      <div className="flex items-center">
        <Checkbox value="경력전체" labelValue="전체" onChange={changeCareerType} defaultChecked />
        <Checkbox value="신입" labelValue="신입" onChange={changeCareerType} />
        <Checkbox value="경력" labelValue="경력" onChange={changeCareerType} />
      </div>
    </div>
  );
};

export default CareerType;
