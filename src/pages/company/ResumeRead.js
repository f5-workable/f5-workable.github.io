import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import api from "../../api";

const ResumeRead = () => {
    const [memberName, setMemberName] = useState("");
    const [memberPhone, setMemberPhone] = useState("");
    const [memberEmail, setMemberEmail] = useState("");
    const [memberGender, setMemberGender] = useState("");
    const [memberAge, setMemberAge] = useState("");
    const [memberAcademic, serMemberAcademic] = useState("");
    const [memberCareer, setMemberCareer] = useState("");
    const [memberCareerDetail, setMemberCareerDetail] = useState("");
    const [memberCareerPlace, setMemberCareerPlace] = useState([]);
    const [memberCareerType, setMemberCareerType] = useState("");
    const [memberWageType, setMemberWageType] = useState("");
    const [memberWage, setMemberWage] = useState("");
    const [disabilityType, setDisabilityType] = useState("");
    const [severeCondition, setSevereCondition] = useState([]);
    const [memberSelf, setMemberSelf] = useState("");
  
    const getResumeNameByStatus = async () => {
        const { data } = await api.resume.retrieve(1);
        console.log(data);
        setMemberCareer(data.career === null ? "신입" : "경력");
        setMemberCareerDetail(data.career);
        setMemberCareerPlace(data.place);
        setMemberCareerType(data.job);
        setMemberWageType(data.payment_type);
        setMemberWage(data.payment);
        setDisabilityType(data.ob_type);
        setSevereCondition(data.disease);
        setMemberSelf(data.pr === null ? "작성한 내용이 없습니다." : data.pr);
    };

    useEffect(() => {
        getResumeNameByStatus();
      }, []);

    return (
        <div className=" p-12 h-auto">
            <div className=" pb-12 block text-center text-3xl font-bold">이력서</div>
            <div className="flex justify-center">
                <div>
                    <div className="py-10 flex flex-raw">
                        <div className="bg-gray-300 w-48 h-64"></div>
                        <div className="px-5 flex flex-col justify-center">
                            <input className="pb-10 text-3xl font-bold bg-white" value={memberName} disabled />
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
                                <label className="pr-5 text-xl font-bold">연락처</label>
                                <input className=" text-xl font-bold italic bg-white" type="phone" value={memberPhone} disabled />
                            </div>
                            <div className="flex flex-raw">
                                <label className="pr-5 text-xl font-bold">이메일</label>
                                <input className="text-xl font-bold italic bg-white" type="email" value={memberEmail} disabled />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="px-40 py-10">
                <label className="px-10 text-xl font-bold">학력/경력</label>
                <hr className="bg-black h-0.5"></hr>

                <div className=" pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">학력</label>
                    <div className="flex flex-col">
                        <input className=" bg-white" value={memberAcademic} disabled />
                    </div>
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className=" pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">경력구분</label>
                    <div className="w-10/12 flex flex-col">
                        <input className=" bg-white" value={memberCareer} disabled />
                        {memberCareer === "경력" ? 
                        (<div className=" pt-3">
                            <input type="text" className=" w-full h-48 p-2 bg-gray-100 " value={memberCareerDetail} disabled />
                        </div>) :
                        <></>}
                    </div>
                </div>
                <hr className="mt-5 border border-gray-100"></hr>
            </div>

            <div className=" px-40 py-10">
                <label className="px-10 text-xl font-bold">희망근무조건</label>
                <hr className="bg-black h-0.5"></hr>

                <div className="pt-5 flex items-center w-full">
                    <label className="w-32 py-2 text-center font-bold text-md">희망근무지</label>
                    <input className="w-1/2 bg-white" value={memberCareerPlace} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">희망업직종</label>
                    <input type="text" className=" w-1/2 bg-white " value={memberCareerType} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label for="wage" class="w-32 py-2 text-center font-bold text-md">희망임금</label>
                    <input className="bg-white w-20" value={memberWageType} disabled />
                    <input type="number" className=" w-1/2  bg-white text-right" value={memberWage} disabled />원
                </div>
                <hr className="mt-5 border border-gray-100"></hr>
            </div>

            <div className="px-40 py-10">
                <label className="px-10 text-xl font-bold">장애정보</label>
                <hr className="bg-black h-0.5"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">장애유형</label>
                    <input className="bg-white" value={disabilityType} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">중증여부</label>
                    <input className="bg-white" value={severeCondition} disabled />
                <hr className="mt-5 border border-gray-100"></hr>
                </div>
            </div>

            <div className=" px-40 py-10">
                <label className="px-10 text-xl font-bold">자기소개서</label>
                <hr className="bg-black h-0.5"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">자기소개</label>
                    <input type="text" className=" w-10/12 h-48 p-2 bg-gray-100 " value={memberSelf} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>
            </div>
        
            <div className="flex justify-center">
                <button className=" w-1/6 h-10 mx-5 text-lg font-bold bg-gray-200 hover:bg-gray-500 hover:text-white"><Link to={"/resume"}>이전</Link></button>
            </div>
        </div>
    );
};

export default ResumeRead;