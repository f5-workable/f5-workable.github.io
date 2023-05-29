import { useEffect, useState } from "react";
import api from "../../../api";

const UserDetailList = () => {
  const [name, setName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [phone, setPhone] = useState("");
  const [registerNum, setRegisterNum] = useState("");
  const [address, setAddress] = useState("");

  const getCompanyInfo = async () => {
    const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
    const {
      data: { c_name, rnum, address, c_type, phone },
    } = await api.company.retrieve(companyId);
    setName(c_name);
    setCompanyType(c_type);
    setPhone(phone);
    setRegisterNum(rnum);
    setAddress(address);
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);

  return (
    <div className="mx-16 py-16 w-3/5 h-auto">
      <div className="block text-center text-3xl font-bold">기업정보</div>
      <div className="block w-full">
        <div className=" h-32 mt-10">
          <label className=" text-xl font-bold px-10">기업명</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" text-lg font-bold italic bg-white my-5 px-10"
            defaultValue={name}
            disabled
            readOnly
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">기업형태</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" text-lg font-bold italic bg-white my-5 px-10"
            defaultValue={companyType}
            disabled
            readOnly
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">연락처</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" text-lg font-bold italic bg-white my-5 px-10"
            defaultValue={phone}
            disabled
            readOnly
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">사업자등록번호</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" text-lg font-bold italic bg-white my-5 px-10"
            defaultValue={registerNum}
            disabled
            readOnly
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">사업지주소</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" text-lg font-bold italic bg-white my-5 px-10"
            defaultValue={address}
            disabled
            readOnly
          />
          <hr></hr>
        </div>
      </div>
    </div>
  );
};

export default UserDetailList;
