import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { useEffect, useState } from "react";

const LoginCom = ({ setIsLogined, toggleIsCompany }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const {
      data: { message },
    } = await api.company.login({ c_id:id, c_password:password });
    if (message === "로그인에 실패하였습니다.") {
      alert("아이디나 패스워드가 다릅니다.");
    } else {
      setIsLogined(true);
      toggleIsCompany();
      navigate("/");

      if (rememberCheck) {
        localStorage.setItem("id", id);
        localStorage.setItem("pw", password);
      } else {
        localStorage.setItem("id", "");
        localStorage.setItem("pw", "");
      }
    }
  };

  const getLoginData = () => {
    setId(localStorage.getItem("id"));
    setPassword(localStorage.getItem("pw"));
    setRememberCheck(localStorage.getItem("id") && localStorage.getItem("pw"));
  };

  useEffect(() => {
    getLoginData();
  }, []);

  return (
    <>
      <div className="absolute w-full h-full bg-black opacity-30 z-10"></div>
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/signupBackgroundVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <form onSubmit={handleLogin} className="relative my-16 z-10">
        <div className="bg-white relative w-3/5 mx-auto shadow-2xl flex content-center rounded-xl">
          <div className="w-1/2 p-10 border-r-4 border-neutral-100">
            <div className="text-center text-3xl font-bold">로그인</div>
            <div className="flex justify-center">
              <div>
                <div>
                  <label htmlFor="id" className=" block my-1.5 mt-8 font-bold text-xl ">
                    아이디
                  </label>
                  <input
                    id="id"
                    name="id"
                    className="rounded w-full p-2 my-1.5 bg-gray-200"
                    onChange={(e) => setId(e.target.value)}
                    autoFocus
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
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="my-5 w-4/5 flex justify-between mx-auto">
              <span className="text-sm">
                <input
                  type="checkbox"
                  id="rememberCheck"
                  onClick={() => setRememberCheck((prevCheck) => !prevCheck)}
                  checked={rememberCheck}
                />
                <label htmlFor="rememberCheck">로그인 정보 기억하기</label>
              </span>
              <span className="underline text-sm">Fotgot your password?</span>
            </div>
            <div className="flex justify-center">
              <button className=" bg-blue-200 hover:bg-blue-400 rounded-md py-2 px-5">
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
      </form>
    </>
  );
};

export default LoginCom;
