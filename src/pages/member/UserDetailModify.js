import UserModify from "../../components/member/userDetail/UserModify";
import UserDetailBar from "../../components/member/userDetail/UserDetailBar";

const UserDetailModify = () => {
    return(
        <div className=" mx-24 flex justify-center">
            <UserDetailBar />
            <UserModify />
        </div>
    );
};

export default UserDetailModify;