import { useState } from "react";
import { Link } from 'react-router-dom';

const ResumeRead = () => {
    const [career, setCareer] = useState("경력");

    return (
        <div className=" p-12 h-auto">
            <div className=" pb-12 block text-center text-3xl font-bold">이력서</div>
            <div className="flex justify-center">
                <div>
                    <input className="p-2 w-full h-auto text-xl font-bold bg-gray-100" value={"상품판매업 이력서"} disabled />

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

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">성별</label>
                    <input className="bg-white" value={"여자"} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">나이</label>
                    <input type="number" className=" w-14 bg-white text-left" value={"23"} disabled />
                    세
                </div>
                <hr className="mt-5 border border-gray-100"></hr>
            </div>

            <div className="px-40 py-10">
                <label className="px-10 text-xl font-bold">경력</label>
                <hr className="bg-black h-0.5"></hr>

                <div className=" pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">경력구분</label>
                    <div className="flex flex-col w-full">
                        <input className="bg-white" value={"경력"} disabled />
                        {career === "경력" ? 
                        (<div className=" pt-3">
                            <input type="text" className=" w-full h-48 p-2 bg-gray-100 " value={"하이마트 근무 10개월"} disabled />
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
                    <input className="bg-white" value={"서울 강북구 | 서울 강남구"} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">희망업직종</label>
                    <input type="text" className=" w-1/2 bg-white " value="상품판매업, 상품제조업" disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label for="wage" class="w-32 py-2 text-center font-bold text-md">희망임금</label>
                    <input className="bg-white w-20" value={"시급"} disabled />
                    <input type="number" className=" w-1/2  bg-white text-right" value={10000} disabled />원
                </div>
                <hr className="mt-5 border border-gray-100"></hr>
            </div>

            <div className="px-40 py-10">
                <label className="px-10 text-xl font-bold">장애정보</label>
                <hr className="bg-black h-0.5"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">장애유형</label>
                    <input className="bg-white" value={"지체장애"} disabled />
                </div>
                <hr className="mt-5 border border-gray-100"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">중증여부</label>
                    <input className="bg-white" value={"중증"} disabled />
                <hr className="mt-5 border border-gray-100"></hr>
                </div>
            </div>

            <div className=" px-40 py-10">
                <label className="px-10 text-xl font-bold">자기소개서</label>
                <hr className="bg-black h-0.5"></hr>

                <div className="pt-5 flex items-center">
                    <label className="w-32 py-2 text-center font-bold text-md">자기소개</label>
                    <input type="text" className=" w-full h-48 p-2 bg-gray-100 " value="열심히는 자신있습니다!" disabled />
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