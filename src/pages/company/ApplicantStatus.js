import { useState } from "react";
import SearchedItems from "../../components/company/searchedItems";
import CompanyBoardAside from "../../components/company/companyBoardAside";

const ApplicantStatus = () => {
  const [status, setStatus] = useState("전체");
  const [isCompanyBoardClicked, setIsCompanyBoardClicked] = useState("");
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
                state={isCompanyBoardClicked}
                setState={setIsCompanyBoardClicked}
              />
            </aside>
          </div>
          <section>
            <div className="w-3/4 mx-auto my-16">
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
                    (status === "대기" ? " text-blue-500" : " text-black")
                  }
                  onClick={() => setStatus("대기")}
                >
                  <dl className="text-center">
                    <dt className="text-5xl">0</dt>
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
      </div>
    </main>
  );
};

export default ApplicantStatus;
