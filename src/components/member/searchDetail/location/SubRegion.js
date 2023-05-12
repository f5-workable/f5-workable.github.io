const SubRegion = ({ value, labelValue, onChange }) => {
  return (
    <li className="w-full h-full p-3">
      <input
        type="checkbox"
        id={labelValue}
        name="location"
        value={value}
        onChange={onChange}
        className="h-4 w-4 mb-1 border-gray-300 align-middle"
      />
      <label htmlFor={labelValue} className="pl-2 text-neutral-600">
        {labelValue}
      </label>
    </li>
  );
};

export default SubRegion;
