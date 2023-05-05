const Deadline = () => {
  return (
    <div>
      <p className="block my-2 text-lg font-semibold">마감기간</p>
      <div className="flex items-center">
        <div className="w-96 p-2 bg-white rounded-3xl flex justify-center items-center mr-5 border border-solid border-neutral-400">
          <input
            id="date-start"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="p-1"
          />
          <span className="mx-4">~</span>
          <input
            id="date-end"
            type="date"
            defaultValue={new Date().toISOString().split("T")[0]}
            className="p-1"
          />
        </div>
      </div>
    </div>
  );
};

export default Deadline;
