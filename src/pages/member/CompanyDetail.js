import { useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import ResumeSelectModal from "../../components/member/resumeSelectModal";
import KakaoMap from "../../components/member/KakaoMap";

const CompanyDetail = () => {
  const [isBookmark, setIsBookmark] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [selectedResumeId, setSelectedResumeId] = useState("");

  const toggleIsBookmark = () => {
    setIsBookmark((prev) => !prev);
  };

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
                    <p className="text-lg font-semibold text-neutral-500 mb-1">마감일</p>
                    <p className="text-lg font-bold">2023.06.20</p>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-neutral-500 mb-1">근무지역</p>
                    <p className="text-lg font-bold">서울특별시 서초구 반포대로 20, 3,4층</p>
                  </div>
                </div>
                <KakaoMap />
              </section>
            </div>
            <aside className="w-full bg-white xl:bg-transparent xl:border xl:border-solid xl:border-neutral-300 fixed bottom-0 xl:sticky xl:top-[5.5rem] xl:w-[23rem] h-auto xl:ml-6 z-10">
              <div className="w-full flex items-center xl:block xl:w-11/12 h-24 xl:h-[18rem] rounded-md xl:p-8">
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
