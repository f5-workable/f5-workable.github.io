import { useState } from "react";
import SearchDetail from "../../components/company/searchDetail";
import SearchedItems from "../../components/company/searchedItems";
import { useLocation, useNavigate } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import api from "../../api";
import { IoMdArrowRoundUp } from "react-icons/io";

const Search = () => {
  const history = useLocation();
  const navigate = useNavigate();
  const [isArrowBtnClicked, setIsArrowBtnClicked] = useState(false);
  const [sortBy, setSortBy] = useState("최신순");
  const [careerType, setCareerType] = useState([]);
  const [disabilityType, setDisabilityType] = useState([]);
  const [educationType, setEducationType] = useState([]);
  const [severityType, setSeverityType] = useState([]);
  const [location, setLocation] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordType, setKeywordType] = useState("업종");
  const [searchedTotal, setSearchedTotal] = useState(0);
  const [resumes, setResumes] = useState(
    /** @type {import("../../api/resume").SearchedResumes} */ ([])
  );

  const hiddenDropdown = () => {
    const dropdown = document.getElementById("detail-search-dropdown");
    dropdown.classList.add("hidden");
    setIsArrowBtnClicked(false);
  };

  const searchResumes = async (e, changedSortBy) => {
    e.preventDefault();
    console.log(
      paymentType,
      severityType,
      disabilityType,
      location,
      educationType,
      keyword,
      keywordType,
      changedSortBy || sortBy
    );
    const {
      data: { list, total },
    } = await api.resume.search(
      paymentType,
      severityType,
      disabilityType,
      location,
      educationType,
      keyword,
      keywordType,
      sortBy
    );
    hiddenDropdown();
    setSearchedTotal(total);
    setResumes(list);
    navigate("/search", {
      state: { resumes: list, searchedTotal: total },
      replace: true,
    });
  };

  const changeSortByAndSearch = (e) => {
    setSortBy(e.target.value);
    if (history.state) {
      searchResumes(e, e.target.value);
    }
  };

  return (
    <main className="w-full h-full py-10">
      <form onSubmit={searchResumes} className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div className="mb-20 w-5/6 max-w-4xl mx-auto bg-neutral-50 p-10 rounded-2xl border-2 border-neutral-100">
          <div className="relative mb-4 overflow-hidden">
            <select
              name="keyword-type"
              className="absolute top-1/2 -translate-y-1/2 left-3 p-3 bg-transparent outline-none text-lg"
              value={keywordType}
              onChange={(e) => {
                setKeywordType(e.target.value);
                searchResumes();
              }}
            >
              <option value="업종">업종</option>
            </select>
            <input
              id="keyword"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
              className="w-full pl-28 px-4 py-4 rounded-3xl border-2 outline-2 focus:outline-indigo-300 text-lg"
              placeholder="검색어를 입력해주세요."
            />
            <button className="w-1/12 py-1 bg-transparent text-neutral-500 absolute top-3 right-2 flex justify-center">
              <MdSearch fontSize={28} />
            </button>
          </div>
          <SearchDetail
            state={{
              careerType,
              disabilityType,
              educationType,
              severityType,
              location,
              paymentType,
              isArrowBtnClicked,
            }}
            setState={{
              setCareerType,
              setDisabilityType,
              setEducationType,
              setSeverityType,
              setLocation,
              setPaymentType,
              setIsArrowBtnClicked,
            }}
          />
        </div>
        <div className="flex justify-between items-center pb-8 mb-8 border-b border-neutral-300">
          <h2 className="text-3xl font-bold text-neutral-700">
            검색결과 - {history.state?.searchedTotal || searchedTotal}건
          </h2>
          <select
            className="px-3 py-2 border border-neutral-300 rounded-lg text-lg text-neutral-600"
            onChange={changeSortByAndSearch}
          >
            <option value="최신순">최신순</option>
            <option value="임금순">희망임금순</option>
          </select>
        </div>
      </form>
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <SearchedItems resumes={history.state?.resumes || resumes} />
      </div>
      <button
        className="fixed bottom-28 right-16 border border-neutral-500 rounded-full p-3"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      >
        <IoMdArrowRoundUp fontSize={34} className="text-neutral-600" />
      </button>
    </main>
  );
};

export default Search;
