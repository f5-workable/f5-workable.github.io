import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../../../../api";

const Item = ({ resume }) => {
  const [memberInfo, setMemberInfo] = useState();

  const getMemberInfo = useCallback(async () => {
    const info = await api.member.retrieve(resume.m_num);
    setMemberInfo(info);
  }, [resume]);

  useEffect(() => {
    getMemberInfo();
  }, [getMemberInfo]);

  return (
    <Link to={`/resume/${resume.r_id}`} className="block w-full h-80">
      <div className="w-full h-full">
        <div className="flex justify-center items-center w-full h-3/5 rounded-md overflow-hidden shadow-md">
          <img
            src="https://www.cvpartners.co.kr/Content/images/house/1/5.png"
            alt="company img"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="w-full h-2/5 relative">
          <p className="py-2 text-lg font-bold">{memberInfo?.name || "이름없음"}</p>
          <p className="text-neutral-500">
            {resume.ob_type} | {resume.disease}
          </p>
          <p className="py-2 text-neutral-500">{resume.job}</p>
          <p className="mt-5 font-semibold absolute bottom-2">
            희망{resume.payment_type} {resume.payment?.toLocaleString()}원
          </p>
        </div>
      </div>
    </Link>
  );
};

export default Item;
