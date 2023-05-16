import Item from "./Item";

const SearchedItems = ({ boards }) => {
  return boards?.length === 0 ? (
    <p className="text-xl text-neutral-400 text-center mt-40">기업이 존재하지 않습니다.</p>
  ) : (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
        <Item idx={idx} key={idx} />
      ))}
    </div>
  );
};

export default SearchedItems;
