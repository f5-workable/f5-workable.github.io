import { useState } from "react";
import Disorder from "../../components/member/resumeDetail/Disorder";
import Location from "../../components/member/searchDetail/location";

const ResumeWrite = () => {
    const [gender, setGender] = useState("남자");
    const [career, setCareer] = useState("신입");
    const [severe, setSevere] = useState("중증");

    return (
        <div className=" p-12 h-auto">
            <div className=" pb-12 block text-center text-3xl font-bold">이력서</div>
            <div className="flex justify-center">
                <div>
                    <input className="w-full h-auto text-2xl bg-gray-200 placeholder:text-gray-400 placeholder:font-bold" placeholder="이력서 제목을 써주세요" />

                    <div className="py-10 flex flex-raw">
                        <div className="bg-gray-300 w-48 h-64"></div>
                        <div className="px-5 flex flex-col justify-center">
                            <input className="pb-10 text-3xl font-bold bg-white" value={"이예림"} disabled />
                            <div className="flex flex-raw">
                                <label className="pr-5 text-xl font-bold">연락처</label>
                                <input className=" text-xl font-bold italic bg-white" type="phone" value={"010-3047-5988"} disabled />
                            </div>
                            <div className="flex flex-raw">
                                <label className="pr-5 text-xl font-bold">이메일</label>
                                <input className="text-xl font-bold italic bg-white" type="email" value={"yerim1215jg@naver.com"} disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="px-40 py-10">
                    <label className="px-10 text-xl font-bold">개인정보</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">성별</label>
                    
                        {gender === "남자" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setGender("남자")}>
                            남자
                        </button>
                        <button className="h-8 w-20 bg-gray-300 text-white font-bold text-md"
                            onClick={() => setGender("여자")}>
                            여자
                        </button>
                        </>
                        )
                         : (
                        <>
                        <button className="h-8 w-20 bg-gray-300 text-white font-bold text-md"
                            onClick={() => setGender("남자")}>
                            남자
                        </button>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setGender("여자")}>
                            여자
                        </button>
                        </>)
                        }
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">나이</label>
                        <input type="number" className=" w-14 bg-gray-300 text-center" min={1} />
                        세
                    </div>
                </div>

                <div className="px-40 py-10">
                    <label className="px-10 text-xl font-bold">경력</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">경력구분</label>
                        
                        {career === "신입" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setCareer("신입")}>
                            신입
                        </button>
                        <button className="h-8 w-20 bg-gray-300 text-white font-bold text-md"
                            onClick={() => setCareer("경력")}>
                            경력
                        </button>
                        </>
                        )
                         : (
                        <>
                        <button className="h-8 w-20 bg-gray-300 text-white font-bold text-md"
                            onClick={() => setCareer("신입")}>
                            신입
                        </button>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setCareer("경력")}>
                            경력
                        </button>
                        </>)
                        }
                    </div>
                    
                    <div className="flex flex-col px-32 pt-3">
                        <input type="text" className=" w-full h-24 bg-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:p-3" placeholder="경력자만 작성"/>
                    </div>
                </div>

                <div className=" px-40 py-10">
                    <label className="px-10 text-xl font-bold">희망근무조건</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start w-full">
                        <label className="w-32 py-2 text-center font-bold text-md">희망근무지</label>
                        <Location />
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">희망업직종</label>
                        <input type="text" className=" w-1/2 bg-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:p-3" placeholder="희망하는 업직종을 작성해주세요"/>
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">희망임금</label>
                        <input type="number" className=" w-1/6 bg-gray-300 text-center" min={1000}/>원
                    </div>
                </div>

                <div className="px-40 py-10">
                    <label className="px-10 text-xl font-bold">장애정보</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">장애유형</label>
                        <Disorder />
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">중증여부</label>
                        
                        {severe === "중증" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setSevere("중증")}>
                            중증
                        </button>
                        <button className="h-8 w-20 bg-gray-300 text-white font-bold text-md"
                            onClick={() => setSevere("경증")}>
                            경증
                        </button>
                        </>
                        )
                         : (
                        <>
                        <button className="h-8 w-20 bg-gray-300 text-white font-bold text-md"
                            onClick={() => setSevere("중증")}>
                            중증
                        </button>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setSevere("경증")}>
                            경증
                        </button>
                        </>)
                        }
                    </div>
                </div>

                <div className=" px-40 py-10">
                    <label className="px-10 text-xl font-bold">자기소개서</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">자기소개</label>
                        <input type="text" className=" w-10/12 h-48 bg-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:p-3" placeholder="500자 이하"/>
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">한마디</label>
                        <input type="text" className=" w-10/12 h-48 bg-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:p-3" placeholder="500자 이하"/>
                    </div>
                </div>
            
            <div className="flex justify-center">
                <button className=" w-1/6 h-10 mx-5 text-lg font-extrabold bg-gray-200 hover:bg-gray-500 hover:text-white">작성 취소</button>
                <button className=" w-1/6 h-10 mx-5 text-lg font-extrabold bg-orange-200 hover:bg-orange-400 hover:text-white">이력서 작성 완료</button>
            </div>
        </div>
    );
    
};

export default ResumeWrite;