import UserDetailList from "../../components/member/userDetail/UserDetailList";
import UserDetailBar from "../../components/UserDetailBar";

const UserDetail = () => {
    return (
        <div className=" mx-24 flex justify-center">
            <UserDetailBar />
            <UserDetailList />
        </div>
    );
};

export default UserDetail;