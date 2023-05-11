const Kind = () => {
    return (
        <div className="flex flex-row ">
            <label htmlFor="kind1" className="flex items-center mr-4 my-2">
                <input type="radio" id="kind1" name="kind" value="개인" />
                <span className="ml-2">개인</span>
            </label>
            <label htmlFor="kind2" className="flex items-center mr-4 my-2">
                <input type="radio" id="kind2" name="kind" value="공사" />
                <span className="ml-2">공사/공공</span>
            </label>
            <label htmlFor="kind3" className="flex items-center mr-4 my-2">
                <input type="radio" id="kind3" name="kind" value="대기업" />
                <span className="ml-2">대기업</span>
            </label>
            <label htmlFor="kind4" className="flex items-center mr-4 my-2">
                <input type="radio" id="kind4" name="kind" value="외국계" />
                <span className="ml-2">외국계</span>
            </label>
            <label htmlFor="kind5" className="flex items-center mr-4 my-2">
                <input type="radio" id="kind5" name="kind" value="중소" />
                <span className="ml-2">중소</span>
            </label>
            <label htmlFor="kind6" className="flex items-center mr-4 my-2">
                <input type="radio" id="kind6" name="kind" value="협회" />
                <span className="ml-2">협회/단체</span>
            </label>
        </div>
    );
};

export default Kind;
