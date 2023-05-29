import { useEffect, useState } from "react";
import api from "../../../api";
import { useNavigate } from "react-router-dom";

const UserModify = () => {
  const navigate = useNavigate();
  const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwCheck, setPwCheck] = useState("");
  const [isPwChecked, setIsPwChecked] = useState(null);

  const getMember = async () => {
    const { data } = await api.member.retrieve(memberId);
    setName(data.name);
    setPhone(data.phone);
    setEmail(data.email);
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
      await api.member.update(memberId, {
        name,
        email,
        phone,
        password,
        // profil: ,
      });
      navigate("/userdetail");
    } else {
      alert("비밀번호가 일치하지 않습니다.");
    }
  };

  useEffect(() => {
    getMember();
  }, []);

  return (
    <div className="mx-16 py-16 w-3/5 h-auto">
      <div className="block text-center text-3xl font-bold">회원정보 수정</div>

      <form onSubmit={updateMember}>
        <div className="block w-full">
          <div className=" h-32 mt-10">
            <label className=" text-xl font-bold px-10">이름</label>
            <hr className=" bg-black h-0.5"></hr>
            <input
              className=" w-80 text-lg font-bold italic bg-white my-5 mx-10"
              value={name}
              onChange={(e) => setName(e.target.value)}
              disabled
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" w-80 text-lg font-bold italic bg-white my-3 border-2 ml-10"
                />
              </div>
            </div>
            <div>
              <label className=" text-xl font-bold px-10">새로운 비밀번호 확인</label>
              <div className="flex flex-row items-center">
                <input
                  type="password"
                  id="pwCheck"
                  name="pwCheck"
                  className="w-80 h-8 p-2 border-2 ml-10  my-3"
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
            <hr></hr>
          </div>
          <div className=" h-32">
            <label className=" text-xl font-bold px-10">연락처</label>
            <hr className=" bg-black h-0.5"></hr>
            <input
              className=" w-80 text-lg font-bold italic bg-white my-5 mx-10 border-2"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <hr></hr>
          </div>
          <div className=" h-32">
            <label className=" text-xl font-bold px-10">이메일</label>
            <hr className=" bg-black h-0.5"></hr>
            <input
              className=" w-80 text-lg font-bold italic bg-white my-5 mx-10 border-2"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <hr></hr>
          </div>
        </div>

        <div className="flex justify-center">
          <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">
            수정완료
          </button>
        </div>
      </form>
    </div>
  );
};

export default UserModify;
