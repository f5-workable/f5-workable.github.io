import { MdAdd } from "react-icons/md";
import HeaderSlider from "../../components/company/slider/header";
import CustomCompanySlider from "../../components/company/slider/company";
import CustomMemberSlider from "../../components/company/slider/member";
import { useEffect, useState } from "react";
import api from "../../api";

function Home() {
  const [companyBoards, setCompanyBoards] = useState();

  const getBoardsByCompanyId = async () => {
    const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
    const { data } = await api.companyBoard.retrieveByCompanyId(companyId);
    setCompanyBoards(data);
  };

  useEffect(() => {
    getBoardsByCompanyId();
  }, []);

  return (
    <main className="w-full mx-auto">
      <section className="w-full mt-7 mb-20 bg-violet-50">
        <HeaderSlider />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">우리 기업 공고</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </div>
        <CustomCompanySlider boards={companyBoards} />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">새로운 지원자</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </div>
        <CustomMemberSlider />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">최근 본 지원자</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </div>
        <CustomMemberSlider />
      </section>
    </main>
  );
}

export default Home;
