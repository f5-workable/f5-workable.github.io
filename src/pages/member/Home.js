import { MdAdd } from "react-icons/md";
import CustomSlider from "../../components/member/slider";

function Home() {
  return (
    <main className="w-full mx-auto">
      <section className="w-full mt-7 mb-20">
        <CustomSlider isHeader />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-semibold inline mr-5">새로운 공고</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </div>
        <CustomSlider />
      </section>
      <section className="w-5/6 lg:w-3/4 mb-20 mx-auto">
        <div className="flex items-center border-b border-solid pb-3 border-neutral-500">
          <h2 className="text-2xl font-semibold inline mr-5">최근 본 공고</h2>
          <MdAdd
            className="inline border border-solid border-orange-500 text-orange-500 rounded-full"
            fontSize={30}
          />
        </div>
        <CustomSlider />
      </section>
    </main>
  );
}

export default Home;
