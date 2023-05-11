import Item from "./Item";

const SearchedItems = () => {
  return (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
        <Item key={idx} idx={idx} />
      ))}
    </div>
  );
};

export default SearchedItems;
