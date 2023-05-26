import { useEffect, useState } from "react";
import KakaoMap from "../../components/KakaoMap";
import PieChart from "../../components/charts/PieChart";
import HorizontalBarChart from "../../components/charts/HorizontalBarChart";
import VerticalBarChart from "../../components/charts/VerticalBarChart";
import api from "../../api";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useCallback } from "react";

const CompanyDetail = () => {
  const { pathname } = useLocation();
  const { jobId } = useParams();
  const navigate = useNavigate();

  const [board, setBoard] = useState(
    /** @type {import("../../api/companyBoard").BoardInfo} */ ({})
  );
  const [statistics, setStatistics] = useState(
    /** @type {import("../../api/applicantStatistics").Statistics} */ ([])
  );

  const regex = /(^[가-힣]+시 [가-힣]+구)|(^[가-힣]+도 [가-힣]+[시|군|구])/g;
  const shortAddress = board.address?.match(regex)?.join("");

  const getCompanyInfo = useCallback(async () => {
    const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
    const { data } = await api.companyBoard.retrieve(jobId, companyId);
    setBoard(data);
  }, [jobId]);

  const getApplicantStatistics = useCallback(async () => {
    const { data } = await api.applicantStatistics.retrieve(jobId);
    setStatistics(data);
  }, [jobId]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    getCompanyInfo();
    getApplicantStatistics();
  }, [getCompanyInfo, getApplicantStatistics]);

  return (
    <>
      <main className="w-full h-full pb-10 ">
        <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
          <div className="w-full h-auto flex flex-col items-center xl:items-start xl:flex-row">
            <div className="w-full xl:w-[calc(100%-25rem)] mt-6">
              <section className="w-full h-[34rem] xl:h-[33vw] 2xl:h-[33rem]">
                <img
                  src="https://www.cvpartners.co.kr/Content/images/house/1/5.png"
                  alt="company img"
                  className="object-cover w-full h-full rounded-md"
                />
              </section>
              <section className="w-full h-full mt-14">
                <h2 className="text-2xl font-semibold">{board.job_type}</h2>
                <div className="flex mt-2">
                  <p className="text-neutral-500">{board.c_name}</p>
                  <p className="before:content-['|'] before:mx-3 before:text-neutral-200 text-neutral-500">
                    {shortAddress}
                  </p>
                </div>
                <p className="mt-4 text-neutral-600">기업 형태: {board.c_type}</p>
                <p className="mt-2 text-neutral-600">학력: {board.edu}</p>
              </section>
              <section className="w-full h-32 flex flex-col justify-evenly bg-indigo-50 mt-7 pl-10 rounded-md xl:hidden">
                <div className="text-xl font-medium text-neutral-500">임금</div>
                <div className="text-2xl font-semibold text-neutral-700">
                  {board.payment_type} {board.payment}원
                </div>
              </section>
              <section>
                <p className="w-full border-neutral-300 my-12 break-words leading-6 whitespace-pre-wrap text-lg text-neutral-600">
                  회사소개
                  <br />
                  {board.detail}
                </p>
              </section>
              <hr className="border-neutral-500" />
              <section className="mb-10">
                <div className="my-8">
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-neutral-500 mb-1">등록일</h3>
                    <p className="text-lg font-bold">{board.r_date}</p>
                  </div>
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-neutral-500 mb-1">마감일</h3>
                    <p className="text-lg font-bold">{board.d_date}</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-500 mb-1">근무지역</h3>
                    <p className="text-lg font-bold">{board.address}</p>
                  </div>
                </div>
                <KakaoMap address={board.address} companyName={board.c_name} />
              </section>
              <hr className="border-neutral-500" />
              <section className="mt-8 mb-10">
                <h3 className="text-xl font-semibold text-neutral-600 mb-3">
                  지원자 현황 통계
                </h3>
                <div className="w-full before:mt-[100%] border border-t-4 border-neutral-300">
                  <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 grid-rows-2">
                    <div className="w-full h-full flex flex-col justify-center items-center border border-neutral-300 bg-neutral-100">
                      <h4 className="text-neutral-500 font-semibold text-lg mb-2">
                        총 지원자 수
                      </h4>
                      <p>
                        <span className="font-semibold text-6xl text-blue-400">
                          {statistics.total_cnt}
                        </span>
                        <span className="text-2xl text-neutral-600 align-text-bottom">명</span>
                      </p>
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <HorizontalBarChart
                        labels={[
                          "25세 이하",
                          "26세~35세",
                          "36세~45세",
                          "46세~55세",
                          "56세~65세",
                          "66세 이상",
                        ]}
                        datasets={statistics["age"]?.map((applicant) => applicant.cnt)}
                        title="연령"
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <VerticalBarChart
                        labels={["남자", "여자"]}
                        datasets={statistics["gender"]
                          ?.map((applicant) => applicant.cnt)
                          .slice(0, -1)}
                        backgroundColor={[
                          "rgba(105, 175, 254, 0.7)",
                          "rgba(253, 127, 142, 0.7)",
                        ]}
                        hoverBackgroundColor={[
                          "rgba(105, 175, 254, 1)",
                          "rgba(253, 127, 142, 1)",
                        ]}
                        title="성별"
                        setDataLabel={true}
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <HorizontalBarChart
                        labels={["고졸", "대졸", "초대졸", "석사"]}
                        datasets={statistics["education"]
                          ?.map((applicant) => applicant.cnt)
                          .slice(0, -1)}
                        title="학력"
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <PieChart
                        labels={
                          statistics["ob_type"]
                            ?.map((applicant) => applicant.type)
                            .slice(0, -1) || []
                        }
                        datasets={
                          statistics["ob_type"]
                            ?.map((applicant) => applicant.type !== "total" && applicant.cnt)
                            .slice(0, -1) || []
                        }
                        title="장애유형"
                        setLegend={true}
                        setDataLabel={false}
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <VerticalBarChart
                        labels={["경증", "중증"]}
                        datasets={statistics["disease"]
                          ?.map((applicant) => applicant.cnt)
                          .slice(0, -1)}
                        backgroundColor={["rgba(88, 182, 74, 0.8)", "rgba(252, 177, 92, 0.8)"]}
                        hoverBackgroundColor={[
                          "rgba(88, 182, 74, 1)",
                          "rgba(252, 177, 92, 1)",
                        ]}
                        title="중증여부"
                        setDataLabel={true}
                      />
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <aside className="w-full bg-white xl:bg-transparent xl:border xl:border-solid xl:border-neutral-300 fixed bottom-0 xl:sticky xl:top-[5.5rem] xl:w-[23rem] h-auto xl:ml-6 z-10 shadow-md">
              <div className="w-full flex items-center xl:block h-24 xl:h-[18rem] rounded-md xl:p-8">
                <div className="w-full hidden xl:block">
                  <p className="text-xl font-bold text-neutral-500">임금</p>
                  <p className="text-3xl font-semibold my-2">
                    {board.payment_type} {board.payment?.toLocaleString()}원
                  </p>
                </div>
                <div className="w-full flex items-center justify-evenly flex-row xl:flex-col xl:items-center xl:mt-24">
                  <button
                    onClick={() =>
                      navigate("/status/applicant", { state: { clickedBoardId: board.j_id } })
                    }
                    className="w-[45%] xl:w-full h-14 bg-blue-500 text-white rounded-[2rem] text-lg font-semibold"
                  >
                    지원자 보기
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <div className="block xl:hidden w-full h-24"></div>
    </>
  );
};

export default CompanyDetail;
