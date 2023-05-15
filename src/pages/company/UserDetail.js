import UserDetailList from "../../components/company/userDetail/UserDetailList";
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