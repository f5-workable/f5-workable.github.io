import { useState } from "react";
import CompanyRouter from "./routes/CompanyRouter";
import MemberRouter from "./routes/MemberRouter";

function App() {
  const [isCompany, setIsCompany] = useState(false);
  const [isLogined, setIsLogined] = useState(false);

  const toggleIsCompany = () => {
    setIsCompany((prev) => !prev);
  };

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
