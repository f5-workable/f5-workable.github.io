const Checkbox = ({ value, labelValue, onChange, defaultChecked }) => {
  return (
    <p className="p-4">
      <input
        type="checkbox"
        id={value}
        name="education-type"
        value={value}
        onChange={onChange}
        className="h-4 w-4 mb-1 border-gray-300 align-middle"
        defaultChecked={defaultChecked}
      />
      <label htmlFor={value} className="pl-2">
        {labelValue}
      </label>
    </p>
  );
};

export default Checkbox;
