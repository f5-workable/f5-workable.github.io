import { MdAdd } from "react-icons/md";
import CustomSlider from "../../components/member/slider";
import { useEffect, useState } from "react";
import api from "../../api";
import { Link } from "react-router-dom";

function Home() {
  const [recentRegisteredBoards, setRecentRegisteredBoards] = useState([]);
  const recentViewedBoards = JSON.parse(localStorage.getItem("recentViewedBoard"));
  recentViewedBoards?.reverse();

  const getRecentRegisteredBoards = async () => {
    const { data } = await api.companyBoard.search([], [], [], [], [], [], "최신순");
    setRecentRegisteredBoards(data.list);
  };

  useEffect(() => {
    getRecentRegisteredBoards();
  }, []);

  return (
    <main className="w-full mx-auto">
      <section className="w-full mt-7 mb-20 bg-violet-50">
        <CustomSlider isHeader />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">신규 공고</h2>
          <Link to="/search">
            <MdAdd
              className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
              fontSize={30}
            />
          </Link>
        </div>
        <CustomSlider boards={recentRegisteredBoards} />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-medium inline mr-5">최근 본 공고</h2>
          <Link to="/recent/boards">
            <MdAdd
              className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
              fontSize={30}
            />
          </Link>
        </div>
        <CustomSlider boards={recentViewedBoards?.slice(0, 12)} />
      </section>
    </main>
  );
}

export default Home;
