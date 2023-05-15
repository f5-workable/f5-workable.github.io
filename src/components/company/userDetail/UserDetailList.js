const UserDetailList = () => {
    return (
        <div className="mx-16 py-16 w-3/5 h-auto">
            <div className="block text-center text-3xl font-bold">회원정보</div>
            <div className="block w-full">
                <div className=" h-32 mt-10">
                    <label className=" text-xl font-bold px-10">기업명</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={"휴비즈 ICT"} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">아이디</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={"hbz2023"} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">기업형태</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={"중소"} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">연락처</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={"054-478-1234"} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">사업자등록번호</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={"455-12-16572"} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">사업지주소</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={"경상북도 포항시 남구 지곡로 394"} disabled />
                    <hr></hr>
                </div>
            </div>
        </div>
    );
};

export default UserDetailList;