import SearchedItems from "../../components/member/searchedItems";
import SearchDetail from "../../components/member/searchDetail";
import { useState } from "react";

const Search = () => {
  const [sortBy, setSortBy] = useState("");
  const ChangeSortBy = (e) => setSortBy(e.target.value);

  return (
    <main className="w-full h-full py-10">
      <SearchDetail />
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">검색결과 - 10개</h2>
          <select
            className="text-lg px-3 py-2 border border-solid border-neutral-300 rounded-lg text-neutral-600"
            onChange={ChangeSortBy}
          >
            <option value="최신순">최신순</option>
            <option value="임금순">임금순</option>
          </select>
        </div>
        <SearchedItems sortBy={sortBy} />
      </div>
    </main>
  );
};

export default Search;
