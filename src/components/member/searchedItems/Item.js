import { useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";

const Item = ({ board }) => {
  const [isBookmark, setIsBookmark] = useState(false);
  const regex = /(^[가-힣]+시 [가-힣]+구)|(^[가-힣]+도 [가-힣]+[시|군|구])/g;
  const shortAddress = board.address?.match(regex).join("");
  
  return (
    <div className="w-full h-80 relative">
      <Link to={`/jobs/${board.j_id}`} className="block w-full h-full">
        <div className="flex justify-center items-center w-full h-3/5 rounded-md overflow-hidden shadow-md">
          <img
            src="https://www.cvpartners.co.kr/Content/images/house/1/5.png"
            alt="company img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-2/5 relative">
          <p className="py-2 text-lg font-bold">{board.job_type}</p>
          <p className="text-neutral-500">{board.c_name}</p>
          <p className="py-2 text-neutral-500">{shortAddress}</p>
          <p className="mt-5 text-neutral-600 font-semibold absolute bottom-2">
            {board.payment_type} {board.payment}원
          </p>
        </div>
      </Link>
      <button
        onClick={() => setIsBookmark((prev) => !prev)}
        className="absolute top-0 right-0 z-20"
      >
        {isBookmark ? (
          <MdBookmark fontSize={40} className="text-blue-500" stroke="white" />
        ) : (
          <MdBookmarkBorder fontSize={40} className="text-white opacity-80" />
        )}
      </button>
    </div>
  );
};

export default Item;
