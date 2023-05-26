import { useEffect, useState } from "react";
import api from "../../../api";

const UserModify = () => {
    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");

    const getMember = async () => {
        const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
        const { data } = await api.member.retrieve(memberId);
        console.log(memberId);
        console.log(data);
        setName(data.name);
        setId(data.id);
        setPhone(data.phone);
        setEmail(data.email);
    };

    const updateMember = async (e) => {
        e.preventDefault();

        const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
        await api.member.update(memberId, {
            email: email,
            phone: phone,
            // profil: ,
        });
    };

    useEffect(() => {
        getMember();
    }, []);

    return (
        <div className="mx-16 py-16 w-3/5 h-auto">
            <div className="block text-center text-3xl font-bold">회원정보 수정</div>

            <form onSubmit={updateMember}>
            <div className="block w-full">
                
                <div className=" h-32 mt-10">
                    <label className=" text-xl font-bold px-10">이름</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={name} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">아이디</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10" value={id} disabled />
                    <hr></hr>
                </div>
                <div className=" h-60">
                    <label className=" text-xl font-bold px-10">비밀번호</label>
                    <hr className=" bg-black h-0.5"></hr>
                    {/* <div>
                        <label className=" text-xl font-bold px-10">새로운 비밀번호 입력</label>
                        <input type="password" className=" w-80 text-lg font-bold italic bg-white my-5 border-2" />
                    </div>
                    <div>
                        <label className=" text-xl font-bold px-10">새로운 비밀번호 확인</label>
                        <input type="password" className=" w-80 text-lg font-bold italic bg-white my-5 border-2" />
                    </div> */}
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">연락처</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10 border-2" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">이메일</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" w-80 text-lg font-bold italic bg-white my-5 mx-10 border-2" value={email}  onChange={(e) => setEmail(e.target.value)} />
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