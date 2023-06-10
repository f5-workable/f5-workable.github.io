import { useEffect, useState } from "react";
import api from "../../../api";

const UserModify = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [type, setType] = useState("");
    const [phone, setPhone] = useState("");
    const [businessNumber, setBusinessNumber] = useState("");
    const [address, setAddress] = useState("");

    const getCompany = async () => {
        const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
        const { data } = await api.company.retrieve(companyId);
        console.log(companyId);
        console.log(data);
        setName(data.c_name);
        setId(data.c_id);
        setPhone(data.phone);
        setType(data.c_type);
        setAddress(data.address);
    };

    const updateCompany = async (e) => {
        e.preventDefault();

        const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
        await api.member.update(companyId, {
            address: address,
            c_type: type,
            phone: phone,
            // logo: ,
        });
    };

    useEffect(() => {
        getCompany();
    }, []);

    return (
        <div className="mx-16 py-16 w-3/5 h-auto">
            <div className="block text-center text-3xl font-bold">기업정보 수정</div>

            <form onSubmit={updateCompany}>
            <div className="block w-full">
            <div className=" h-32 mt-10">
                    <label className=" text-xl font-bold px-10">기업명</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={name}  />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">아이디</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={id}  />
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
                    {/* <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={type}  /> */}
                    <div className="flex flex-row ">
                        <label htmlFor="kind1" className="flex items-center mr-4 my-2">
                            <input type="radio" id="kind1" name="kind" value="개인"
                                onClick={() => setType("개인")} checked={type === "개인"} />
                            <span className="ml-2">개인</span>
                        </label>
                        <label htmlFor="kind2" className="flex items-center mr-4 my-2">
                            <input type="radio" id="kind2" name="kind" value="공사"
                                onClick={() => setType("공사/공공")} checked={type === "공사/공공"} />
                            <span className="ml-2">공사/공공</span>
                        </label>
                        <label htmlFor="kind3" className="flex items-center mr-4 my-2">
                            <input type="radio" id="kind3" name="kind" value="대기업"
                                onClick={() => setType("대기업")} checked={type === "대기업"} />
                            <span className="ml-2">대기업</span>
                        </label>
                        <label htmlFor="kind4" className="flex items-center mr-4 my-2">
                            <input type="radio" id="kind4" name="kind" value="외국계"
                                onClick={() => setType("외국계")} checked={type === "외국계"} />
                            <span className="ml-2">외국계</span>
                        </label>
                        <label htmlFor="kind5" className="flex items-center mr-4 my-2">
                            <input type="radio" id="kind5" name="kind" value="중소"
                                onClick={() => setType("중소")} checked={type === "중소"} />
                            <span className="ml-2">중소</span>
                        </label>
                        <label htmlFor="kind6" className="flex items-center mr-4 my-2">
                            <input type="radio" id="kind6" name="kind" value="협회"
                                onClick={() => setType("협회/단체")} checked={type === "협회/단체"} />
                            <span className="ml-2">협회/단체</span>
                        </label>
                    </div>
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">연락처</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">사업자등록번호</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={businessNumber}  />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">사업지주소</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={address} onChange={(e) => setAddress(e.target.value)} />
                    <hr></hr>
                </div>
            </div>

            <div className="flex justify-center">
                <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">수정완료</button>
            </div>
            </form>
        </div>
    );
};

export default UserModify;