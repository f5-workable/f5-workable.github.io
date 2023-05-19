import SearchedItems from "../../components/member/searchedItems";
import SearchDetail from "../../components/member/searchDetail";
import { useState } from "react";
import api from "../../api";
import { MdSearch } from "react-icons/md";

const Search = () => {
  const [sortBy, setSortBy] = useState("최신순");
  const [careerType, setCareerType] = useState([]);
  const [companyType, setCompanyType] = useState([]);
  const [educationType, setEducationType] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [location, setLocation] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordType, setKeywordType] = useState("기업명");

  const searchCompanyBoard = async (e) => {
    e.preventDefault();
    const { data } = await api.companyBoard.search({
      employment_type: employmentType.length === 0 ? null : employmentType,
      payment_type: paymentType.length === 0 ? null : paymentType,
      temp_address: location.length === 0 ? null : location,
      tempcompany_type: companyType.length === 0 ? null : companyType,
      tempjob_type: keywordType.length === 0 ? null : keywordType,
      keyword: keyword.length === 0 ? null : keyword,
    });
    console.log(
      employmentType.length === 0 ? null : employmentType,
      paymentType.length === 0 ? null : paymentType,
      location.length === 0 ? null : location,
      companyType.length === 0 ? null : companyType,
      keywordType.length === 0 ? null : keywordType,
      keyword.length === 0 ? null : keyword
    );
  };

  return (
    <main className="w-full h-full py-10">
      <form
        onSubmit={searchCompanyBoard}
        className="mb-20 w-5/6 max-w-4xl mx-auto bg-neutral-100 p-10 rounded-2xl border-2 border-solid border-neutral-200"
      >
        <div className="relative mb-4 overflow-hidden">
          <select
            name="keyword-type"
            className="absolute top-1/2 -translate-y-1/2 left-3 p-3 bg-transparent outline-none text-lg"
            value={keywordType}
            onChange={(e) => setKeywordType(e.target.value)}
          >
            <option value="기업명">기업명</option>
            <option value="업종">업종</option>
          </select>
          <input
            id="keyword"
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            className="w-full pl-28 px-4 py-4 rounded-3xl border-2 focus:outline-orange-500 text-lg"
            placeholder="검색어를 입력해주세요."
          />
          <button className="w-1/12 py-1 bg-transparent text-neutral-500 absolute top-3 right-2 flex justify-center">
            <MdSearch fontSize={28} />
          </button>
        </div>
        <SearchDetail
          state={{
            careerType,
            companyType,
            educationType,
            employmentType,
            location,
            paymentType,
          }}
          setState={{
            setCareerType,
            setCompanyType,
            setEducationType,
            setEmploymentType,
            setLocation,
            setPaymentType,
          }}
        />
      </form>
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div className="flex justify-between items-center pb-8 mb-8 border-b border-solid border-neutral-300">
          <h2 className="text-3xl font-bold text-neutral-700">검색결과 - 10건</h2>
          <select
            className="px-3 py-2 border border-solid border-neutral-300 rounded-lg text-lg text-neutral-600"
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="최신순">최신순</option>
            <option value="임금순">임금순</option>
            <option value="마감일순">마감일순</option>
            <option value="등록일순">등록일순</option>
          </select>
        </div>
        <SearchedItems />
      </div>
    </main>
  );
};

export default Search;
