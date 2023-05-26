import { useEffect } from "react";
import SearchedItems from "../../components/member/searchedItems";

const RecentViewedBoards = () => {
  const recentViewedBoards = JSON.parse(localStorage.getItem("recentViewedBoard"));
  recentViewedBoards.reverse();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto min-h-full mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800">최근 본 공고</h2>
        </div>
        <SearchedItems boards={recentViewedBoards} />
      </div>
    </main>
  );
};

export default RecentViewedBoards;
