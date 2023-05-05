import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/company/Home";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import CompanyHeader from "../components/CompanyHeader";
import Search from "../pages/company/Search";

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
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/jobs" element={<span>전체 구직 페이지</span>} />
        <Route path="/jobs/:jobId" element={<span>상세페이지</span>} />
        <Route path="/search" element={<Search />} />
        <Route path="/profile" element={<span>프로필</span>} />
      </Route>
    </Routes>
  );
};

export default CompanyRouter;
