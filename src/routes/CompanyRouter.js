import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/company/Home";
import Footer from "../components/Footer";
import CompanyHeader from "../components/CompanyHeader";
import Search from "../pages/company/Search";
import ApplicantStatus from "../pages/company/ApplicantStatus";
import UserDetail from "../pages/company/UserDetail";
import UserDetailModify from "../pages/company/UserDetailModify";
import ResumeRead from "../pages/company/ResumeRead";

const CompanyRouter = ({ toggleIsCompany, isLogined, setIsLogined }) => {
  return (
    <Routes>
      <Route
        element={
          <>
            <CompanyHeader toggleIsCompany={toggleIsCompany} isLogined={isLogined} setIsLogined={setIsLogined} />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/status/applicant" element={<ApplicantStatus />} />
        <Route path="/search" element={<Search />} />
        <Route path="/jobs/:jobId" element={<span>상세페이지</span>} />
        <Route path="/userdetail" element={<UserDetail />} />
        <Route path="/userdetailmodify" element={<UserDetailModify />} />
        <Route path="/resume/:resumeId" element={<ResumeRead />} />
      </Route>
    </Routes>
  );
};

export default CompanyRouter;
