import { useState } from "react";
import { Link } from 'react-router-dom';
import Private from "../../components/member/resumeDetail/Private";
import { BsFileEarmarkPlus } from "react-icons/bs";

const Resume = () => {
    // const [value, setValue] = useState("이력서 공개");

    // const handleToggle = (event) => {
    //     console.log(event.target.checked);
    //     event.target.checked === false
    //         ? setValue("이력서 공개")
    //         : setValue("이력서 비공개")
    // }

    const [resumeList, setResumeList] = useState([{}]);

    const handleClick = () => {
      if (resumeList.length < 3) {
        setResumeList([...resumeList, {}]);
      }
    };

    return (
        <div className="p-10 flex flex-col">
        <h1 className="text-center text-3xl font-bold">이력서 목록</h1>
        <div className=" px-60 py-10 flex justify-end">
          <Private />
        </div>
        <div className="flex justify-center">
          {resumeList.map((_, index) => (
            <Link to={`/resume/${index}`} key={index}>
                <div className="mx-5 bg-gray-300 w-48 h-64 text-gray-400"></div>
            </Link>
          ))}
        </div>
        {resumeList.length < 3 ? (
            <div className="py-10 flex items-center justify-center">
                <button className="w-28 h-10 bg-gray-400 flex items-center justify-center font-bold" onClick={handleClick}>
                    <BsFileEarmarkPlus className=" pr-1 text-lg"/>
                    <span className="pl-1">추가하기</span>
                </button>
            </div>
        ) : (
            <div className="py-10 flex items-center justify-center">
                <button className="w-28 h-10 bg-gray-400 flex items-center justify-center font-bold opacity-50 cursor-not-allowed" disabled>
                    <BsFileEarmarkPlus className=" pr-1 text-lg"/>
                    <span className="pl-1">추가하기</span>
                </button>
            </div>
        )}
      </div>
    );
};

export default Resume;