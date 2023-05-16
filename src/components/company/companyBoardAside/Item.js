const Item = ({ board, state, setState, id }) => {
  return (
    <button
      type="button"
      className={`flex justify-between items-center w-full text-lg py-3 px-3 text-start break-words ${
        state === id ? "bg-blue-50 text-blue-400" : "bg-white text-neutral-500"
      }`}
      onClick={() => setState(id)}
    >
      <div>
        <p>{board.job_type}</p>
        <p>마감: {board.d_date}</p>
      </div>
      <div className="w-7 h-7 font-semibold text-lg text-blue-400 bg-blue-100 rounded-full flex justify-center items-center">
        4
      </div>
    </button>
  );
};

export default Item;
