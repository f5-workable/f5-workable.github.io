const Item = ({ state, setState, idx }) => {
  return (
    <button
      type="button"
      className={`flex justify-between items-center w-full text-lg py-3 px-3 text-start break-words ${
        state === idx ? "bg-blue-50 text-blue-400" : "bg-white text-neutral-500"
      }`}
      onClick={() => setState(idx)}
    >
      <p>업종명</p>
      <p className="w-7 h-7 font-semibold text-lg text-blue-400 bg-blue-100 rounded-full flex justify-center items-center">
        4
      </p>
    </button>
  );
};

export default Item;
