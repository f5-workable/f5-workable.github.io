import { useEffect } from "react";
import api from "../../api";
import SearchedItems from "../../components/member/searchedItems";
import { useState } from "react";

const Bookmark = () => {
  const [boards, setBoards] = useState([]);
  
  const getBookmarks = async () => {
    const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
    const { data } = await api.bookmark.retrieveByMemberId(memberId);
    setBoards(data.list);
  };

  useEffect(() => {
    getBookmarks();
  }, []);

  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto min-h-full mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800">북마크</h2>
        </div>
        <SearchedItems boards={boards} />
      </div>
    </main>
  );
};

export default Bookmark;
