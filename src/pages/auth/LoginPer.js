import { Link, useNavigate } from "react-router-dom";
import api from "../../api";
import { useEffect, useState } from "react";

const LoginPer = ({ setIsLogined }) => {
  const navigate = useNavigate();
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");
  const [rememberCheck, setRememberCheck] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    const { data } = await api.member.login({ id, password });
    if (data.message === "로그인에 실패하였습니다.") {
      alert("아이디나 패스워드가 다릅니다.");
    } else {
      setIsLogined(true);
      navigate("/");

      if (rememberCheck) {
        localStorage.setItem("id", id);
        localStorage.setItem("pw", password);
        localStorage.setItem("memberId", data.memberSequenceNumber);
      } else {
        sessionStorage.setItem("id", "");
        sessionStorage.setItem("pw", "");
        sessionStorage.setItem("memberId", data.memberSequenceNumber);
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
          src="/videos/loginBackgroundVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <form onSubmit={handleLogin} className="relative my-16 z-10">
        <div
          className="bg-white relative w-3/5 mx-auto shadow-2xl flex content-center rounded-xl"
          name="container"
        >
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
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                    autoFocus
                  />
                </div>
                <div>
                  <label htmlFor="pw" className="block my-1.5 font-bold text-xl">
                    비밀번호
                  </label>
                  <input
                    type="password"
                    id="pw"
                    name="pw"
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
                <label htmlFor="rememberCheck" className="ml-1">로그인 정보 기억하기</label>
              </span>
              <span className="underline text-sm">Fotgot your password?</span>
            </div>
            <div className="flex justify-center">
              <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5">
                로그인
              </button>
            </div>
            <hr className="my-5"></hr>
            <div className="w-4/5 mx-auto">
              <span>Don't have an account?</span>
              <span className="float-right text-red-600">
                <Link to="/signup/member">Sign Up</Link>
              </span>
            </div>
          </div>
          <div className="w-1/2 p-10 flex items-center">
            <img src="/images/loginMemberRight.PNG" alt="loginRight" loading="lazy" />
          </div>
        </div>
      </form>
    </>
  );
};

export default LoginPer;
