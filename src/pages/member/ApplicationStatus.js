import { useEffect, useState } from "react";
import SearchedItems from "../../components/member/searchedItems";
import api from "../../api";

const ApplicationStatus = () => {
  const [status, setStatus] = useState("전체");
  const [boards, setBoards] = useState([]);
  const [countByStatus, setCountByStatus] = useState([]);

  const getCountByStatus = async () => {
    const { data } = await api.apply.count(1);
    setCountByStatus(data);
  };

  const getBoardsByState = async (state) => {
    const { data } = await api.apply.retrieveByState(1, state);
    setStatus(state);
    setBoards(data.list);
  };

  useEffect(() => {
    getCountByStatus();
    getBoardsByState("전체");
  }, []);
  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div>
          <h2 className="text-2xl font-semibold text-neutral-800">지원 현황</h2>
        </div>
        <section>
          <div className="w-4/5 mx-auto py-16">
            <ul className="flex justify-center">
              <li
                className={
                  "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                  (status === "전체" ? " text-blue-500" : " text-black")
                }
                onClick={() => getBoardsByState("전체")}
              >
                <dl className="text-center">
                  <dt className="text-5xl">{countByStatus[0]?.count}</dt>
                  <dd className="text-lg mt-2">전체</dd>
                </dl>
              </li>
              <li
                className={
                  "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                  (status === "지원 완료" ? " text-blue-500" : " text-black")
                }
                onClick={() => getBoardsByState("지원 완료")}
              >
                <dl className="text-center">
                  <dt className="text-5xl">{countByStatus[1]?.count}</dt>
                  <dd className="text-lg mt-2">지원 완료</dd>
                </dl>
              </li>
              <li
                className={
                  "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                  (status === "최종 합격" ? " text-blue-500" : " text-black")
                }
                onClick={() => getBoardsByState("최종 합격")}
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
          <SearchedItems boards={boards} />
        </section>
      </div>
    </main>
  );
};

export default ApplicationStatus;
