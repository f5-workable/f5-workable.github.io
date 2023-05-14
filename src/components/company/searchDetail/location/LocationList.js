const LocationList = ({ state }) => {
  return (
    <>
      {state.length === 0 ? (
        <button
          type="button"
          className="w-auto px-5 py-3 border border-solid border-blue-500 text-blue-500 rounded-3xl mr-5 mb-5"
        >
          전체
        </button>
      ) : (
        state.map((value, idx) => (
          <button
            key={idx}
            type="button"
            className="w-auto px-5 py-3 border-2 border-solid border-blue-300 text-blue-400 rounded-3xl mr-5 mb-5"
          >
            {value}
          </button>
        ))
      )}
    </>
  );
};

export default LocationList;
