import { useState } from "react";
import { Link } from 'react-router-dom';
import Private from "../../components/member/resumeDetail/Private";
import { BsFileEarmarkPlus, BsChevronRight } from "react-icons/bs";

const Resume = () => {
    const [resumeList, setResumeList] = useState([{}]);

    const handleClick = () => {
      if (resumeList.length < 3) {
        setResumeList([...resumeList, {}]);
      }
    };

    return (
      <div className="p-10 flex flex-col bg-gray-50 min-h-screen">
        <h1 className="text-center text-3xl font-bold mb-10">이력서 목록</h1>
        <div className="px-10 py-5 flex justify-end">
          <Private />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resumeList.map((_, index) => (
            <Link to={`/resume/${index}`} key={index}>
              <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300">
                <div className="p-6">
                  {/* <div className="bg-gray-200 h-40"></div> */}
                  <img src="/images/interview.PNG" alt="interview" loading="lazy" />
                  <div className="mt-6 flex justify-between items-center">
                    <div className="truncate font-bold text-lg">이력서 제목</div>
                    <BsChevronRight />
                  </div>
                </div>
              </div>
            </Link>
          ))}
          {resumeList.length < 3 ? (
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex items-center justify-center">
              <button
                className="w-full h-full font-bold rounded-md flex items-center justify-center"
                onClick={handleClick}
              >
                <BsFileEarmarkPlus className="pr-1 text-xl" />
                <span>추가하기</span>
              </button>
            </div>
          ) : (
            <div className="bg-gray-300 rounded-lg shadow-lg flex items-center justify-center opacity-50 cursor-not-allowed hidden">
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