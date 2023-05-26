import { MdStar } from "react-icons/md";

const ResumeBtn = ({ state, setState, resume }) => {
  const handleBtnClick = () => {
    setState(resume.r_id);
  };
  return (
    <button
      type="radio"
      name="resumeBtn"
      className={`w-full h-14 relative flex items-center pl-5 border border-solid rounded-lg ${
        state === resume.r_id
          ? "bg-blue-50 text-blue-500 border-blue-300 truncate break-all"
          : "border-neutral-300 hover:bg-neutral-100 truncate break-all"
      }`}
      onClick={handleBtnClick}
    >
      {resume.r_default === resume.r_id && (
        <MdStar fontSize={30} className="text-yellow-500" />
      )}
      {resume.title}
    </button>
  );
};

export default ResumeBtn;
