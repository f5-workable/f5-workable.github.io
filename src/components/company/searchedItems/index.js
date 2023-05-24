import Item from "./Item";

const SearchedItems = ({ resumes, applicants }) => {
  return applicants ? (
    applicants?.list?.length === 0 ? (
      <p className="text-xl text-neutral-400 text-center mt-40">지원자가 존재하지 않습니다.</p>
    ) : (
      <div className="w-full h-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">
        {applicants?.list?.map((resume) => (
        <Item key={resume.r_id} resume={resume} />
      ))}
      </div>
    )
  ) : resumes?.length === 0 ? (
    <p className="text-xl text-neutral-400 text-center mt-40">검색결과가 존재하지 않습니다.</p>
  ) : (
    <div className="w-full h-auto grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 pb-10">
       {resumes?.map((resume) => (
        <Item key={resume.r_id} resume={resume} />
      ))}
    </div>
  );
};

export default SearchedItems;
