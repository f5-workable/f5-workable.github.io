import { Link } from "react-router-dom";
import { MdSearch } from "react-icons/md";
import { useEffect, useState } from "react";

const CompanyHeader = ({ handleIsCompany }) => {
  const [isLogined, setIsLogined] = useState(false);

  const handleProfileClick = () => {
    const dropdownMenu = document.querySelector("#dropdown-menu");
    dropdownMenu.classList.toggle("hidden");
  };

  useEffect(() => {
    setIsLogined(true);
  }, []);

  return (
    <>
      <header className="w-full bg-neutral-50 fixed top-0 mx-auto my-0 z-50 border-b border-solid border-neutral-300 shadow-md">
        <nav className="w-11/12 h-99 flex flex-row justify-between items-center mx-auto my-0">
          <div className="flex justify-center">
            <Link to="/" className="py-3 mx-3 text-2xl text-orange-500">
              장애인 구인구직 - Company
            </Link>
          </div>
          <div className="flex flex-row items-center">
            <Link to="/search" className="relative mr-8">
              <label htmlFor="keyword-search">
                <MdSearch className="absolute bottom-5 left-6" size={24} />
              </label>
              <input
                type="search"
                id="keyword-search"
                name="keyword"
                disabled
                className="w-full m-3 p-2 pl-10 bg-transparent border-2 border-neutral-300 hover:border-orange-500 rounded-3xl transition-colors cursor-pointer"
              />
            </Link>
            <aside className="flex flex-row items-center before:content-['|'] before:mr-6 text-neutral-300">
              <ul className="flex items-center text-neutral-800">
                {isLogined ? (
                  <li className="inline-flex relative mr-5 ml-2">
                    <button
                      onClick={handleProfileClick}
                      className="w-10 h-10 rounded-full bg-neutral-500 border border-solid border-neutral-600 focus:ring-2 focus:ring-blue-500 focus:border-white overflow-hidden"
                    >
                      <img
                        src="/default-profile.png"
                        alt="profile-img"
                        className="object-cover"
                      ></img>
                    </button>
                    <ul
                      id="dropdown-menu"
                      className="hidden absolute top-14 -left-5 w-40 bg-neutral-50 rounded-lg border border-solid border-neutral-300 overflow-hidden shadow-lg"
                    >
                      <li className="flex justify-center px-2 py-2 border-b border-solid border-neutral-400">
                        <Link
                          to="/profile"
                          onClick={handleProfileClick}
                          className="w-36 hover:bg-neutral-200 rounded-xl px-4 py-4"
                        >
                          기업 정보
                        </Link>
                      </li>
                      <li className="flex justify-center px-2 pt-2">
                        <Link
                          to="/"
                          onClick={handleProfileClick}
                          className="w-36 hover:bg-neutral-200 rounded-xl px-4 py-4"
                        >
                          지원자 현황
                        </Link>
                      </li>
                      <li className="flex justify-center px-2">
                        <Link
                          to="/"
                          onClick={handleProfileClick}
                          className="w-36 hover:bg-neutral-200 rounded-xl px-4 py-4"
                        >
                          제안 현황
                        </Link>
                      </li>
                      <li className="flex justify-center px-2 py-2">
                        <Link
                          to="/"
                          onClick={handleProfileClick}
                          className="w-36 bg-red-400 text-white rounded-xl px-4 py-4 text-center"
                        >
                          로그아웃
                        </Link>
                      </li>
                    </ul>
                  </li>
                ) : (
                  <li className="inline-block">
                    <Link to="/login" className="flex items-center p-2 mr-3 h-10">
                      로그인/회원가입
                    </Link>
                  </li>
                )}

                <li className="inline-block before:content-['|'] before:mr-5 text-neutral-300">
                  <Link
                    to="/"
                    className="px-3 py-2 mr-3 h-10 border-2 border-solid border-neutral-200 rounded-3xl text-neutral-500"
                  >
                    <button className="text-sm" onClick={handleIsCompany}>
                      구직 서비스
                    </button>
                  </Link>
                </li>
              </ul>
            </aside>
          </div>
        </nav>
      </header>
      <div className="h-16"></div>
    </>
  );
};

export default CompanyHeader;
