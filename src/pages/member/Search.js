
import SearchedItems from "../../components/member/SearchedItems";
import SearchDetail from "../../components/member/searchDetail";

const Search = () => {
  return (
      <main className="w-full h-full py-10">
        <SearchDetail />
        <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
          <div>
            <h2 className="text-2xl font-bold">검색결과 - 10개</h2>
          </div>
          <SearchedItems />
        </div>
      </main>
  );
};

export default Search;
