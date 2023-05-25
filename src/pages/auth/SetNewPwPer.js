import { async } from "q";
import { useState } from "react";

const SetNewPwPer = () => {
    const [password, setPassword] = useState("");
    const [passwordCheck, setPasswordCheck] = useState(false);

    const checkedPassword = (checkPw, pw) => {
        if (checkPw === pw) {
            setPasswordCheck(true);
        }
        else {
            setPasswordCheck(false);
        }
    };

    const handleClick = async () => {
        console.log("제출");
    };

    return(
        <div className="mx-auto py-16 w-3/5 h-auto">
            <div className="pb-8 block text-center text-3xl font-bold">비밀번호 재설정</div>
            
            <form onSubmit={handleClick}>
                <div >
                    <div className="flex justify-center">
                        <div className="flex flex-row items-center">
                            <label className=" text-xl font-bold px-10">새로운 비밀번호 입력</label>
                            <input type="password" className=" w-80 text-lg bg-white my-5 border-2"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <div><p className=" px-3 text-white">불일치</p></div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="flex flex-row items-center">
                            <label className=" text-xl font-bold px-10">새로운 비밀번호 확인</label>
                            <input type="password" className=" w-80 text-lg bg-white my-5 border-2" 
                                onChange={(e) => checkedPassword(e.target.value, password)}
                            />
                            <div>
                                {passwordCheck 
                                    ? (<p className=" px-3 text-blue-600">일치</p>) 
                                    : (<p className=" px-3 text-red-600">불일치</p>)
                                }
                            </div>
                        </div>
                    </div>
                    

                    <div className="flex justify-center">
                        <button className="mt-5 bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">완료</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SetNewPwPer;