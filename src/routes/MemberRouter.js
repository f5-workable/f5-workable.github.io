import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import Home from "../pages/member/Home";
import ResumeRead from "../pages/member/ResumeRead";
import ResumeWrite from "../pages/member/ResumeWrite";
import Resume from "../pages/member/Resume";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Login from "../pages/auth/Login";
import SignUp from "../pages/auth/SignUp";
import UserDetail from "../components/UserDetail";
import UserDetailModify from "../components/UserDetailModify";
import UserDetailBar from "../components/UserDetailBar";
import Search from "../pages/member/Search";
import Bookmark from "../pages/member/Bookmark";
import ApplicationStatus from "../pages/member/ApplicationStatus";
import CompanyDetail from "../pages/member/CompanyDetail";

const MemberRouter = ({ handleIsCompany }) => {
  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />} />
      <Route
        path="/"
        element={
          <>
            <Header handleIsCompany={handleIsCompany} />
            <Home />
            <Footer />
          </>
        }
      />
      <Route
        element={
          <>
            <Header handleIsCompany={handleIsCompany} />
            <Outlet />
          </>
        }
      >
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/bookmark" element={<Bookmark />} />
        <Route path="/search" element={<Search />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/resume/:resumeId" element={<ResumeRead />} />
        <Route path="/resume/Add" element={<ResumeWrite />} />
        <Route path="/status/application" element={<ApplicationStatus />} />
        <Route path="/jobs/:jobId" element={<CompanyDetail />} />
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
