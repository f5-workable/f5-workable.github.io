import { useState } from "react";
import api from "../../api";
import Profile from "../../components/ProfileImg";
import Kind from "../../components/company/signup";
import { Link, useNavigate } from "react-router-dom";

const SignUpCom = () => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState(null);
  const [isDuplicateId, setIsDuplicateId] = useState(null);

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (isDuplicateId === false && passwordCheck) {
      const data = new FormData(e.target);
      const c_id = data.get("id");
      const c_password = data.get("pw");
      const c_name = data.get("companyName");
      const c_type = data.get("companyType");
      const phoneNumber1 = data.get("phoneNumber1");
      const phoneNumber2 = data.get("phoneNumber2");
      const phoneNumber3 = data.get("phoneNumber3");
      const registerNumber1 = data.get("registerNumber1");
      const registerNumber2 = data.get("registerNumber2");
      const registerNumber3 = data.get("registerNumber3");
      const address = data.get("address");
      const logo = data.get("chooseFile");
      await api.company.signUp({
        c_id,
        c_password,
        address,
        c_name,
        c_type,
        phone: phoneNumber1 + "-" + phoneNumber2 + "-" + phoneNumber3,
        rnum: registerNumber1 + "-" + registerNumber2 + "-" + registerNumber3,
      });
      navigate("/login/company");
    } else if (isDuplicateId === null) {
      alert("아이디 중복 체크를 먼저 해주세요.");
    } else if (isDuplicateId === true) {
      alert("이미 존재하는 아이디입니다.")
    } else {
      alert("비밀번호가 다릅니다.")
    }
  };

  const checkedPassword = (checkPw, pw) => {
    if (checkPw === pw) {
      setPasswordCheck(true);
    } else {
      setPasswordCheck(false);
    }
  };

  const checkDuplicateId = async () => {
    const { data } = await api.company.checkDuplicateId(id);
    if (data === true) {
      alert("이미 사용중인 아이디입니다.");
    } else {
      alert("사용 가능한 아이디입니다.");
      setIsDuplicateId(data);
    }
  };
  return (
    <div className=" w-4/5 mx-auto shadow-2xl flex content-center p-10 flex-col my-24">
      <div className="text-center text-3xl font-bold">회원가입</div>
      <form className="flex justify-center" onSubmit={handleSignUp}>
        <div className=" w-full">
          <div className="pt-12">
            <h1 className=" text-xl font-bold pb-5">아이디/비밀번호</h1>
            <hr class="border-2 border-black" />
            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="id" className=" px-5 font-bold text-base">
                  아이디
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row">
                  <input
                    id="id"
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    className=" w-64 h-8 p-2 border-2"
                    required
                  />
                  <button
                    type="button"
                    onClick={checkDuplicateId}
                    className="w-24 h-8 mx-1.5 px-3 text-base border-2"
                  >
                    중복확인
                  </button>
                </div>
                <p className="py-3">5~24자 이내로 입력하세요.</p>
              </div>
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="pw" className=" px-5 font-bold text-base">
                  비밀번호
                </label>
              </div>
              <div className="flex flex-col">
                <input
                  type="password"
                  id="pw"
                  name="pw"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className=" w-64 h-8 p-2 border-2"
                  required
                />
                <p className="py-3">8~24자 이내로 입력하세요.</p>
              </div>
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="pwCheck" className=" px-5 font-bold text-base">
                  비밀번호 확인
                </label>
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row items-center">
                  <input
                    type="password"
                    id="pwCheck"
                    name="pwCheck"
                    onChange={(e) => checkedPassword(e.target.value, password)}
                    className="w-64 h-8 p-2 border-2"
                    required
                  />
                  {passwordCheck ? (
                    <p className=" px-3 text-blue-600">일치</p>
                  ) : (
                    passwordCheck === false && <p className=" px-3 text-red-600">불일치</p>
                  )}
                </div>
                <p className="py-3">비밀번호를 다시 한번 입력해주세요.</p>
              </div>
            </div>
            <hr className="border border-gray-100"></hr>
          </div>

          <div className="pt-12">
            <h1 className=" text-xl font-bold pb-5">기업 상세 정보</h1>
            <hr class="border-2 border-black" />
            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="companyName" className=" px-5 font-bold text-base">
                  기업명
                </label>
              </div>
              <input
                id="companyName"
                name="companyName"
                className=" w-96 h-8 p-2 border-2"
                required
              />
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5">
              <div className=" w-52 flex items-center">
                <label className=" px-5 font-bold text-base">기업형태</label>
              </div>
              <Kind />
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="phoneNumber1" className=" px-5 font-bold text-base">
                  연락처
                </label>
              </div>
              <div className="flex flex-row justify-start">
                <input
                  type="tel"
                  minLength={3}
                  maxLength={3}
                  id="phoneNumber1"
                  name="phoneNumber1"
                  className=" w-20 h-8 p-2 border-2 flex justify-center text-center"
                  required
                />
                <p className=" text-xl mx-3">-</p>
                <input
                  type="tel"
                  minLength={3}
                  maxLength={4}
                  id="phoneNumber2"
                  name="phoneNumber2"
                  className=" w-20 h-8 p-2 border-2 flex justify-center text-center"
                  required
                />
                <p className=" text-xl mx-3">-</p>
                <input
                  type="tel"
                  minLength={4}
                  maxLength={4}
                  id="phoneNumber3"
                  name="phoneNumber3"
                  className=" w-20 h-8 p-2 border-2 flex justify-center text-center"
                  required
                />
              </div>
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="registerNumber1" className=" px-5 font-bold text-base">
                  사업자등록번호
                </label>
              </div>
              <div className="flex flex-row justify-start">
                <input
                  id="registerNumber1"
                  name="registerNumber1"
                  className=" w-16 h-8 p-2 border-2 flex justify-center text-center"
                  required
                />
                <p className=" text-xl mx-3">-</p>
                <input
                  id="registerNumber2"
                  name="registerNumber2"
                  className=" w-10 h-8 p-2 border-2 flex justify-center text-center"
                  required
                />
                <p className=" text-xl mx-3">-</p>
                <input
                  id="registerNumber3"
                  name="registerNumber3"
                  className=" w-24 h-8 p-2 border-2 flex justify-center text-center"
                  required
                />
              </div>
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="address" className=" px-5 font-bold text-base">
                  사업지주소
                </label>
              </div>
              <input
                id="address"
                name="address"
                className=" w-[45rem] h-8 p-2 border-2"
                required
              />
            </div>
            <hr className="border border-gray-100"></hr>

            <div className="flex flex-row my-1.5 ">
              <div className=" w-52 flex items-center">
                <label htmlFor="chooseFile" className=" px-5 font-bold text-base">
                  기업로고
                </label>
              </div>
              <Profile />
            </div>
            <hr className="border border-gray-100"></hr>
          </div>

          <div className="pt-12 flex justify-center my-5">
            <input type="checkbox" id="agree" className="text-sm" required></input>
            <label htmlFor="agree">개인정보 동의</label>
          </div>

          <div className="flex justify-center">
            <button className=" bg-blue-200 hover:bg-blue-400 rounded-md py-2 px-5 mr-2 w-28">
              회원가입
            </button>
          </div>
        </div>
      </form>

      <div className="flex justify-center ">
        <hr className=" w-full border border-gray-200 my-5"></hr>
      </div>
      <div className=" w-1/4 px-5 mx-auto">
        <span>Do you have an account?</span>
        <span className="float-right text-blue-600">
          <Link to="/login/company">Login</Link>
        </span>
      </div>
    </div>
  );
};

export default SignUpCom;
