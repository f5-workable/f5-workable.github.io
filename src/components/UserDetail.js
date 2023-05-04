const UserDetail = () => {
    return (
        <div className="mx-16 py-16 w-3/5 h-auto">
            <div className="block text-center text-3xl font-bold">회원정보</div>
            <div className="block w-full">
                <div className=" h-32 mt-10">
                    <label className=" text-xl font-bold px-10">아이디</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value="yelim1215" disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">연락처</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value="010-3047-5988" disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">이메일</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value="yerim1215jg@naver.com" disabled />
                    <hr></hr>
                </div>
            </div>
        </div>
    );
};

export default UserDetail;