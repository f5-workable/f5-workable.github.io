import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/company/Home";
import Footer from "../components/Footer";
import LoginCom from "../pages/auth/LoginCom";
import SignUpCom from "../pages/auth/SignUpCom";
import CompanyHeader from "../components/CompanyHeader";

const CompanyRouter = ({ handleIsCompany }) => {
  return (
    <Routes>
      <Route
        element={
          <>
            <CompanyHeader handleIsCompany={handleIsCompany} />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/logincom" element={<LoginCom />} />
        <Route path="/signupcom" element={<SignUpCom />} />
        <Route path="/jobs" element={<span>전체 구직 페이지</span>} />
        <Route path="/jobs/:jobId" element={<span>상세페이지</span>} />
        <Route path="/profile" element={<span>프로필</span>} />
      </Route>
    </Routes>
  );
};

export default CompanyRouter;
