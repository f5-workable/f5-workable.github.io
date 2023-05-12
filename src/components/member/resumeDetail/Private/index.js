const Private = ({setState, setState2}) => {
    const handleCheck = (e) => {
        setState(e.target.checked);
        setState2(e.target.checked);
        console.log(e.target.checked);
    }

    return (
        <>
            <label htmlFor="switch" className="px-2 font-semibold hover:cursor-pointer my-auto">이력서 공개 여부</label>
            <label className=" relative inline-block w-[3.438rem] h-[1.875rem]">
                <input type="checkbox" id="switch" className="opacity-0 w-0 h-0 peer" onChange={handleCheck} />
                <span className=" absolute cursor-pointer inset-0 rounded-[1.25rem] bg-[#ccc] shadow-[inset_1px_5px_1px_#999] transition-[.4s]
                                     before:absolute before:content-[''] before:h-[1.375rem] before:w-[1.375rem] before:left-1 before:right-1 before:bg-[#fff] before:mt-[0.188rem]
                                     before:transition-[.4s] before:rounded-[1.25rem] peer-checked:bg-[#F2D522] peer-checked:shadow-[inset_1px_5px_1px_#E3AE56]
                                     peer-checked:before:translate-x-[1.625rem]"></span>
            </label>
        </>
    );
  };
  
  export default Private;
