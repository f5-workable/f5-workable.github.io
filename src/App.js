import { useState } from "react";
import CompanyRouter from "./routes/CompanyRouter";
import MemberRouter from "./routes/MemberRouter";

function App() {
  const isCompany = useState(false);
  
  return <>{isCompany ? <CompanyRouter /> : <MemberRouter />}</>;
}

export default App;
