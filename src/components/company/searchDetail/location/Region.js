const Region = ({ selectedLocation, onClick, value }) => {
  return (
    <>
      {value === "전체" ? (
        <li
          id="location"
          className={
            "w-full h-10 col-span-2" +
            (selectedLocation === value ? " bg-blue-50" : " bg-white")
          }
        >
          <button
            type="button"
            onClick={onClick}
            className={
              "w-full h-full text-left p-3" +
              (selectedLocation === value ? " text-blue-500" : "")
            }
          >
            {value}
          </button>
        </li>
      ) : (
        <li
          id="location"
          className={
            "w-full h-10" + (selectedLocation === value ? " bg-blue-50" : " bg-white")
          }
        >
          <button
            type="button"
            onClick={onClick}
            className={
              "w-full h-full text-left p-3" +
              (selectedLocation === value ? " text-blue-500" : "")
            }
          >
            {value}
          </button>
        </li>
      )}
    </>
  );
};

export default Region;
