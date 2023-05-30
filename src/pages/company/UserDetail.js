import UserDetailList from "../../components/company/userDetail/UserDetailList";
import UserDetailBar from "../../components/company/userDetail/UserDetailBar";

const UserDetail = ({ setIsLogined, toggleIsCompany }) => {
  return (
    <div className=" mx-24 flex justify-center">
      <UserDetailBar setIsLogined={setIsLogined} toggleIsCompany={toggleIsCompany} />
      <UserDetailList />
    </div>
  );
};

export default UserDetail;
