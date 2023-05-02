import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import Home from "../pages/company/Home";
import Header from "../components/Header";
import Footer from "../components/Footer";

const CompanyRouter = () => {
  return (
    <Routes>
      <Route
        element={
          <>
            <Header />
            <Outlet />
            <Footer />
          </>
        }
      >
        <Route path="*" element={<Navigate to="/" replace />} />
        <Route path="/" element={<Home />} />
        <Route path="/jobs" element={<span>전체 구직 페이지</span>} />
        <Route path="/jobs/:jobId" element={<span>상세페이지</span>} />
        <Route path="/search" element={<span>상세 검색</span>} />
        <Route path="/profile" element={<span>프로필</span>} />
      </Route>
    </Routes>
  );
};

export default CompanyRouter;
