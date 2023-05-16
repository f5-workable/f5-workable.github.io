const UserModify = () => {
    return (
        <div className="mx-16 py-16 w-3/5 h-auto">
            <div className="block text-center text-3xl font-bold">회원정보 수정</div>

            <div className="block w-full">
            <div className=" h-32 mt-10">
                    <label className=" text-xl font-bold px-10">기업명</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={"휴비즈 ICT"}  />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">아이디</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={"hbz2023"}  />
                    <hr></hr>
                </div>
                <div className=" h-60">
                    <label className=" text-xl font-bold px-10">비밀번호</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <div>
                        <label className=" text-xl font-bold px-10">새로운 비밀번호 입력</label>
                        <input type="password" className=" w-80 text-lg font-bold italic bg-white my-5 border-2" />
                    </div>
                    <div>
                        <label className=" text-xl font-bold px-10">새로운 비밀번호 확인</label>
                        <input type="password" className=" w-80 text-lg font-bold italic bg-white my-5 border-2" />
                    </div>
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">기업형태</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={"중소"}  />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">연락처</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={"054-478-1234"}  />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">사업자등록번호</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={"455-12-16572"}  />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">사업지주소</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={"경상북도 포항시 남구 지곡로 394"}  />
                    <hr></hr>
                </div>
            </div>

            <div className="flex justify-center">
                <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">수정완료</button>
              </div>
        </div>
    );
};

export default UserModify;