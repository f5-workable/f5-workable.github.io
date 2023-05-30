import { Link, useNavigate } from "react-router-dom";
import api from "../../../api";
import DeleteConfirmModal from "../../member/DeleteConfirmModal";
import { useState } from "react";

const UserDetailBar = ({ setIsLogined, toggleIsCompany }) => {
  const navigate = useNavigate();
  const [showConfirmModal, setShowConfirmModal] = useState(false);

  const handleMemberWithdrawal = () => {
    console.log("기업탈퇴");
    deleteCompany();
    localStorage.removeItem("companyId");
    sessionStorage.removeItem("companyId");
    toggleIsCompany();
    setIsLogined(false);
    navigate("/signup");
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
          onClick={() => setShowConfirmModal(true)}
        >
          기업 탈퇴
        </button>
      </div>
      <DeleteConfirmModal
        state={showConfirmModal}
        setState={setShowConfirmModal}
        title="정말 회원 탈퇴하시겠습니까?"
        subtitle="회원 탈퇴 시, 계정을 복구할 수 없습니다."
        btnText="회원탈퇴"
        btnFunc={handleMemberWithdrawal}
      />
    </div>
  );
};

export default UserDetailBar;
