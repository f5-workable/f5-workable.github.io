import { useState } from "react";
import CompanyRouter from "./routes/CompanyRouter";
import MemberRouter from "./routes/MemberRouter";

function App() {
  const [isCompany, setIsCompany] = useState(false);

  const handleIsCompany = () => {
    setIsCompany((prev) => !prev);
  };

  return (
    <>
      {isCompany ? (
        <CompanyRouter handleIsCompany={handleIsCompany} />
      ) : (
        <MemberRouter handleIsCompany={handleIsCompany} />
      )}
    </>
  );
}

export default App;
