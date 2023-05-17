import { useState } from "react";
import { Link } from 'react-router-dom';
import Disorder from "../../components/member/resumeDetail/Disorder";
import Location from "../../components/member/searchDetail/location";

const ResumeWrite = () => {
    const [gender, setGender] = useState("남자");
    const [career, setCareer] = useState("신입");
    const [severe, setSevere] = useState("중증");
    const [location, setLocation] = useState([]);

    return (
        <div className=" p-12 h-auto">
            <div className=" pb-12 block text-center text-3xl font-bold">이력서</div>
            <div className="flex justify-center">
                <div>
                    <input className="p-2 w-full h-auto text-xl font-bold bg-gray-100 placeholder:text-gray-400 placeholder:font-bold" placeholder="이력서 제목을 써주세요" />

                    <div className="py-10 flex flex-raw">
                        <div className="bg-gray-300 w-48 h-64"></div>
                        <div className="px-5 flex flex-col justify-center">
                            <input className="pb-10 text-3xl font-bold bg-white" value={"이예림"} disabled />
                            <div className="flex flex-raw">
                                <label className=" w-20 text-xl font-bold">성별</label>
                                <input className=" text-xl font-bold italic bg-white" type="phone" value={"여자"} disabled />
                            </div>
                            <div className="flex flex-raw">
                                <label className=" w-20 text-xl font-bold">나이</label>
                                <p className="pr-5 text-xl font-bold italic">만</p>
                                <input className=" w-8 text-xl font-bold italic bg-white" type="phone" value={"23"} disabled />
                                <p className="text-xl font-bold italic">세</p>
                            </div>
                            <div className="flex flex-raw">
                                <label className=" w-20 text-xl font-bold">연락처</label>
                                <input className=" text-xl font-bold italic bg-white" type="phone" value={"010-3047-5988"} disabled />
                            </div>
                            <div className="flex flex-raw">
                                <label className=" w-20 text-xl font-bold">이메일</label>
                                <input className="text-xl font-bold italic bg-white" type="email" value={"yerim1215jg@naver.com"} disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className="px-40 py-10">
                    <label className="px-10 text-xl font-bold">경력</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className=" pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">경력구분</label>
                        
                        {career === "신입" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setCareer("신입")}>
                            신입
                        </button>
                        <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                            onClick={() => setCareer("경력")}>
                            경력
                        </button>
                        </>
                        )
                         : (
                        <div className="w-full flex flex-col">
                            <div>
                                <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                                    onClick={() => setCareer("신입")}>
                                    신입
                                </button>
                                <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                                    onClick={() => setCareer("경력")}>
                                    경력
                                </button>
                            </div>
                            <div className=" pt-3">
                                <input type="text" className=" w-full h-48 bg-gray-100 placeholder:text-gray-400 placeholder:font-bold placeholder:p-3" placeholder="경력을 작성해주세요 (200자 이하로 작성)"/>
                            </div>
                        </div>)
                        }
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>
                </div>

                <div className=" px-40 py-10">
                    <label className="px-10 text-xl font-bold">희망근무조건</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start w-full">
                        <label className="w-32 py-2 text-center font-bold text-md">희망근무지</label>
                        <Location state={location} setState={setLocation} />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">희망업직종</label>
                        <input type="text" className=" w-1/2 p-2 border-2 placeholder:text-gray-400 placeholder:font-bold placeholder:p-3" placeholder="희망하는 업직종을 작성해주세요"/>
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className="pt-5 flex items-center">
                        <label for="wage" class="w-32 py-2 text-center font-bold text-md">희망임금</label>
                        <div className="w-[500px]">
                            <div>
                                <input type="radio" id="hourly" name="wage" value="hourly" />
                                <label for="hourly" className="px-3">시급</label>
                                <input type="radio" id="daily" name="wage" value="daily" />
                                <label for="daily" className="px-3">일급</label>
                                <input type="radio" id="monthly" name="wage" value="monthly" />
                                <label for="monthly" className="px-3">월급</label>
                                <input type="radio" id="annual" name="wage" value="annual" />
                                <label for="annual" className="px-3">연봉</label>
                            </div>
                            <input type="number" className=" w-4/5 mt-5 mr-2 p-2 border-2 text-right" min={1000} />원
                        </div>
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>
                </div>

                <div className="px-40 py-10">
                    <label className="px-10 text-xl font-bold">장애정보</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">장애유형</label>
                        <Disorder />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">중증여부</label>
                        
                        {severe === "중증" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setSevere("중증")}>
                            중증
                        </button>
                        <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                            onClick={() => setSevere("경증")}>  
                            경증
                        </button>
                        </>
                        )
                         : (
                        <>
                        <button className="h-8 w-20 bg-gray-200 font-bold text-md"
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
                    <hr className="mt-5 border border-gray-100"></hr>
                </div>

                <div className=" px-40 py-10">
                    <label className="px-10 text-xl font-bold">자기소개서</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">자기소개</label>
                        <input type="text" className=" w-full h-48 bg-gray-100 placeholder:text-gray-400 placeholder:font-bold placeholder:p-3" placeholder="200자 이하로 작성해주세요" />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>
                </div>
            
            <div className="flex justify-center">
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-gray-200 hover:bg-gray-500 hover:text-white"><Link to={"/resume"}>작성 취소</Link></button>
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-orange-200 hover:bg-orange-400 hover:text-white">이력서 작성 완료</button>
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-red-300 hover:bg-red-500 hover:text-white">삭제</button>
            </div>
        </div>
    );
    
};

export default ResumeWrite;