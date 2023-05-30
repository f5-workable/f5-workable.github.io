import { useEffect } from "react";
import api from "../../api";
import SearchedItems from "../../components/member/searchedItems";
import { useState } from "react";

const Bookmark = () => {
  const [boards, setBoards] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getBookmarks = async () => {
    setIsLoading(true);
    const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
    const { data } = await api.bookmark.retrieveByMemberId(memberId);
    setBoards(data.list);
    setIsLoading(false);
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
        <SearchedItems isLoading={isLoading} boards={boards} />
        <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
          {isLoading &&
            Array.from(Array(12)).map((_, idx) => (
              <div
                role="status"
                key={idx}
                className="max-w-sm p-4 border border-gray-200 rounded shadow animate-pulse md:p-6 dark:border-gray-700"
              >
                <div className="flex items-center justify-center h-48 mb-4 bg-gray-300 rounded dark:bg-gray-700">
                  <svg
                    className="w-12 h-12 text-gray-200 dark:text-gray-600"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                    fill="currentColor"
                    viewBox="0 0 640 512"
                  >
                    <path d="M480 80C480 35.82 515.8 0 560 0C604.2 0 640 35.82 640 80C640 124.2 604.2 160 560 160C515.8 160 480 124.2 480 80zM0 456.1C0 445.6 2.964 435.3 8.551 426.4L225.3 81.01C231.9 70.42 243.5 64 256 64C268.5 64 280.1 70.42 286.8 81.01L412.7 281.7L460.9 202.7C464.1 196.1 472.2 192 480 192C487.8 192 495 196.1 499.1 202.7L631.1 419.1C636.9 428.6 640 439.7 640 450.9C640 484.6 612.6 512 578.9 512H55.91C25.03 512 .0006 486.1 .0006 456.1L0 456.1z" />
                  </svg>
                </div>
                <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-32 mb-2.5"></div>
                <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 w-28 mb-2.5"></div>
                <div className="h-3 bg-gray-200 rounded-full dark:bg-gray-700 w-24"></div>
                <span className="sr-only">Loading...</span>
              </div>
            ))}
        </div>
      </div>
    </main>
  );
};

export default Bookmark;
