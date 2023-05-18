import { useEffect } from "react";
import Checkbox from "./Checkbox";

const CompanyType = ({ state, setState }) => {
  const changeCompanyType = (e) => {
    const checkboxes = document.getElementsByName("company-type");
    const targetValue = e.target.value;
    const targetChecked = e.target.checked;

    if (targetValue === "기업형태전체") {
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
    const checkboxes = document.getElementsByName("company-type");
    if (state.length === 0) {
      checkboxes.forEach((checkbox) => {
        checkbox.checked = false;
      });
      checkboxes[0].checked = true;
    }
  }, [state]);

  return (
    <div className="mt-8">
      <p className="block mb-2 text-lg font-medium">기업형태</p>
      <div className="flex items-center">
        <Checkbox
          value="기업형태전체"
          labelValue="전체"
          onChange={changeCompanyType}
          defaultChecked
        />
        <Checkbox value="개인" labelValue="개인" onChange={changeCompanyType} />
        <Checkbox value="공사,공공" labelValue="공사,공공" onChange={changeCompanyType} />
        <Checkbox value="대기업" labelValue="대기업" onChange={changeCompanyType} />
        <Checkbox value="외국계" labelValue="외국계" onChange={changeCompanyType} />
        <Checkbox value="중소" labelValue="중소" onChange={changeCompanyType} />
        <Checkbox value="협회,단체" labelValue="협회,단체" onChange={changeCompanyType} />
      </div>
    </div>
  );
};

export default CompanyType;
