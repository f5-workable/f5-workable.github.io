import { useState } from "react";
import Profile from "../../components/company/ProfileImg";
import { Link } from 'react-router-dom';

const SignUpPer = () => {
  const [gender, setGender] = useState("남자");

  return (
      <div className=" w-4/5 mx-auto shsadow-2xl flex content-center p-10 flex-col my-24">
        <div className="text-center text-3xl font-bold">회원가입</div>
        <div className="flex justify-center">
              <div className=" w-full">
                <div className="pt-12">
                  <h1 className=" text-xl font-bold pb-5">아이디/비밀번호</h1>
                  <hr class="border-2 border-black" />
                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          아이디
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <div className="flex flex-row">
                        <input id="id" className=" w-64 h-8 p-2 border-2"/>
                        <button className="w-24 h-8 mx-1.5 px-3 text-base border-2">중복확인</button>
                      </div>
                      <p className="py-3">5~24자 이내로 입력하세요.</p>
                    </div>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          비밀번호
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <input type="password" id="id" className=" w-64 h-8 p-2 border-2"/>
                      <p className="py-3">8~24자 이내로 입력하세요.</p>
                    </div>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          비밀번호 확인
                      </label>
                    </div>
                    <div className="flex flex-col">
                      <input type="password" id="id" className=" w-64 h-8 p-2 border-2"/>
                      <p className="py-3">비밀번호를 다시 한번 입력해주세요.</p>
                    </div>
                  </div>
                  <hr className="border border-gray-100"></hr>
                </div>

                <div className="pt-12">
                  <h1 className=" text-xl font-bold pb-5">회원 정보</h1>
                  <hr class="border-2 border-black" />
                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          이름
                      </label>
                    </div>
                    <input id="id" className=" w-52 h-8 p-2 border-2"/>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          성별
                      </label>
                    </div>
                    {gender === "남자" ? (
                          <>
                      <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                          onClick={() => setGender("남자")}>
                          남자
                      </button>
                      <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                          onClick={() => setGender("여자")}>
                          여자
                      </button>
                      </>
                      )
                        : (
                      <>
                      <button className="h-8 w-20 bg-gray-200 font-bold text-md"
                          onClick={() => setGender("남자")}>
                          남자
                      </button>
                      <button className="h-8 w-20 bg-gray-400 font-bold text-md"
                          onClick={() => setGender("여자")}>
                          여자
                      </button>
                      </>)
                    }
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5">
                    <div className="w-52 flex items-center">
                      <label htmlFor="id" className="px-5 font-bold text-base">
                        생년월일
                      </label>
                    </div>
                    <div className="flex flex-row justify-start items-center">
                      <select id="year" className="px-2 mr-3 border-2">
                        <option className="text-center">년</option>
                        {[...Array(100)].map((_, index) => (
                          <option key={index} value={2023 - index}>{2023 - index}년</option>
                        ))}
                      </select>
                      <select id="month" className="px-2 mr-3 border-2">
                        <option className="text-center">월</option>
                        {[...Array(12)].map((_, index) => (
                          <option key={index} value={index + 1}>{index + 1}월</option>
                        ))}
                      </select>
                      <select id="day" className="px-2 border-2">
                        <option className="text-center">일</option>
                        {[...Array(31)].map((_, index) => (
                          <option key={index} value={index + 1}>{index + 1}일</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          연락처
                      </label>
                    </div>
                    <div className="flex flex-row justify-start ">
                      <input id="registerNumber" className=" w-20 h-8 p-2 border-2 flex justify-center text-center" />
                      <p className=" text-xl mx-3">-</p>
                      <input id="registerNumber" className=" w-20 h-8 p-2 border-2 flex justify-center text-center" />
                      <p className=" text-xl mx-3">-</p>
                      <input id="registerNumber" className=" w-20 h-8 p-2 border-2 flex justify-center text-center" />
                    </div>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="email" className=" px-5 font-bold text-base">
                          이메일
                      </label>
                    </div>
                    <input type="email" id="email" className=" w-[25rem] h-8 p-2 border-2"/>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          프로필 사진
                      </label>
                    </div>
                    <Profile/>
                  </div>
                  <hr className="border border-gray-100"></hr>

                </div>

                <div className="pt-12 flex justify-center my-5">
                  <input type="checkbox" className="text-sm"></input>
                    개인정보 동의
                </div>
  
                <div className="flex justify-center">
                  <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">회원가입</button>
                </div>
              </div>
            </div>

            <div className="flex justify-center ">
              <hr className=" w-full border border-gray-200 my-5"></hr>
            </div>
            <div className=" w-1/4 px-5 mx-auto">
              <span>Do you have an account?</span>
              <span className="float-right text-red-600"><Link to="/login/member">Login</Link></span>
            </div>
        </div>
  );
};

export default SignUpPer;
