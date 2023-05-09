import { MdArrowBackIosNew, MdArrowForwardIos } from "react-icons/md";

const ArrowBtn = ({ isLeft, onClick, classNames, fontSize }) => {
  return (
    <>
      {isLeft ? (
        <button onClick={onClick} className={"p-2 absolute z-10 " + classNames}>
          <MdArrowBackIosNew fontSize={fontSize} />
        </button>
      ) : (
        <button onClick={onClick} className={"p-2 absolute z-10 " + classNames}>
          <MdArrowForwardIos fontSize={fontSize} />
        </button>
      )}
    </>
  );
};

export default ArrowBtn;
