import { IoWarning } from "react-icons/io5";

const DeleteConfirmModal = ({ state, setState, title, subtitle, btnText, btnFunc }) => {
  return (
    <>
      {state ? (
        <>
          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div
              className="fixed inset-0 w-full h-full bg-black opacity-40"
              onClick={() => setState(false)}
            ></div>
            <div className="flex items-center min-h-screen px-4 py-8">
              <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg animate-appear">
                <div className="my-3 sm:flex">
                  <div className="flex items-center justify-center flex-none w-12 h-12 bg-red-100 rounded-full">
                    <IoWarning className="text-red-600" fontSize={26} />
                  </div>
                  <div className="mt-2 text-center sm:ml-4 sm:text-left">
                    <h4 className="text-xl font-semibold text-gray-800">{title}</h4>
                    <p className="mt-2 text-[15px] leading-relaxed text-gray-500">
                      {subtitle}
                    </p>
                  </div>
                </div>
                <div className="items-center gap-5 mt-10 sm:flex">
                  <button
                    className="w-full mt-2 py-4 flex-1 text-white bg-red-600 rounded-2xl outline-none ring-offset-2 ring-red-600 focus:ring-2"
                    onClick={btnFunc}
                  >
                    {btnText}
                  </button>
                  <button
                    className="w-full mt-2 py-4 flex-1 text-gray-800 rounded-2xl outline-none border ring-offset-2 ring-indigo-600 focus:ring-2"
                    onClick={() => setState(false)}
                  >
                    돌아가기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
};

export default DeleteConfirmModal;
