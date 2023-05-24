import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";
import Location from "./location";
import CompanyType from "./companyType";
import EmploymentType from "./employmentType";
import PaymentType from "./paymentType";
import CareerType from "./careerType";
import EducationType from "./educationType";

const SearchDetail = ({ state, setState }) => {
  const {
    careerType,
    companyType,
    educationType,
    employmentType,
    location,
    paymentType,
    isArrowBtnClicked,
  } = state;
  const {
    setCareerType,
    setCompanyType,
    setEducationType,
    setEmploymentType,
    setLocation,
    setPaymentType,
    setIsArrowBtnClicked,
  } = setState;

  const initSearchCondition = () => {
    setCareerType([]);
    setCompanyType([]);
    setEducationType([]);
    setEmploymentType([]);
    setLocation([]);
    setPaymentType([]);
  };

  const toggleIsArrowBtnClicked = () => {
    setIsArrowBtnClicked((prev) => !prev);
  };

  const toggleDropdown = () => {
    const dropdown = document.getElementById("detail-search-dropdown");
    dropdown.classList.toggle("hidden");
    toggleIsArrowBtnClicked();
  };

  return (
    <div className="w-full">
      <button
        type="button"
        className="flex justify-between w-full border-b-white border-solid"
        onClick={toggleDropdown}
      >
        <p className="my-2 text-xl font-bold">상세 조건</p>
        {isArrowBtnClicked ? (
          <MdArrowDropUp fontSize={35} />
        ) : (
          <MdArrowDropDown fontSize={35} />
        )}
      </button>
      <div id="detail-search-dropdown" className="px-5 hidden">
        <CompanyType state={companyType} setState={setCompanyType} />
        <EmploymentType state={employmentType} setState={setEmploymentType} />
        <PaymentType state={paymentType} setState={setPaymentType} />
        <CareerType state={careerType} setState={setCareerType} />
        <EducationType state={educationType} setState={setEducationType} />
        <div className="mt-8 w-full mb-5">
          <p className="block text-lg font-medium mb-2">지역</p>
          <Location state={location} setState={setLocation} />
        </div>
        <button
          type="button"
          className="px-8 py-4 mt-10 bg-white border-blue-400 text-blue-500 rounded-3xl border-2 mr-5"
          onClick={initSearchCondition}
        >
          조건 초기화
        </button>
        <button className="px-8 py-4 mt-10 bg-blue-400 text-white rounded-3xl border-2">
          검색
        </button>
      </div>
    </div>
  );
};

export default SearchDetail;
