import { useEffect, useState } from "react";
import CompanyRouter from "./routes/CompanyRouter";
import MemberRouter from "./routes/MemberRouter";

function App() {
  const [isCompany, setIsCompany] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const toggleIsCompany = () => {
    setIsCompany((prev) => !prev);
  };

  useEffect(() => {
    const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
    const companyId = localStorage.getItem("companyId") || sessionStorage.getItem("companyId");
    memberId ? setIsLogined(true) : setIsLogined(false);
    if (companyId) {
      setIsLogined(true);
      setIsCompany(true);
    } else {
      setIsLogined(true);
      setIsCompany(false);
    }
  }, []);

  return (
    <>
      {isLogined && isCompany ? (
        <CompanyRouter
          toggleIsCompany={toggleIsCompany}
          isLogined={isLogined}
          setIsLogined={setIsLogined}
        />
      ) : (
        <MemberRouter
          toggleIsCompany={toggleIsCompany}
          isLogined={isLogined}
          setIsLogined={setIsLogined}
        />
      )}
    </>
  );
}

export default App;
