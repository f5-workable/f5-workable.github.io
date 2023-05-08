const SubDisorder = ({value}) => {
    return (
        <div>
            <input type="checkbox" id={value} />
            <label htmlFor={value} className="px-2">{value}</label>
        </div>
    );
  };
  
  export default SubDisorder;
  