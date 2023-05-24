import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { FaCrown } from "react-icons/fa";
// import Private from "../../components/member/resumeDetail/Private";
import { BsFileEarmarkPlus, BsChevronRight } from "react-icons/bs";
import api from "../../api";

const Resume = () => {
    const [resumeList, setResumeList] = useState([]);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedResumeIndex, setSelectedResumeIndex] = useState(null);

    const [resumeName, setResumeName] = useState("");
    // const [privateChecked, setPrivateChecked] = useState(false);

    const handleCreateClick = () => {
      if (resumeList.length < 3) {
        setResumeList([...resumeList, {}]);
        addMemberResume();
      }
    };

    const handleClick = () => {
      setModalOpen(true);
    };

    const handleResumeSelect = (index) => {
      setSelectedResumeIndex(index);
      setModalOpen(false);
    };

    const getResumeNameByStatus = async () => {
      const { data } = await api.resume.retrieve(1);
      console.log(data);
      setResumeName(data.title);
    };

    const addMemberResume = async () => {
      const { data } = await api.resume.add({
        age: null,
        place: null,
        // place: memberCareerPlace.length === 0 ? null : memberCareerPlace,
        // education: memberAcademic.length === 0 ? null : memberAcademic,
        job: null,
        payment_type: null,
        payment: null,
        ob_type: null,
        disease: null,
        career: null,
        pr: null,
        title: null,
      });
    };

    const getMemberResumeList = async () => {
      const memberId = sessionStorage.getItem("id");
      const { data } = await api.resume.retrieveByMember(memberId);
      setResumeList(data);
    };

    useEffect(() => {
      getResumeNameByStatus();
      getMemberResumeList();
    }, []);

    return (
      <div className="p-10 flex flex-col h-auto">
        <h1 className="text-center text-3xl font-bold py-10">이력서 목록</h1>
        <div className=" px-48 pb-2 flex justify-end">
          <label className="px-2 font-semibold hover:cursor-pointer my-auto">대표 이력서</label>
          <div className=" flex justify-end">
            {/* {privateChecked ? 
            (<button className="w-[3.438rem] h-[1.875rem] rounded-[1.25rem] bg-[#ccc] shadow-md" onClick={handleClick}>
              선택
            </button>) :
            (<button className="w-[3.438rem] h-[1.875rem] rounded-[1.25rem] bg-[#ccc] shadow-md cursor-not-allowed" disabled onClick={handleClick}>
              선택
            </button>)
            } */}

            <button className="w-[3.438rem] h-[1.875rem] rounded-[1.25rem] bg-yellow-400 shadow-md" onClick={handleClick}>
              선택
            </button>
 
            {modalOpen && (
              <div className="fixed inset-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-10">
                <div className="w-1/2 h-auto bg-white rounded-lg p-10 overflow-y-auto">
                  <h2 className="text-xl font-bold mb-5 text-center">대표 이력서 선택</h2>
                  {resumeList.map((_, index) => (
                    <div
                      className={`p-4 my-2 rounded-md cursor-pointer border border-solid hover:bg-gray-500 hover:text-white ${selectedResumeIndex === index ? 'bg-gray-500 text-white' : ''}`}
                      key={index}
                      onClick={() => handleResumeSelect(index)}
                    >
                      {/* {resume.title} */}
                      {resumeName}
                    </div>
                  ))}
                  <div className="flex justify-center">
                    <button className="mt-5 mr-2 bg-red-100 hover:bg-red-300 px-5 py-2 rounded-md" onClick={() => setSelectedResumeIndex(null)}>
                      선택 해제
                    </button>
                    <button className="mt-5 ml-2 bg-blue-100 hover:bg-blue-300 px-5 py-2 rounded-md" onClick={() => setModalOpen(false)}>
                      선택 완료
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="px-48 pb-5 flex justify-end text-xs">
          <p>대표 이력서를 선택하면 모든 기업에게 이력서가 공개됩니다</p>
        </div>

        {/* <div className="px-10 py-5 flex justify-end">
          <Private setState={setModalOpen} setState2={setPrivateChecked} />
        </div> */}

        <div className=" px-40 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {(resumeList.length > 0) && resumeList.map((_, index) => (
            <Link to={`/resume/${index}`} key={index}>
              <div className="bg-white rounded-lg shadow-md hover:shadow-2xl transition duration-300">
                <div className="p-6 h-[18rem]">
                  {selectedResumeIndex === index ? (<FaCrown className="absolute text-yellow-400 text-[3.25rem]" />) : null}
                  <img src="/images/interview.PNG" alt="interview" loading="lazy" />
                  <div className="mt-6 flex justify-between items-center">
                    <div className="truncate font-bold text-lg">{resumeName}</div>
                    <BsChevronRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          { resumeList.length < 3 ? (
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
              <button
                className="w-full h-[18rem] font-bold rounded-md flex items-center justify-center"
                onClick={handleCreateClick}
              >
                <BsFileEarmarkPlus className="pr-1 text-xl" />
                <span>추가하기</span>
              </button>
            </div>
          ) : (
            <div className="hidden">
              <button
                className="w-full h-10 bg-gray-300 text-gray-500 font-bold rounded-md flex items-center justify-center"
                disabled
              >
                <BsFileEarmarkPlus className="pr-1 text-xl" />
                <span>추가하기</span>
              </button>
            </div>
          )}
        </div>
      </div>
    );
};

export default Resume;