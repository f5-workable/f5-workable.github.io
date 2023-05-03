import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/member/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import Search from "../pages/member/Search";

const MemberRouter = ({ handleIsCompany }) => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header handleIsCompany={handleIsCompany} />
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

export default MemberRouter;
