import { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const UserModify = () => {
  const navigate = useNavigate();
  const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");

  const [name, setName] = useState("");
  const [companyType, setCompanyType] = useState("");
  const [phone, setPhone] = useState("");
  const [registerNum, setRegisterNum] = useState("");
  const [address, setAddress] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [isPwChecked, setIsPwChecked] = useState(null);

  const getCompanyInfo = async () => {
    const {
      data: { c_name, rnum, address, c_type, phone },
    } = await api.company.retrieve(companyId);
    setName(c_name);
    setCompanyType(c_type);
    setPhone(phone);
    setRegisterNum(rnum);
    setAddress(address);
  };

  const checkedPassword = (e) => {
    if (password === e.target.value) {
      setIsPwChecked(true);
    } else {
      setIsPwChecked(false);
    }
    setPwCheck(e.target.value);
  };

  const updateMember = async (e) => {
    e.preventDefault();
    if (isPwChecked) {
      await api.company.update(companyId, {
        c_password: password,
        phone,
        rnum: registerNum,
        address,
      });
      navigate("/userdetail");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    getCompanyInfo();
  }, []);
  return (
    <div className="mx-16 py-16 w-3/5 h-auto">
      <div className="block text-center text-3xl font-bold">기업정보 수정</div>

      <div className="block w-full">
        <div className=" h-32 mt-10">
          <label className=" text-xl font-bold px-10">기업명</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" w-80 text-lg font-bold border-2 italic bg-white my-5 mx-10"
            defaultValue={name}
          />
          <hr></hr>
        </div>
        <div className="h-60">
          <label className=" text-xl font-bold px-10">비밀번호</label>
          <hr className=" bg-black h-0.5 mb-5"></hr>
          <div>
            <label className=" text-xl font-bold px-10">새로운 비밀번호 입력</label>
            <div className="flex flex-row items-center">
              <input
                type="password"
                className=" w-80 text-lg font-bold bg-white my-3 border-2 ml-10"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <div>
            <label className=" text-xl font-bold px-10">새로운 비밀번호 확인</label>
            <div className="flex flex-row items-center mt-3">
              <input
                type="password"
                id="pwCheck"
                name="pwCheck"
                className="w-80 h-8 p-2 border-2 ml-10"
                required
                value={pwCheck}
                onChange={checkedPassword}
              />
              {isPwChecked ? (
                <p className=" px-3 text-blue-600">일치</p>
              ) : (
                isPwChecked === false && <p className=" px-3 text-red-600">불일치</p>
              )}
            </div>
          </div>
          <hr className="mt-5"></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">기업형태</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" w-80 text-lg font-bold italic bg-white my-5 mx-10"
            defaultValue={companyType}
            disabled
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">연락처</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" w-80 text-lg font-bold italic border-2 bg-white my-5 mx-10"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">사업자등록번호</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" w-80 text-lg font-bold italic border-2 bg-white my-5 mx-10"
            value={registerNum}
            onChange={(e) => setRegisterNum(e.target.value)}
          />
          <hr></hr>
        </div>
        <div className=" h-32">
          <label className=" text-xl font-bold px-10">사업지주소</label>
          <hr className=" bg-black h-0.5"></hr>
          <input
            className=" w-80 text-lg font-bold italic border-2 bg-white my-5 mx-10"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <hr></hr>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={updateMember}
          className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28"
        >
          수정완료
        </button>
      </div>
    </div>
  );
};

export default UserModify;
