import SearchedItems from "../../components/member/searchedItems";
import SearchDetail from "../../components/member/searchDetail";
import { useCallback, useEffect, useRef, useState } from "react";
import api from "../../api";
import { IoMdArrowRoundUp } from "react-icons/io";
import { MdSearch } from "react-icons/md";
import { useLocation, useNavigate } from "react-router-dom";

const Search = () => {
  const infiniteScrollRef = useRef(null);
  const history = useLocation();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [isArrowBtnClicked, setIsArrowBtnClicked] = useState(false);
  const [sortBy, setSortBy] = useState("최신순");
  const [careerType, setCareerType] = useState([]);
  const [companyType, setCompanyType] = useState([]);
  const [educationType, setEducationType] = useState([]);
  const [employmentType, setEmploymentType] = useState([]);
  const [location, setLocation] = useState([]);
  const [paymentType, setPaymentType] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [keywordType, setKeywordType] = useState("기업명");

  const hiddenDropdown = () => {
    const dropdown = document.getElementById("detail-search-dropdown");
    dropdown.classList.add("hidden");
    setIsArrowBtnClicked(false);
  };

  const searchCompanyBoard = async (e, changedSortBy) => {
    e?.preventDefault();
    if (!isLoading) {
      setIsLoading(true);
      const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
      const {
        data: { list, total, pages },
      } = await api.companyBoard.search(
        employmentType,
        paymentType,
        location,
        companyType,
        keywordType,
        keyword,
        changedSortBy || sortBy,
        memberId
      );
      hiddenDropdown();
      await navigate("/search", {
        state: {
          boards: list,
          searchedTotal: total,
          sortBy: changedSortBy || sortBy,
          page: 1,
          lastPage: pages,
        },
        replace: true,
      });
      window.scrollTo(0, 0);
      setIsLoading(false);
    }
  };

  const changeSortByAndSearch = (e) => {
    setSortBy(e.target.value);
    // 검색된 결과가 있다면 정렬 기준과 함께 바로 재검색
    if (history.state) {
      searchCompanyBoard(e, e.target.value);
    }
  };

  // infinite scroll 콜백
  const loadMore = useCallback(
    async (entries) => {
      if (
        entries[0].isIntersecting &&
        !isLoading &&
        history.state?.boards.length > 0 &&
        history.state?.page < history.state?.lastPage
      ) {
        await setIsLoading(true);
        const { page, lastPage, boards } = history.state;
        const memberId =
          localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
        const {
          data: { list, total },
        } = await api.companyBoard.search(
          employmentType,
          paymentType,
          location,
          companyType,
          keywordType,
          keyword,
          history.state?.sortBy || sortBy,
          memberId,
          page + 1
        );
        await navigate("/search", {
          state: {
            boards: [...boards, ...list],
            searchedTotal: total,
            sortBy: sortBy,
            page: page + 1,
            lastPage: lastPage,
          },
          replace: true,
        });
        await setIsLoading(false);
      }
    },
    [history.state]
  );

  // infinite scroll 옵션
  const observer = new IntersectionObserver(loadMore, { threshold: 1 });
  useEffect(() => {
    observer.observe(infiniteScrollRef.current);
    return () => observer.disconnect();
  }, [loadMore, history.state]);

  return (
    <main className="w-full h-full py-10">
      <form onSubmit={searchCompanyBoard} className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <div className="mb-20 w-5/6 max-w-4xl mx-auto bg-neutral-50 p-10 rounded-2xl border-2 border-solid border-neutral-100">
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
              className="w-full pl-28 px-4 py-4 rounded-3xl border-2 outline-2 focus:outline-indigo-300 text-lg"
              placeholder="검색어를 입력해주세요."
              autoFocus
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
              isArrowBtnClicked,
            }}
            setState={{
              setCareerType,
              setCompanyType,
              setEducationType,
              setEmploymentType,
              setLocation,
              setPaymentType,
              setIsArrowBtnClicked,
            }}
          />
        </div>
        <div className="flex justify-between items-center pb-8 mb-8 border-b border-solid border-neutral-300">
          <h2 className="text-3xl font-bold text-neutral-700">
            검색결과 - {history.state?.searchedTotal || 0}건
          </h2>
          <select
            className="px-3 py-2 border border-solid border-neutral-300 rounded-lg text-lg text-neutral-600"
            value={history.state?.sortBy || sortBy}
            onChange={changeSortByAndSearch}
          >
            <option value="최신순">최신순</option>
            <option value="임금순">임금순</option>
            <option value="마감일순">마감일순</option>
          </select>
        </div>
      </form>
      <div className="w-11/12 lg:w-3/4 h-auto mx-auto">
        <SearchedItems boards={history.state?.boards || []} />
      </div>
      {isLoading && (
        <div className="flex justify-center">
          <div
            className="animate-spin w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full"
            role="status"
            aria-label="loading"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )}
      <div ref={infiniteScrollRef} className="h-1"></div>
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
