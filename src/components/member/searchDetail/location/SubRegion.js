const SubRegion = ({value, labelValue}) => {
  return (
    <li className="w-full h-full p-3">
      <input
        type="checkbox"
        id={value}
        name="region"
        value={value}
        className="h-4 w-4 mb-1 border-gray-300 align-middle"
      />
      <label htmlFor={value} className="pl-2 text-neutral-600">
        {labelValue}
      </label>
    </li>
  );
};

export default SubRegion;
