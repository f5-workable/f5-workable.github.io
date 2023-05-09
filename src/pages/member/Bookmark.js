import SearchedItems from "../../components/member/searchedItems";

const Bookmark = () => {
  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto min-h-full mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800">북마크</h2>
        </div>
        <SearchedItems />
      </div>
    </main>
  );
};

export default Bookmark;
