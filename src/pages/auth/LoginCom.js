import { Link, useNavigate } from "react-router-dom";
import api from "../../api";

const LoginCom = ({ setIsLogined, toggleIsCompany }) => {
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const id = data.get("id");
    const password = data.get("pw");
    const {
      data: { message },
    } = await api.company.login({ id, password });
    if (message === "로그인에 실패하였습니다.") {
      alert("아이디나 패스워드가 다릅니다.");
    } else {
      setIsLogined(true);
      toggleIsCompany();
      navigate("/");
    }
  };
  return (
    <div className=" my-24">
      <div className=" w-3/5 mx-auto shadow-2xl flex content-center">
        <form className="w-1/2 p-10" onSubmit={handleLogin}>
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
        </form>
        <div className="w-1/2 p-10">
          <img src="/images/loginCompanyRight.PNG" alt="loginRight" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default LoginCom;
