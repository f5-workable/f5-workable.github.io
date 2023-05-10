import { TbBuilding, TbDisabled } from "react-icons/tb";
import { Link } from "react-router-dom";

const UserTypeSelectionBeforeLogin = () => {
  return (
    <div className="w-full h-[80vh] flex justify-center items-center relative">
      <div className="w-2/3 h-[22rem] flex">
        <div className="w-full h-full flex items-center relative border-2 border-solid border-neutral-200 border-t-4 border-t-orange-400">
          <TbDisabled
            fontSize={200}
            className="absolute bottom-5 text-neutral-400 opacity-20"
          />
          <div className="absolute top-8 left-10">
            <h2 className="text-3xl mb-3">개인 회원</h2>
            <p className="text-neutral-400">개인회원 로그인을 원하시면 선택해주세요.</p>
          </div>
          <Link to="/login/member">
            <button className="absolute right-5 bottom-5 px-8 py-4 bg-orange-400 rounded-3xl text-white text-lg">
              로그인
            </button>
          </Link>
        </div>
        <div className="w-full h-full flex items-center relative border-2 border-solid border-neutral-200 border-t-4 border-t-blue-400">
          <TbBuilding
            fontSize={200}
            className="absolute bottom-5 text-neutral-400 opacity-20"
          />
          <div className="absolute top-8 left-10">
            <h2 className="text-3xl mb-3">기업 회원</h2>
            <p className="text-neutral-400">기업회원 로그인을 원하시면 선택해주세요.</p>
          </div>
          <Link to="/login/company">
            <button className="absolute right-5 bottom-5 px-8 py-4 bg-blue-400 rounded-3xl text-white text-lg">
              로그인
            </button>
          </Link>
        </div>
      </div>
      <p className="absolute bottom-20 text-medium">
        계정이 아직 없으신가요?
        <Link to="/signup" className="text-blue-500 ml-2">
          <button>회원가입하기</button>
        </Link>
      </p>
    </div>
  );
};

export default UserTypeSelectionBeforeLogin;
