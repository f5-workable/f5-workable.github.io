import { useEffect } from "react";
import api from "../../api";
import { useState } from "react";
import Item from "../../components/company/slider/company/Item";

const CompanyBoards = () => {
  const [boards, setBoards] = useState([]);

  const getBoardsByCompanyId = async () => {
    const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
    const { data } = await api.companyBoard.retrieveByCompanyId(companyId);
    setBoards(data);
  };

  useEffect(() => {
    getBoardsByCompanyId();
  }, []);

  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto min-h-full mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800">우리 기업 공고</h2>
        </div>
        <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
          {boards?.map((board) => (
            <Item key={board.j_id} board={board} className="m-3" />
          ))}
        </div>
      </div>
    </main>
  );
};

export default CompanyBoards;
