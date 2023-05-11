import Logo from "../../components/company/logoImg";

const SignUpCom = () => {
    return (
        <div className=" w-3/5 mx-auto shadow-2xl flex content-center p-10 flex-col my-24">
          <div className="text-center text-3xl font-bold">회원가입</div>
            <div className="flex justify-center">
              <div className=" w-2/3">
                <div>
                  <div className="flex flex-row justify-between my-0.5 mt-8 ">
                    <label htmlFor="id" className=" font-bold text-base ">
                      아이디
                    </label>
                    <button className=" bg-gray-400 text-white text-xs px-3 w-20 h-5">중복확인</button>
                  </div>
                  <input id="id" className=" w-full p-2 my-1.5 bg-gray-200"/>
                </div>
                <div>
                  <label htmlFor="password" className="block my-1.5 font-bold text-base">
                    비밀번호
                  </label>
                  <input type="password" id="password" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="passwordCheck" className="block my-1.5 font-bold text-base">
                    비밀번호 확인
                  </label>
                  <input type="password" id="passwordCheck" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="name" className="block my-1.5 font-bold text-base">
                    기업명
                  </label>
                  <input id="name" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="kind" className="block my-1.5 font-bold text-base">
                    기업형태
                  </label>
                  <div className="flex flex-wrap">
                    <label htmlFor="kind1" className="flex items-center mr-4 my-2">
                      <input type="radio" id="kind1" name="kind" value="개인" />
                      <span className="ml-2">개인</span>
                    </label>
                    <label htmlFor="kind2" className="flex items-center mr-4 my-2">
                      <input type="radio" id="kind2" name="kind" value="공사" />
                      <span className="ml-2">공사/공공</span>
                    </label>
                    <label htmlFor="kind3" className="flex items-center mr-4 my-2">
                      <input type="radio" id="kind3" name="kind" value="대기업" />
                      <span className="ml-2">대기업</span>
                    </label>
                    <label htmlFor="kind4" className="flex items-center mr-4 my-2">
                      <input type="radio" id="kind4" name="kind" value="외국계" />
                      <span className="ml-2">외국계</span>
                    </label>
                    <label htmlFor="kind5" className="flex items-center mr-4 my-2">
                      <input type="radio" id="kind5" name="kind" value="중소" />
                      <span className="ml-2">중소</span>
                    </label>
                    <label htmlFor="kind6" className="flex items-center mr-4 my-2">
                      <input type="radio" id="kind6" name="kind" value="협회" />
                      <span className="ml-2">협회/단체</span>
                    </label>
                  </div>
                </div>
                <div>
                  <label htmlFor="phone" className="block my-1.5 font-bold text-base">
                    연락처
                  </label>
                  <input type="tel" id="phone" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="address" className="block my-1.5 font-bold text-base">
                    사업지 주소
                  </label>
                  <input id="address" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="registerNumber" className="block my-1.5 font-bold text-base">
                    사업자등록번호
                  </label>
                  <div className="w-full flex flex-row justify-start">
                    <input id="registerNumber" className=" w-16 p-2 my-1.5 bg-gray-200 flex justify-center text-center" />
                    <p className=" text-3xl mx-3">-</p>
                    <input id="registerNumber" className=" w-10 p-2 my-1.5 bg-gray-200 flex justify-center text-center" />
                    <p className=" text-3xl mx-3">-</p>
                    <input id="registerNumber" className=" w-24 p-2 my-1.5 bg-gray-200 flex justify-center text-center" />
                  </div>
                </div>
                <div>
                  <label htmlFor="logo" className="block my-1.5 font-bold text-base">
                    기업 로고 사진
                  </label>
                  {/* <input id="logo" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" /> */}
                  <div className="mt-4">
                    <Logo/>
                  </div>
                </div>

                <div className="pt-10">
                  <input type="checkbox" className="text-sm m-1.5 mb-7"></input>
                    개인정보 동의
                </div>
  
                <div className="flex justify-center">
                  <button className=" bg-orange-200 hover:bg-orange-400 rounded-md py-2 px-5 mr-2 w-28">회원가입</button>
                </div>
              </div>
            </div>
  
            <div className="flex justify-center ">
              <hr className=" w-1/2 my-5"></hr>
            </div>
            <div className=" w-1/3 mx-auto">
              <span className="">Do you have an account?</span>
              <span className="float-right text-red-600">Login</span>
            </div>
          </div>
    );
  };
  
  export default SignUpCom;
  