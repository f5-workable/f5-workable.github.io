import { useEffect, useState } from "react";
import api from "../../../api";

const UserDetailList = () => {
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

    useEffect(() => {
        getMember();
    }, []);

    return (
        <div className="mx-16 py-16 w-3/5 h-auto">
            <div className="block text-center text-3xl font-bold">회원정보</div>
            <div className="block w-full">
                <div className=" h-32 mt-10">
                    <label className=" text-xl font-bold px-10">이름</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={id} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">아이디</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={name} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">연락처</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={phone} disabled />
                    <hr></hr>
                </div>
                <div className=" h-32">
                    <label className=" text-xl font-bold px-10">이메일</label>
                    <hr className=" bg-black h-0.5"></hr>
                    <input className=" text-lg font-bold italic bg-white my-5 px-10" value={email} disabled />
                    <hr></hr>
                </div>
            </div>
        </div>
    );
};

export default UserDetailList;