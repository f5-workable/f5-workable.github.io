import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

const LoginPer = ({ setIsLogined }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const id = data.get("id");
    const password = data.get("pw");
    setIsLogined(true);
    navigate("/");
    await api.member.login({ id, password });
  };

  return (
    <>
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover"
          src="/videos/backgroundVideo.mp4"
          autoPlay
          loop
          muted
        ></video>
      </div>
      <div className="relative my-16 z-10">
        <div
          className=" bg-white relative w-3/5 mx-auto shadow-2xl flex content-center"
          name="container"
        >
          <form className="w-1/2 p-10" onSubmit={handleLogin}>
            <div className="text-center text-3xl font-bold">로그인</div>
            <div className="flex justify-center">
              <div>
                <div>
                  <label htmlFor="id" className=" block my-1.5 mt-8 font-bold text-xl ">
                    아이디
                  </label>
                  <input id="id" name="id" className="rounded w-full p-2 my-1.5 bg-gray-200" />
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
                  />
                </div>
              </div>
            </div>
            <div className="my-5 w-4/5 flex justify-between mx-auto">
              <span className="text-sm">
                <input type="checkbox"></input>
                로그인 정보 기억하기
              </span>
              <span className="underline text-sm">Fotgot your password?</span>
            </div>
            <div className="flex justify-center">
              <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5">
                로그인
              </button>
            </div>
            <hr className="my-5"></hr>
            <div className="w-4/5 px-5 mx-auto">
              <span>Don't have an account?</span>
              <span className="float-right text-red-600">
                <Link to="/signup/member">Sign Up</Link>
              </span>
            </div>
          </form>
          <div className="w-1/2 p-10">
            <img src="/images/loginMemberRight.PNG" alt="loginRight" loading="lazy" />
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPer;
