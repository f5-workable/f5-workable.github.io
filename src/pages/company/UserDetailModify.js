import UserModify from "../../components/company/userDetail/UserModify";
import UserDetailBar from "../../components/company/userDetail/UserDetailBar";

const UserDetailModify = () => {
    return(
        <div className=" mx-24 flex justify-center">
            <UserDetailBar />
            <UserModify />
        </div>
    );
};

export default UserDetailModify;