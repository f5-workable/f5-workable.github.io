import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/company/Home";
import Footer from "../components/Footer";
import CompanyHeader from "../components/CompanyHeader";
import Search from "../pages/company/Search";
import ApplicantStatus from "../pages/company/ApplicantStatus";
import UserDetail from "../pages/company/UserDetail";
import UserDetailModify from "../pages/company/UserDetailModify";
import ResumeRead from "../pages/company/ResumeRead";
import CompanyDetail from "../pages/company/CompanyDetail";

const CompanyRouter = ({ toggleIsCompany, isLogined, setIsLogined }) => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        element={
          <>
            <CompanyHeader
              toggleIsCompany={toggleIsCompany}
              isLogined={isLogined}
              setIsLogined={setIsLogined}
            />
            <Outlet />
          </>
        }
      >
        <Route
          path="/"
          element={
            <>
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/resume/:resumeId"
          element={
            <>
              <ResumeRead />
            </>
          }
        />
        <Route
          path="/jobs/:jobId"
          element={
            <>
              <CompanyDetail />
              <div className="hidden xl:block">
                <Footer />
              </div>
            </>
          }
        />
        <Route path="/status/applicant" element={<ApplicantStatus />} />
        <Route path="/search" element={<Search />} />
        <Route path="/userdetail" element={<UserDetail />} />
        <Route path="/userdetailmodify" element={<UserDetailModify />} />
      </Route>
    </Routes>
  );
};

export default CompanyRouter;
