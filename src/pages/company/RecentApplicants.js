import SearchedItems from "../../components/company/searchedItems";

const RecentApplicants = () => {
  const recentViewedResumes = JSON.parse(localStorage.getItem("recentViewedResume"));
  recentViewedResumes?.reverse();

  return (
    <main className="w-full h-full pt-14 pb-10 ">
      <div className="w-11/12 lg:w-3/4 h-auto min-h-full mx-auto">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-neutral-800">최근 본 지원자</h2>
        </div>
        <SearchedItems resumes={recentViewedResumes} />
      </div>
    </main>
  );
};

export default RecentApplicants;
