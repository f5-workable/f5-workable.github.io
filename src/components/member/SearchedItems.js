const SearchedItems = () => {
  return (
    <div className="w-full h-auto my-5 grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8">
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, idx) => (
        <div key={idx} className="w-full h-80">
          <div className="w-full h-3/5 rounded-md overflow-hidden border-2 border-solid border-neutral-200">
            <img
              src="https://www.cvpartners.co.kr/Content/images/house/1/5.png"
              alt="company img"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full h-2/5 relative">
            <p className="py-2 text-lg font-bold">업종</p>
            <p className="text-neutral-500">기업명</p>
            <p className="py-2 text-neutral-500">주소</p>
            <p className="mt-5 font-semibold absolute bottom-2">임금 (원)</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SearchedItems;
