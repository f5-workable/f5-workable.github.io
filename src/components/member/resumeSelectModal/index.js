import { MdCancel } from "react-icons/md";
import ResumeBtn from "./ResumeBtn";
import api from "../../../api";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ResumeSelectModal = ({ state, setState }) => {
  const { showModal } = state;
  const { setShowModal } = setState;
  const [selectedResumeId, setSelectedResumeId] = useState("");
  const [resumes, setResumes] = useState();
  const { jobId } = useParams();

  const getResumes = async () => {
    const memberId = localStorage.getItem("memberId") || sessionStorage.getItem("memberId");
    const { data } = await api.resume.retrieveByMember(memberId);
    console.log(data);
    setResumes(data.list);
  };

  const applyToCompany = async () => {
    setShowModal(false);
    await api.apply.add(jobId, selectedResumeId);
  };

  useEffect(() => {
    getResumes();
  }, []);

  return (
    <>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50">
            <div className="relative w-screen my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <h3 className="text-3xl font-semibold">이력서 선택</h3>
                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-black float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <MdCancel
                      fontSize={30}
                      className="bg-transparent text-neutral-500 block"
                    />
                  </button>
                </div>
                <div className="p-6 flex flex-col gap-2 text-lg leading-relaxed">
                  {resumes.length > 0 ? (
                    resumes?.map((resume) => (
                      <ResumeBtn
                        key={resume.r_id}
                        state={selectedResumeId}
                        setState={setSelectedResumeId}
                        resume={resume}
                      />
                    ))
                  ) : (
                    <Link
                      to="/resume"
                      className="bg-blue-50 hover:bg-blue-100 py-4 px-2 rounded-xl text-blue-300 hover:text-blue-400"
                    >
                      이력서 추가하기
                    </Link>
                  )}
                </div>
                <div className="flex items-center justify-end p-4 border-t border-solid border-slate-200 rounded-b">
                  <button
                    className={`font-bold px-6 py-4 rounded-xl shadow mr-1 mb-1 ${
                      selectedResumeId.length === 0
                        ? "bg-neutral-100 text-black opacity-50"
                        : "bg-blue-500 active:bg-blue-600 text-white"
                    }`}
                    type="button"
                    disabled={selectedResumeId.length === 0}
                    onClick={applyToCompany}
                  >
                    지원하기
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default ResumeSelectModal;
