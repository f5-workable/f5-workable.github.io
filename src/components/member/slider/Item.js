import { useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Item = ({ key, className }) => {
  const [isBookmark, setIsBookmark] = useState(false);

  return (
  <div className="w-full h-80 relative">
      <Link to={`/jobs/${key}`} className="block w-full h-full">
        <div className="flex justify-center items-center w-full h-3/5 rounded-md overflow-hidden shadow-md">
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
      </Link>
      <button
        onClick={() => setIsBookmark((prev) => !prev)}
        className="absolute top-0 right-0 z-20"
      >
        {isBookmark ? (
          <MdBookmark fontSize={40} className="text-blue-500" stroke="white" />
        ) : (
          <MdBookmarkBorder fontSize={40} className="text-white opacity-80"/>
        )}
      </button>
    </div>
  );
};

export default Item;
