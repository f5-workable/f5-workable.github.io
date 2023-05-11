import Logo from "../../components/company/logoImg";
import Kind from "../../components/company/signup";
import { Link } from 'react-router-dom';

const SignUpCom = () => {
    return (
        <div className=" w-4/5 mx-auto shadow-2xl flex content-center p-10 flex-col my-24">
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
                  <h1 className=" text-xl font-bold pb-5">기업 상세 정보</h1>
                  <hr class="border-2 border-black" />
                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          기업명
                      </label>
                    </div>
                    <input id="id" className=" w-96 h-8 p-2 border-2"/>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          기업형태
                      </label>
                    </div>
                    <Kind />
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          연락처
                      </label>
                    </div>
                    <div className="flex flex-row justify-start">
                      <input id="registerNumber" className=" w-20 h-8 p-2 border-2 flex justify-center text-center" />
                      <p className=" text-3xl mx-3">-</p>
                      <input id="registerNumber" className=" w-20 h-8 p-2 border-2 flex justify-center text-center" />
                      <p className=" text-3xl mx-3">-</p>
                      <input id="registerNumber" className=" w-20 h-8 p-2 border-2 flex justify-center text-center" />
                    </div>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          사업자등록번호
                      </label>
                    </div>
                    <div className="flex flex-row justify-start">
                      <input id="registerNumber" className=" w-16 h-8 p-2 border-2 flex justify-center text-center" />
                      <p className=" text-3xl mx-3">-</p>
                      <input id="registerNumber" className=" w-10 h-8 p-2 border-2 flex justify-center text-center" />
                      <p className=" text-3xl mx-3">-</p>
                      <input id="registerNumber" className=" w-24 h-8 p-2 border-2 flex justify-center text-center" />
                    </div>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          사업지주소
                      </label>
                    </div>
                    <input id="id" className=" w-[45rem] h-8 p-2 border-2"/>
                  </div>
                  <hr className="border border-gray-100"></hr>

                  <div className="flex flex-row my-1.5 ">
                    <div className=" w-52 flex items-center">
                      <label htmlFor="id" className=" px-5 font-bold text-base">
                          기업로고
                      </label>
                    </div>
                    <Logo/>
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
              <span className="float-right text-red-600"><Link to="/login/company">Login</Link></span>
            </div>
          </div>
    );
  };
  
  export default SignUpCom;
  