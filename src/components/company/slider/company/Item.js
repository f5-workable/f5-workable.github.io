import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Item = ({ board }) => {
  const [isDragging, setIsDragging] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    if (!isDragging) {
      navigate(`/jobs/${board.j_id}`);
    }
  };

  return (
    <div className="w-full h-72 relative">
      <Link
        onMouseMove={() => setIsDragging(true)}
        onMouseDown={() => setIsDragging(false)}
        onMouseUp={() => handleClick()}
        className="block w-full h-full"
      >
        <div className="flex justify-center items-center w-full h-3/5 rounded-md overflow-hidden shadow-md">
          <img
            src="https://www.cvpartners.co.kr/Content/images/house/1/5.png"
            alt="company img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-2/5 relative">
          <p className="pt-2 text-lg font-bold truncate break-all">{board.job_type}</p>
          <p className="mt-5 text-lg text-neutral-600 font-semibold absolute bottom-2">
            {board.d_date}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Item;
