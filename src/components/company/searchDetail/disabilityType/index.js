import { useEffect } from "react";
import Checkbox from "./Checkbox";

const DisabilityType = ({ state, setState }) => {
  const changeDisabilityType = (e) => {
    const checkboxes = document.getElementsByName("disability-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "장애유형전체") {
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
    const checkboxes = document.getElementsByName("disability-type");
    if (state.length === 0) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      checkboxes[0].checked = true;
    }
  }, [state]);

  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-semibold">장애유형</p>
      <div className="grid grid-cols-4">
        <Checkbox
          value="장애유형전체"
          labelValue="전체"
          onChange={changeDisabilityType}
          defaultChecked
        />
        <Checkbox value="간장애" labelValue="간장애" onChange={changeDisabilityType} />
        <Checkbox value="뇌병변장애" labelValue="뇌병변장애" onChange={changeDisabilityType} />
        <Checkbox value="뇌전증장애" labelValue="뇌전증장애" onChange={changeDisabilityType} />
        <Checkbox value="시각장애" labelValue="시각장애" onChange={changeDisabilityType} />
        <Checkbox value="신장장애" labelValue="신장장애" onChange={changeDisabilityType} />
        <Checkbox value="심장장애" labelValue="심장장애" onChange={changeDisabilityType} />
        <Checkbox value="안면장애" labelValue="안면장애" onChange={changeDisabilityType} />
        <Checkbox value="언어장애" labelValue="언어장애" onChange={changeDisabilityType} />
        <Checkbox value="자폐성장애" labelValue="자폐성장애" onChange={changeDisabilityType} />
        <Checkbox
          value="장루요루장애"
          labelValue="장루요루장애"
          onChange={changeDisabilityType}
        />
        <Checkbox value="정신장애" labelValue="정신장애" onChange={changeDisabilityType} />
        <Checkbox value="지적장애" labelValue="지적장애" onChange={changeDisabilityType} />
        <Checkbox value="지체장애" labelValue="지체장애" onChange={changeDisabilityType} />
        <Checkbox value="호흡기장애" labelValue="호흡기장애" onChange={changeDisabilityType} />
        <Checkbox
          value="특수교육법상 장애인"
          labelValue="특수교육법상 장애인"
          onChange={changeDisabilityType}
        />
        <Checkbox value="국가유공" labelValue="국가유공" onChange={changeDisabilityType} />
      </div>
    </div>
  );
};

export default DisabilityType;
