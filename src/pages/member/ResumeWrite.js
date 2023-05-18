import { useState } from "react";
import { Link } from 'react-router-dom';
import Disorder from "../../components/member/resumeDetail/Disorder";
import Location from "../../components/member/searchDetail/location";
import api from "../../api";

const ResumeWrite = () => {
    const [resumeName, setResumeName] = useState("");
    const [memberName, setMemberName] = useState("");
    const [memberPhone, setMemberPhone] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    const [memberGender, setMemberGender] = useState("");
    const [memberAge, setMemberAge] = useState("");
    const [memberAcademic, serMemberAcademic] = useState("");
    const [memberCareer, setMemberCareer] = useState("신입");
    const [memberCareerDetail, setMemberCareerDetail] = useState("");
    const [memberCareerPlace, setMemberCareerPlace] = useState([]);
    const [memberCareerType, setMemberCareerType] = useState("");
    const [memberWageType, setMemberWageType] = useState("");
    const [memberWage, setMemberWage] = useState("");
    const [disabilityType, setDisabilityType] = useState([]);
    const [severeCondition, setSevereCondition] = useState("중증");
    const [memberSelf, setMemberSelf] = useState("");

    const updateMemberResume = async () => {
        const { data } = await api.resume.update(1, { 
            r_id: 1,
            age: 23,
            place: "경기 수원시",
            // place: memberCareerPlace.length === 0 ? null : memberCareerPlace,
            // education: memberAcademic.length === 0 ? null : memberAcademic,
            job: memberCareerType.length === 0 ? null : memberCareerType,
            payment_type: memberWageType.length === 0 ? null : memberWageType,
            payment: memberWage.length === 0 ? null : memberWage,
            ob_type: disabilityType.length === 0 ? null : disabilityType,
            disease: severeCondition === 0 ? null : severeCondition,
            career: memberCareer.length === "신입" ? severeCondition : memberCareerDetail,
            pr: memberSelf.length === 0 ? null : memberSelf,
            title: resumeName.length === 0 ? null : resumeName,
        });
        console.log(data);
    };

    return (
        <div className=" p-12 h-auto">
            <div className=" pb-12 block text-center text-3xl font-bold">이력서</div>
            <div className="flex justify-center">
                <div>
                    <input className="p-2 w-full h-auto text-xl font-bold bg-gray-100 placeholder:text-gray-400 placeholder:font-bold"
                        placeholder="이력서 제목을 써주세요" onChange={(e) => setResumeName(e.target.value)}
                    />

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
                    <label className="px-10 text-xl font-bold">학력/경력</label>
                    <hr className="bg-black h-0.5"></hr>
                    
                    <div className="pt-5 flex items-center">
                        <label for="wage" class="w-32 py-2 text-center font-bold text-md">학력</label>
                        <div className="w-[500px]">
                            <div>
                                <input type="radio" id="high" name="academic" value="high" onClick={() => serMemberAcademic("고졸")} />
                                <label for="high" className="px-3">고졸</label>
                                <input type="radio" id="univer" name="academic" value="univer" onClick={() => serMemberAcademic("대졸")} />
                                <label for="univer" className="px-3">대졸</label>
                                <input type="radio" id="univer2" name="academic" value="univer2" onClick={() => serMemberAcademic("초대졸")} />
                                <label for="univer2" className="px-3">초대졸</label>
                                <input type="radio" id="master" name="academic" value="master" onClick={() => serMemberAcademic("석사")} />
                                <label for="master" className="px-3">석사</label>
                            </div>
                        </div>
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className=" pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">경력구분</label>
                        
                        {memberCareer === "신입" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setMemberCareer("신입")}>
                            신입
                        </button>
                        <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                            onClick={() => setMemberCareer("경력")}>
                            경력
                        </button>
                        </>
                        )
                         : (
                        <div className="w-10/12 flex flex-col">
                            <div>
                                <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                                    onClick={() => setMemberCareer("신입")}>
                                    신입
                                </button>
                                <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                                    onClick={() => setMemberCareer("경력")}>
                                    경력
                                </button>
                            </div>
                            <div className=" pt-3">
                                <input type="text" className="p-2 w-full h-48 bg-gray-100 placeholder:text-gray-400 placeholder:font-bold"
                                    placeholder="경력을 작성해주세요 (200자 이하로 작성)" onChange={(e) => setMemberCareerDetail(e.target.value)}
                                />
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
                        <Location state={memberCareerPlace} setState={setMemberCareerPlace} />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">희망업직종</label>
                        <input type="text" className=" w-1/2 p-2 border-2 placeholder:text-gray-400 placeholder:font-bold placeholder:p-3"
                            placeholder="희망하는 업직종을 작성해주세요" onChange={(e) => setMemberCareerType(e.target.value)} 
                        />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className="pt-5 flex items-center">
                        <label for="wage" class="w-32 py-2 text-center font-bold text-md">희망임금</label>
                        <div className="w-[500px]">
                            <div>
                                <input type="radio" id="hourly" name="wage" value="hourly" onClick={() => setMemberWageType("시급")} />
                                <label for="hourly" className="px-3">시급</label>
                                <input type="radio" id="daily" name="wage" value="daily" onClick={() => setMemberWageType("일급")} />
                                <label for="daily" className="px-3">일급</label>
                                <input type="radio" id="monthly" name="wage" value="monthly" onClick={() => setMemberWageType("월급")} />
                                <label for="monthly" className="px-3">월급</label>
                                <input type="radio" id="annual" name="wage" value="annual" onClick={() => setMemberWageType("연봉")} />
                                <label for="annual" className="px-3">연봉</label>
                            </div>
                            <input className=" w-4/5 mt-5 mr-2 p-2 border-2 text-right" min={1000} onChange={(e) => setMemberWage(e.target.value)} />
                                원
                        </div>
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>
                </div>

                <div className="px-40 py-10">
                    <label className="px-10 text-xl font-bold">장애정보</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">장애유형</label>
                        <Disorder setState={setDisabilityType} />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">중증여부</label>
                        
                        {severeCondition === "중증" ? (
                            <>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setSevereCondition("중증")}>
                            중증
                        </button>
                        <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                            onClick={() => setSevereCondition("경증")}>  
                            경증
                        </button>
                        </>
                        )
                         : (
                        <>
                        <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                            onClick={() => setSevereCondition("중증")}>
                            중증
                        </button>
                        <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                            onClick={() => setSevereCondition("경증")}>
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
                        <input type="text" className="p-2 w-10/12 h-48 bg-gray-100 placeholder:text-gray-400 placeholder:font-bold placeholder:p-3" 
                            placeholder="200자 이하로 작성해주세요" onChange={(e) => setMemberSelf(e.target.value)}
                        />
                    </div>
                    <hr className="mt-5 border border-gray-100"></hr>
                </div>
            
            <div className="flex justify-center">
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-gray-200 hover:bg-gray-500 hover:text-white"><Link to={"/resume"}>작성 취소</Link></button>
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-orange-200 hover:bg-orange-400 hover:text-white" onClick={updateMemberResume}>이력서 작성 완료</button>
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-red-300 hover:bg-red-500 hover:text-white">삭제</button>
            </div>
        </div>
    );
    
};

export default ResumeWrite;