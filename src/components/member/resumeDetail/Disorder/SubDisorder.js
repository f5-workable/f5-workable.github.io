import { useEffect, useState } from "react";

const SubDisorder = ({value, state, setState}) => {
    const [isChecked, setIsChecked] = useState(value===state);

    useEffect(() => {
        setIsChecked(value === state);
    }, [value, state]);

    return (
        <div>
            <input type="checkbox" id={value} value={value} onClick={ () => setState(value) } checked={isChecked ? true : false} />
            <label htmlFor={value} className="px-2">{value}</label>
        </div>
    );//
  };
  
  export default SubDisorder;
  