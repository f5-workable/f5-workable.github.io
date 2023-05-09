import { useState } from "react";
import SearchedItems from "../../components/member/searchedItems";

const ApplicationStatus = () => {
  const [status, setStatus] = useState("전체");
  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div>
          <h2 className="text-3xl font-semibold text-neutral-800">지원 현황</h2>
        </div>
        <section>
          <div className="w-4/5 mx-auto my-16">
            <ul className="flex justify-center">
              <li
                className={
                  "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                  (status === "전체" ? " text-blue-500" : " text-black")
                }
                onClick={() => setStatus("전체")}
              >
                <dl className="text-center">
                  <dt className="text-5xl">0</dt>
                  <dd className="text-lg mt-2">전체</dd>
                </dl>
              </li>
              <li
                className={
                  "w-1/4 border-r border-solid border-gray-300 cursor-pointer hover:text-blue-500" +
                  (status === "지원 완료" ? " text-blue-500" : " text-black")
                }
                onClick={() => setStatus("지원 완료")}
              >
                <dl className="text-center">
                  <dt className="text-5xl">0</dt>
                  <dd className="text-lg mt-2">지원 완료</dd>
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
                  <dt className="text-5xl">0</dt>
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
                  <dt className="text-5xl">0</dt>
                  <dd className="text-lg mt-2">불합격</dd>
                </dl>
              </li>
            </ul>
          </div>
          <SearchedItems />
        </section>
      </div>
    </main>
  );
};

export default ApplicationStatus;
