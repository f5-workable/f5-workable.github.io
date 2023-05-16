const ResumeBtn = ({ state, setState, idx }) => {
  const handleBtnClick = () => {
    setState(idx);
  };
  return (
    <button
      type="radio"
      name="resumeBtn"
      className={`w-full h-14 flex items-center pl-5 border border-solid rounded-lg ${
        state === idx
          ? "bg-blue-50 text-blue-500 border-blue-300"
          : "border-neutral-300 hover:bg-neutral-100"
      }`}
      onClick={handleBtnClick}
    >
      이력서 제목 {idx}
    </button>
  );
};

export default ResumeBtn;
