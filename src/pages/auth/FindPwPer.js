import { useState } from "react";
import api from "../../api";
import { useNavigate } from "react-router-dom";

const FindPwPer = () => {
    const navigate = useNavigate();

    const [name, setName] = useState("");
    const [id, setId] = useState("");
    const [phoneNumber1, setPhoneNumber1] = useState("");
    const [phoneNumber2, setPhoneNumber2] = useState("");
    const [phoneNumber3, setPhoneNumber3] = useState("");

    const handleClick = async (e) => {
        e.preventDefault();
        try {
            const { data } = await api.member.findPassword(
                id,
                name,
                phoneNumber1 + "-" + phoneNumber2 + "-" + phoneNumber3,
            );
            if (data === "회원 정보가 확인되었습니다. 새로운 비밀번호를 입력해주세요.") {
                alert("회원 정보가 확인되었습니다. 비밀번호를 재설정해주세요.");
                console.log(id);
                navigate("/setnewpwper", { state: { id }});
            } else {
                alert("일치하는 회원정보가 없습니다. 입력하신 정보를 다시 확인해주세요.");
            }
        } catch (error) {
            if (error.response && error.response.data === "잘못된 정보입니다. 다시 시도해주세요.") {
                alert("잘못된 정보입니다. 다시 시도해주세요.");
            } else {
                alert("서버에서 오류가 발생했습니다. 다시 시도해주세요.");
            }
        }
    };

    return (
        <div className="mx-auto py-16 w-1/3 h-auto">
            <div className="block text-center text-3xl font-bold">비밀번호 찾기</div>

            <form onSubmit={handleClick}>
                <div className="block w-full">
                <div className=" h-32 mt-10">
                        <label className=" text-xl font-bold px-10">이름</label>
                        <hr className=" bg-black h-0.5"></hr>
                        <input className=" w-80 px-2 text-lg bg-white my-5 mx-10 border-2" onChange={(e) => setName(e.target.value)} required />
                        <hr></hr>
                    </div>
                    <div className=" h-32">
                        <label className=" text-xl font-bold px-10">아이디</label>
                        <hr className=" bg-black h-0.5"></hr>
                        <input className=" w-80 px-2 text-lg bg-white my-5 mx-10 border-2" onChange={(e) => setId(e.target.value)} required />
                        <hr></hr>
                    </div>

                    <div className=" h-32 ">
                        <label className=" text-xl font-bold px-10">연락처</label>
                        <hr className=" bg-black h-0.5"></hr>
                        <div className="mx-10 my-5 flex flex-row justify-start">
                            <input
                            type="tel"
                            minLength={3}
                            maxLength={3}
                            id="phoneNumber1"
                            name="phoneNumber1"
                            className=" w-20 h-8 p-2 border-2 flex justify-center text-center"
                            required
                            onChange={(e) => setPhoneNumber1(e.target.value)}
                            />
                            <p className=" text-xl mx-3">-</p>
                            <input
                            type="tel"
                            minLength={3}
                            maxLength={4}
                            id="phoneNumber2"
                            name="phoneNumber2"
                            className=" w-20 h-8 p-2 border-2 flex justify-center text-center"
                            required
                            onChange={(e) => setPhoneNumber2(e.target.value)}
                            />
                            <p className=" text-xl mx-3">-</p>
                            <input
                            type="tel"
                            minLength={4}
                            maxLength={4}
                            id="phoneNumber3"
                            name="phoneNumber3"
                            className=" w-20 h-8 p-2 border-2 flex justify-center text-center"
                            required
                            onChange={(e) => setPhoneNumber3(e.target.value)}
                            />
                        </div>
                        <hr></hr>
                    </div>
                </div>

                <div className="flex justify-center">
                    <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">찾기</button>
                </div>
            </form>
        </div>
    );
};

export default FindPwPer;