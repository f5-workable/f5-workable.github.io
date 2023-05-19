import { useEffect, useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import ResumeSelectModal from "../../components/member/resumeSelectModal";
import KakaoMap from "../../components/member/KakaoMap";
import PieChart from "../../components/member/charts/PieChart";
import HorizontalBarChart from "../../components/member/charts/HorizontalBarChart";
import VerticalBarChart from "../../components/member/charts/VerticalBarChart";
import api from "../../api";

const CompanyDetail = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedResumeId, setSelectedResumeId] = useState("");

  const toggleIsBookmark = () => {
    setIsBookmark((prev) => !prev);
  };

  const getApplicantStatistics = async () => {
    const { data } = api.applicantStatistics.retrieve(1);
    console.log(data);
  };

  useEffect(() => {
    getApplicantStatistics();
  }, []);

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
                <h2 className="text-2xl font-semibold">업종</h2>
                <p className="mt-4 mb-4">기업 형태</p>
                <div className="flex">
                  <p className="">회사명</p>
                  <p className="before:content-['|'] before:mx-3 before:text-neutral-200 text-neutral-400">
                    주소
                  </p>
                </div>
                <p className="mt-4 mb-4">요구 학력</p>
              </section>
              <section>
                <p className="w-full border-neutral-300 my-12 break-words leading-6 whitespace-pre-wrap text-lg text-neutral-600">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe, repellat
                  architecto magni minima doloribus non rem id sapiente. Veniam sequi amet quos
                  repudiandae, repellat consequuntur minima sapiente ducimus esse numquam!
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero quis a
                  voluptate dolor nemo officiis facere eligendi sit? Omnis ipsum et porro dicta
                  modi quas deleniti iure autem rerum nam.
                  <br />
                  <br />
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos ducimus
                  id, voluptatem nemo laboriosam fugit quidem, debitis nulla veritatis,
                  suscipit quo rem libero perspiciatis quaerat numquam totam repudiandae!
                  Dignissimos, esse?
                </p>
              </section>
              <hr className="border-neutral-500" />
              <section className="mb-10">
                <div className="my-8">
                  <div className="mb-5">
                    <h3 className="text-lg font-semibold text-neutral-500 mb-1">마감일</h3>
                    <p className="text-lg font-bold">2023.06.20</p>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-neutral-500 mb-1">근무지역</h3>
                    <p className="text-lg font-bold">서울특별시 서초구 반포대로 20, 3,4층</p>
                  </div>
                </div>
                <KakaoMap />
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
                        <span className="font-semibold text-6xl text-blue-400">31</span>
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
                        datasets={[1, 14, 10, 3, 2, 1]}
                        title="연령"
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <VerticalBarChart
                        labels={["남자", "여자"]}
                        datasets={[12, 19]}
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
                        datasets={[7, 17, 5, 2]}
                        title="학력"
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <PieChart
                        labels={[
                          "간장애",
                          "뇌병변장애",
                          "뇌전증장애",
                          "시각장애",
                          "신장장애",
                          "심장장애",
                          "안면장애",
                          "언어장애",
                          "자폐성장애",
                          "장루요루장애",
                          "정신장애",
                          "지적장애",
                          "지체장애",
                          "호흡기장애",
                          "특수교육법상장애인",
                          "국가유공",
                        ]}
                        datasets={[0, 0, 0, 1, 2, 1, 5, 0, 4, 5, 0, 5, 2, 1, 1, 2]}
                        title="장애유형"
                        setLegend={true}
                        setDataLabel={false}
                      />
                    </div>
                    <div className="w-full h-full border border-neutral-300">
                      <VerticalBarChart
                        labels={["경증", "중증"]}
                        datasets={[21, 10]}
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
                  <p className="text-3xl font-semibold my-2">월 300만원</p>
                </div>
                <div className="w-full flex items-center justify-evenly flex-row xl:flex-col xl:items-center xl:mt-10">
                  <button
                    onClick={toggleIsBookmark}
                    className="w-[45%] xl:w-full h-14 xl:mb-3 border-2 border-solid border-blue-500 text-blue-500 rounded-[2rem] text-lg font-semibold flex justify-center items-center"
                  >
                    {isBookmark ? (
                      <>
                        <MdBookmark fontSize={26} className="align-middle mr-1" />
                        북마크 완료
                      </>
                    ) : (
                      <>
                        <MdBookmarkBorder fontSize={26} className="align-middle mr-1" />
                        북마크하기
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowModal(true)}
                    className="w-[45%] xl:w-full h-14 bg-blue-500 text-white rounded-[2rem] text-lg font-semibold"
                  >
                    지원하기
                  </button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>
      <div className="block xl:hidden w-full h-24"></div>
      <ResumeSelectModal
        state={{ showModal, selectedResumeId }}
        setState={{ setShowModal, setSelectedResumeId }}
      />
    </>
  );
};

export default CompanyDetail;
