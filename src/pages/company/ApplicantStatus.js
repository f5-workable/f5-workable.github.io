import { useEffect, useState } from "react";
import SearchedItems from "../../components/company/searchedItems";
import CompanyBoardAside from "../../components/company/companyBoardAside";
import api from "../../api";

const ApplicantStatus = () => {
  const [status, setStatus] = useState("전체");
  const [clickedBoardId, setClickedBoardId] = useState(null);
  const [countByStatus, setCountByStatus] = useState([]);
  const [boards, setBoards] = useState([]);
  const [applicants, setApplicants] = useState([]);

  const getBoardsByCompanyId = async (companyId) => {
    const { data } = await api.companyBoard.retrieveByCompanyId(companyId);
    setClickedBoardId(data[0].j_id);
    setBoards(data);
  };

  const getCountByBoardId = async (boardId) => {
    const { data } = await api.applicant.count(boardId);
    setCountByStatus(data);
  };

  const getApplicantByBoardIdAndState = async (boardId, state) => {
    const { data } = await api.applicant.retrieveByBoardIdAndState(boardId, state);
    setApplicants(data);
  };

  useEffect(() => {
    getBoardsByCompanyId(1);
  }, []);

  useEffect(() => {
    if (clickedBoardId !== null) {
      getCountByBoardId(clickedBoardId);
      getApplicantByBoardIdAndState(clickedBoardId, status);
    }
  }, [clickedBoardId, status]);

  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-neutral-800">지원자 현황</h2>
        </div>
        <div className="flex justify-between w-full h-full">
          <div className="w-1/3 mr-5">
            <aside className="w-full sticky top-24 my-16 border border-solid border-neutral-300 rounded overflow-hidden">
              <h3 className="text-xl font-semibold w-full py-3 pl-3 text-neutral-700">
                우리 기업 공고
              </h3>
              <CompanyBoardAside
                boards={boards}
                count={countByStatus[1]}
                state={clickedBoardId}
                setState={setClickedBoardId}
              />
            </aside>
          </div>
          <section className="w-full min-h-[80vh]">
            <div className="w-full md:w-3/4 mx-auto py-16">
              <ul className="flex justify-center">
                <li
                  className={
                    "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                    (status === "전체" ? " text-blue-500" : " text-black")
                  }
                  onClick={() => setStatus("전체")}
                >
                  <dl className="text-center">
                    <dt className="text-5xl">{countByStatus[0]?.count}</dt>
                    <dd className="text-lg mt-2">전체</dd>
                  </dl>
                </li>
                <li
                  className={
                    "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                    (status === "대기" ? " text-blue-500" : " text-black")
                  }
                  onClick={() => setStatus("대기")}
                >
                  <dl className="text-center">
                    <dt className="text-5xl">{countByStatus[1]?.count}</dt>
                    <dd className="text-lg mt-2">대기</dd>
                  </dl>
                </li>
                <li
                  className={
                    "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                    (status === "최종 합격" ? " text-blue-500" : " text-black")
                  }
                  onClick={() => setStatus("최종 합격")}
                >
                  <dl className="text-center">
                    <dt className="text-5xl">{countByStatus[2]?.count}</dt>
                    <dd className="text-lg mt-2">최종 합격</dd>
                  </dl>
                </li>
                <li
                  className={
                    "w-1/4 cursor-pointer hover:text-blue-500" +
                    (status === "불합격" ? " text-blue-500" : " text-black")
                  }
                  onClick={() => setStatus("불합격")}
                >
                  <dl className="text-center">
                    <dt className="text-5xl">{countByStatus[3]?.count}</dt>
                    <dd className="text-lg mt-2">불합격</dd>
                  </dl>
                </li>
              </ul>
            </div>
            <SearchedItems applicants={applicants} />
          </section>
        </div>
      </div>
    </main>
  );
};

export default ApplicantStatus;
