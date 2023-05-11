const LoginCom = () => {
    return (
      <div className=" my-24">
        <div className=" w-3/5 mx-auto shadow-2xl flex content-center">
          <div className="w-1/2 p-10">
          <div className="text-center text-3xl font-bold">로그인</div>
          <div className="flex justify-center">
            <div>
              <div>
                <label htmlFor="id" className=" block my-1.5 mt-8 font-bold text-xl ">
                  아이디
                </label>
                <input id="id" className="rounded w-full p-2 my-1.5 bg-gray-200"/>
              </div>
              <div>
                <label htmlFor="password" className="block my-1.5 font-bold text-xl">
                  비밀번호
                </label>
                <input type="password" className="rounded w-full p-2 my-1.5 bg-gray-200" />
              </div>
            </div>
          </div>
            <div className="my-5 w-4/5 flex justify-between mx-auto">
              <span className="text-sm">
                <input type="checkbox"></input>
                  로그인 정보 기억하기
              </span>
              <span className="underline text-sm">Fotgot your password?</span>
            </div>
            <div className="flex justify-center">
              <button className=" bg-blue-200 hover:bg-blue-400 rounded-md py-2 px-5">로그인</button>
            </div>
            <hr className="my-5"></hr>
            <div className="w-4/5 mx-auto">
              <span className="">Don't have an account?</span>
              <span className="float-right text-red-600">Sign Up</span>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default LoginCom;
  