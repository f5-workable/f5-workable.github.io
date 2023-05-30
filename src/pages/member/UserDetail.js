import UserDetailList from "../../components/member/userDetail/UserDetailList";
import UserDetailBar from "../../components/member/userDetail/UserDetailBar";

const UserDetail = ({ setIsLogined }) => {
  return (
    <div className=" mx-24 flex justify-center">
      <UserDetailBar setIsLogined={setIsLogined} />
      <UserDetailList />
    </div>
  );
};

export default UserDetail;
