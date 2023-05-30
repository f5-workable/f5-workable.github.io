import { MdAdd } from "react-icons/md";
import HeaderSlider from "../../components/company/slider/header";
import CustomCompanySlider from "../../components/company/slider/company";
import CustomMemberSlider from "../../components/company/slider/member";
import { useEffect, useState } from "react";
import api from "../../api";
import { Link, useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  const [companyBoards, setCompanyBoards] = useState();
  const recentViewedResumes = JSON.parse(localStorage.getItem("recentViewedResume"));
  recentViewedResumes?.reverse();

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
        <Link to="/company/boards" className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">우리 기업 공고</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </Link>
        <CustomCompanySlider boards={companyBoards} />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <Link to="/recent/applicants" className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">최근 본 지원자</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </Link>
        <CustomMemberSlider resumes={recentViewedResumes} />
      </section>
    </main>
  );
}

export default Home;
