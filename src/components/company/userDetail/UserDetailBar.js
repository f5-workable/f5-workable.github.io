import { Link } from "react-router-dom";
import api from "../../../api";

const UserDetailBar = () => {
  const handleMemberWithdrawal = () => {
    const confirmed = window.confirm("정말로 기업탈퇴를 하시겠습니까?");
    if (confirmed) {
      console.log("기업탈퇴");
      deleteCompany();
      window.location.href = "/signup";
    }
  };

  const deleteCompany = async () => {
    const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
    await api.company.delete(companyId);
  };

  return (
    <div className="w-1/4 h-auto px-12 py-20">
      <div className="w-full h-56 bg-gray-300 font-bold"></div>
      <div className="flex flex-col py-4">
        <Link to="/userdetail">
          <button className=" bg-gray-100 border border-black w-full h-12 font-bold hover:bg-orange-400 hover:text-white">
            기업 정보
          </button>
        </Link>
        <Link to="/userdetailmodify">
          <button className=" bg-gray-100 border border-black w-full h-12 font-bold hover:bg-orange-400 hover:text-white">
            기업 정보 수정
          </button>
        </Link>
        <button
          className=" bg-red-200 border border-black w-full h-12 font-bold hover:bg-red-500 hover:text-white"
          onClick={handleMemberWithdrawal}
        >
          기업 탈퇴
        </button>
      </div>
    </div>
  );
};

export default UserDetailBar;
