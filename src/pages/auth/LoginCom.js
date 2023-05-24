import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { useEffect, useState } from "react";

const LoginCom = ({ setIsLogined, toggleIsCompany }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);

  const handleLogin = async () => {
    setIsLogined(true);
    toggleIsCompany();
    navigate("/");
    await api.member.login({ id, pw });

    if (rememberCheck) {
      localStorage.setItem("id", id);
      localStorage.setItem("pw", pw);
    }
    else {
      localStorage.setItem("id", "");
      localStorage.setItem("pw", "");
    }
  };

  const getLoginData = () => {
    setId(localStorage.getItem("id"));
    setPw(localStorage.getItem("pw"));
    setRememberCheck(localStorage.getItem("id") !== "" && localStorage.getItem("pw") !== "");
  }

  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <>
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/signupBackgroundVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
    <div className="relative my-16 z-10">
      <div className="bg-white relative w-3/5 mx-auto shadow-2xl flex content-center">
        <div className="w-1/2 p-10">
          <div className="text-center text-3xl font-bold">로그인</div>
          <div className="flex justify-center">
            <div>
              <div>
                <label htmlFor="id" className=" block my-1.5 mt-8 font-bold text-xl ">
                  아이디
                </label>
                <input id="id" name="id" 
                  className="rounded w-full p-2 my-1.5 bg-gray-200"
                  value={id}
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="password" className="block my-1.5 font-bold text-xl">
                  비밀번호
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="rounded w-full p-2 my-1.5 bg-gray-200"
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                />
              </div>
            </div>
          </div>
          <div className="my-5 w-4/5 flex justify-between mx-auto">
            <span className="text-sm">
              <input type="checkbox" 
                onClick={() => setRememberCheck((prevCheck) => !prevCheck)} 
                checked={rememberCheck}
              />
              로그인 정보 기억하기
            </span>
            <span className="underline text-sm">Fotgot your password?</span>
          </div>
          <div className="flex justify-center">
            <button className=" bg-blue-200 hover:bg-blue-400 rounded-md py-2 px-5"  onClick={handleLogin}>
              로그인
            </button>
          </div>
          <hr className="my-5"></hr>
          <div className="w-4/5 mx-auto">
            <span className="">Don't have an account?</span>
            <span className="float-right text-blue-600">
              <Link to="/signup/company">Sign Up</Link>
            </span>
          </div>
        </div>
        <div className="w-1/2 p-10">
          <img src="/images/loginCompanyRight.PNG" alt="loginRight" loading="lazy" />
        </div>
      </div>
    </div>
    </>
  );
};

export default LoginCom;
