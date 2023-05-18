import { useEffect } from "react";
import Checkbox from "./Checkbox";

const SeverityType = ({ state, setState }) => {
  const changeSeverityType = (e) => {
    const checkboxes = document.getElementsByName("severity-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "중증여부전체") {
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
    const checkboxes = document.getElementsByName("severity-type");
    if (state.length === 0) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      checkboxes[0].checked = true;
    }
  }, [state]);

  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-medium">중증여부</p>
      <div className="flex items-center">
        <Checkbox
          value="중증여부전체"
          labelValue="전체"
          onChange={changeSeverityType}
          defaultChecked
        />
        <Checkbox value="경증" labelValue="경증" onChange={changeSeverityType} />
        <Checkbox value="중증" labelValue="중증" onChange={changeSeverityType} />
      </div>
    </div>
  );
};

export default SeverityType;
