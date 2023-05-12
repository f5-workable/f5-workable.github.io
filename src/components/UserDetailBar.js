import { Link } from "react-router-dom";

const UserDetailBar = () => {  
    return (
        <div className="w-1/4 h-auto px-12 py-20">
            <div className="w-full h-56 bg-gray-300 font-bold"></div>
            <div className="flex flex-col py-4">
                <Link to="/profile"><button className=" bg-gray-100 border border-black w-full h-12 font-bold hover:bg-orange-400 hover:text-white">회원 정보</button></Link>
                <Link to="/userdetailmodify"><button className=" bg-gray-100 border border-black w-full h-12 font-bold hover:bg-orange-400 hover:text-white">회원 정보 수정</button></Link>
                <Link to="/"><button className=" bg-red-200 border border-black w-full h-12 font-bold hover:bg-red-500 hover:text-white">회원 탈퇴</button></Link>
            </div>
        </div>
    );
};

export default UserDetailBar;
