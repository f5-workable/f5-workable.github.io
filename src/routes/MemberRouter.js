import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/member/Home";
import ResumeWrite from "../pages/member/ResumeWrite";
import Resume from "../pages/member/Resume";
import Header from "../components/Header";
import Footer from "../components/Footer";
import LoginPer from "../pages/auth/LoginPer";
import SignUpPer from "../pages/auth/SignUpPer";
import LoginCom from "../pages/auth/LoginCom";
import SignUpCom from "../pages/auth/SignUpCom";
import UserDetail from "../components/UserDetail";
import UserDetailModify from "../components/UserDetailModify";
import UserDetailBar from "../components/UserDetailBar";
import Search from "../pages/member/Search";
import Bookmark from "../pages/member/Bookmark";
import ApplicationStatus from "../pages/member/ApplicationStatus";
import CompanyDetail from "../pages/member/CompanyDetail";
import UserTypeSelectionBeforeLogin from "../pages/auth/UserTypeSelectionBeforeLogin";
import UserTypeSelectionBeforeSignUp from "../pages/auth/UserTypeSelectionBeforeSignUp";

const MemberRouter = ({ handleIsCompany }) => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        element={
          <>
            <Header handleIsCompany={handleIsCompany} />
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
        <Route path="/login/member" element={<LoginPer />} />
        <Route path="/login/company" element={<LoginCom />} />
        <Route path="/signup/member" element={<SignUpPer />} />
        <Route path="/signup/company" element={<SignUpCom />} />
        <Route path="/signup" element={<UserTypeSelectionBeforeSignUp />} />
        <Route path="/login" element={<UserTypeSelectionBeforeLogin />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/:resumeId" element={<ResumeWrite />} />
        <Route path="/status/application" element={<ApplicationStatus />} />
        <Route
          path="/profile"
          element={
            <div className=" mx-24 flex justify-center">
              <UserDetailBar />
              <UserDetail />
            </div>
          }
        />
        <Route
          path="/userdetailmodify"
          element={
            <div className=" mx-24 flex justify-center">
              <UserDetailBar />
              <UserDetailModify />
            </div>
          }
        />
      </Route>
    </Routes>
  );
};

export default MemberRouter;
