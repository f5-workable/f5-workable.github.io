const Resume = () => {
    return (
        <div className=" p-12 h-auto">
            <div className="block text-center text-3xl font-bold">이력서</div>
            <input className="w-1/3 h-auto text-2xl bg-gray-100" placeholder="이력서 제목을 써주세요" />

            <div className="p-5 flex flex-raw">
                <div className="bg-gray-300 w-48 h-64"></div>
                <div className="flex flex-col jusify-around">
                    <input className="text-3xl font-bold" value={"이예림"} disabled />
                    <div className="flex flex-raw">
                        <label className=" p-5 text-xl font-bold">연락처</label>
                        <input className=" text-lg font-bold italic" type="phone" value={"010-3047-5988"} disabled />
                    </div>
                    <div className="flex flex-raw">
                        <label className="p-5 text-xl font-bold">이메일</label>
                        <input className="text-lg font-bold italic" type="email" value={"yerim1215jg@naver.com"} disabled />
                    </div>
                </div>
                <div>
                        <label>개인정보</label>
                        <label>경력</label>
                        <label>희망근무조건</label>
                        <label>상세정보</label>
                        <label>자기소개서</label>
                </div>
            </div>
        </div>
    );
};

export default Resume;