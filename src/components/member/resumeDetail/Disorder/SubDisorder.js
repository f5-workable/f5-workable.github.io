const SubDisorder = ({value, setState}) => {
    return (
        <div>
            <input type="checkbox" id={value} value={value} onClick={ () => setState(value) } />
            <label htmlFor={value} className="px-2">{value}</label>
        </div>
    );
  };
  
  export default SubDisorder;
  