import { useState } from "react";
import SearchDetail from "../../components/company/searchDetail";
import SearchedItems from "../../components/company/searchedItems";

const Search = () => {
  const [sortBy, setSortBy] = useState("최신순");
  const ChangeSortBy = (e) => setSortBy(e.target.value);

  return (
    <main className="w-full h-full py-10">
      <SearchDetail />
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div className="flex justify-between items-center pb-8 mb-8 border-b border-solid border-neutral-300">
          <h2 className="text-3xl font-bold text-neutral-700">검색결과 - 10건</h2>
          <select
            className="px-3 py-2 border border-solid border-neutral-300 rounded-lg text-lg text-neutral-600"
            onChange={ChangeSortBy}
          >
            <option value="최신순">최신순</option>
            <option value="임금순">희망임금순</option>
          </select>
        </div>
        <SearchedItems sortBy={sortBy} />
      </div>
    </main>
  );
};

export default Search;
