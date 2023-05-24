import { useState } from "react";
import { MdBookmark, MdBookmarkBorder } from "react-icons/md";
import { Link } from "react-router-dom";
import api from "../../../api";
import { useEffect } from "react";

const Item = ({ board }) => {
  const [isBookmark, setIsBookmark] = useState(false);

  const addBookmark = async () => {
    setIsBookmark((prev) => !prev);
    await api.bookmark.add(1, board.j_id);
  };

  const deleteBookmark = async () => {
    setIsBookmark((prev) => !prev);
    await api.bookmark.delete(1, board.j_id);
  };

  const regex = /(^[가-힣]+시 [가-힣]+구)|(^[가-힣]+도 [가-힣]+[시|군|구])/g;
  const shortAddress = board.address?.match(regex).join("");

  useEffect(() => {
    setIsBookmark(board.state);
  }, [board.state]);

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
          <p className="pt-2 text-lg font-bold truncate break-all">{board.job_type}</p>
          <p className="pt-1 text-neutral-500 font-medium truncate break-all">{board.c_name}</p>
          <p className="py-2 text-neutral-400">{shortAddress}</p>
          <p className="mt-5 text-lg text-neutral-600 font-semibold absolute bottom-2">
            {board.payment_type} {board.payment.toLocaleString()}원
          </p>
        </div>
      </Link>
      {isBookmark ? (
        <button onClick={deleteBookmark} className="absolute top-0 right-0 z-20">
          <MdBookmark fontSize={40} className="text-blue-500" stroke="white" />
        </button>
      ) : (
        <button onClick={addBookmark} className="absolute top-0 right-0 z-20">
          <MdBookmarkBorder fontSize={40} className="text-white opacity-80" />
        </button>
      )}
    </div>
  );
};

export default Item;
