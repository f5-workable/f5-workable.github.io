const Resume = () => {
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
                <div className="px-52 py-10">
                    <label className="px-10 text-xl font-bold">개인정보</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">성별</label>
                        <input type="radio" id="male" className=" hidden" />
                        <label htmlFor="male" className="inline-flex justify-center items-center h-8 w-20 bg-gray-300 text-center font-bold text-md">남자</label>
                        <input type="radio" id="female" className=" hidden" />
                        <label htmlFor="female" className="inline-flex justify-center items-center h-8 w-20 bg-gray-300 text-center font-bold text-md">여자</label>
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">나이</label>
                        <input type="number" className=" w-14 bg-gray-300 text-center" min={1} />
                        세
                    </div>
                </div>

                <div className="px-52 py-10">
                    <label className="px-10 text-xl font-bold">경력</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">경력구분</label>
                        <input type="radio" id="newcomer" className=" hidden" />
                        <label htmlFor="newcomer" className="inline-flex justify-center items-center h-8 w-20 bg-gray-300 text-center font-bold text-md">신입</label>
                        <input type="radio" id="career" className=" hidden" />
                        <label htmlFor="career" className="inline-flex justify-center items-center h-8 w-20 bg-gray-300 text-center font-bold text-md">경력</label>
                    </div>
                    <div className="flex flex-col px-32 pt-3">
                        <input type="text" className=" w-full h-24 bg-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:p-3" placeholder="경력자만 작성"/>
                    </div>
                </div>

                <div className="px-52 py-10">
                    <label className="px-10 text-xl font-bold">희망근무조건</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">희망근무지</label>
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

                <div className="px-52 py-10">
                    <label className="px-10 text-xl font-bold">장애정보</label>
                    <hr className="bg-black h-0.5"></hr>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">장애유형</label>
                        <span className=" pt-2 bg-gray-300">
                            <input type="checkbox" />
                            <label>지체장애</label>
                            <input type="checkbox" />
                            <label>시각장애</label>
                            <input type="checkbox" />
                            <label>청각장애</label>
                            <input type="checkbox" />
                            <label>기타장애</label>
                        </span>
                    </div>
                    <div className="flex flex-col px-32 pt-3">
                        <input type="text" className=" w-full h-24 bg-gray-300 placeholder:text-gray-500 placeholder:font-bold placeholder:p-3" placeholder="기타장애만 작성"/>
                    </div>

                    <div className="pt-5 flex items-start">
                        <label className="w-32 py-2 text-center font-bold text-md">중증여부</label>
                        <input type="radio" id="severe" className=" hidden" />
                        <label htmlFor="severe" className="inline-flex justify-center items-center h-8 w-20 bg-gray-300 text-center font-bold text-md">중증</label>
                        <input type="radio" id="slight" className=" hidden" />
                        <label htmlFor="slight" className="inline-flex justify-center items-center h-8 w-20 bg-gray-300 text-center font-bold text-md">경증</label>
                    </div>
                </div>

                <div className=" px-52 py-10">
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

export default Resume;