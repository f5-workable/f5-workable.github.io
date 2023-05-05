import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/member/Home";
import Resume from "../pages/member/Resume";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import UserDetail from "../components/UserDetail";
import UserDetailBar from "../components/UserDetailBar";

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
        <Route path="/profile" 
          element={
            <div className=" mx-24 flex justify-center">
              <UserDetailBar />
              <UserDetail />
            </div>} />
        <Route path="/resume" element={<Resume />} />
      </Route>
    </Routes>
  );
};

export default MemberRouter;
