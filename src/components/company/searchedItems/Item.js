import { Link } from "react-router-dom";

const Item = ({ resume }) => {
  return (
    <Link to={`/resume/${resume.r_id}`} className="block w-full h-80">
      <div className="flex justify-center items-center w-full h-3/5 rounded-md overflow-hidden shadow-md">
        <img
          src="https://www.cvpartners.co.kr/Content/images/house/1/5.png"
          alt="company img"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-full h-2/5 relative">
        <p className="pt-2 text-lg font-bold">이름</p>
        <p className="pt-1 text-neutral-500 font-medium truncate break-all">장애유형 | 중증여부</p>
        <p className="py-2 text-neutral-500 truncate break-all">희망직종</p>
        <p className="mt-5 font-semibold absolute bottom-2">희망 임금 (원)</p>
      </div>
    </Link>
  );
};

export default Item;
