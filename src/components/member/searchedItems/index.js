import Item from "./Item";

const SearchedItems = ({ boards, isLoading }) => {
  return (
    <>
      {boards?.length === 0 && !isLoading && (
        <p className="text-xl text-neutral-400 text-center mt-40">기업이 존재하지 않습니다.</p>
      )}
      {boards?.length > 0 && (
        <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
          {boards?.map((board) => (
            <Item key={board.j_id} board={board} />
          ))}
        </div>
      )}
    </>
  );
};

export default SearchedItems;
