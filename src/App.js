import { useEffect, useState } from "react";
import CompanyRouter from "./routes/CompanyRouter";
import MemberRouter from "./routes/MemberRouter";

function App() {
  const [isCompany, setIsCompany] = useState(false);

  useEffect(() => {
    setIsCompany(false);
  }, []);
  
  return <>{isCompany ? <CompanyRouter /> : <MemberRouter />}</>;
}

export default App;
