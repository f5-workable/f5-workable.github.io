const Footer = () => {
  return (
    <footer className="w-full bg-neutral-800 sticky top-0 mx-auto my-0">
      <div className="w-2/3 h-full mx-auto my-0 flex flex-col xl:flex-row xl:justify-between">
        <div className="flex flex-col w-full text-center xl:text-start">
          <div className="py-2">
            <span className="text-xl text-orange-400">F5</span>
          </div>
          <div className="flex justify-center items-center xl:justify-between">
            <div className="pb-2">
              <p className="block text-neutral-300 text-sm ">팀 에프파이브 | 대표자 : 안은비</p>
              <p className="block text-neutral-300 text-sm">
                프론트 : 이예림, 현용재 | 벡엔드 : 하수민, 안은비, 홍성윤
              </p>

              <p className="block text-neutral-300 text-sm">
                주소 : 경북 구미시 대학로 61 금오공과대학교 디지털관
              </p>
              <p className="block pt-3 text-neutral-300 text-sm">
                Copyright &copy; 2023 F5. All rights reserved.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-full my-auto pt-2 pb-5 text-center xl:text-right xl:p-0">
          <div className="inline-block border-2 border-black border-solid w-10 h-10 mr-4 rounded-full bg-red-500 hover:bg-red-600 hover:scale-110"></div>
          <div className="inline-block border-2 border-black border-solid w-10 h-10 mr-4 rounded-full bg-orange-500 hover:bg-orange-600 hover:scale-110"></div>
          <div className="inline-block border-2 border-black border-solid w-10 h-10 mr-4 rounded-full bg-yellow-500 hover:bg-yellow-600 hover:scale-110"></div>
          <div className="inline-block border-2 border-black border-solid w-10 h-10 mr-4 rounded-full bg-green-500 hover:bg-green-600 hover:scale-110"></div>
          <div className="inline-block border-2 border-black border-solid w-10 h-10 rounded-full bg-blue-500 hover:bg-blue-600 hover:scale-110"></div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
