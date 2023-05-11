const SignUpCom = () => {
    return (
        <div className=" w-3/5 mx-auto shadow-2xl flex content-center p-10 flex-col my-24">
          <div className="text-center text-3xl font-bold">회원가입</div>
            <div className="flex justify-center">
              <div className=" w-1/3">
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
                    이름
                  </label>
                  <input id="name" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="phone" className="block my-1.5 font-bold text-base">
                    연락처
                  </label>
                  <input type="tel" id="phone" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
                <div>
                  <label htmlFor="email" className="block my-1.5 font-bold text-base">
                    이메일
                  </label>
                  <input type="email" id="email" className=" w-full p-2 my-1.5 bg-gray-200 flex justify-center" />
                </div>
  
                <input type="checkbox" className="text-sm my-1.5 mb-7"></input>
                  개인정보 동의
  
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
  