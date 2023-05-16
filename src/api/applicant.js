import { request } from ".";

const applicant = {
  /**
   *
   * @param {*} cr_num 이력서 시퀀스 아이디
   * @returns {object}
   */
  retrieve: (cr_num) => request.get(`/company/apply/detail/${cr_num}`),

  /**
   *
   * @param {*} c_num 기업 시퀀스 아이디
   * @returns {object[]}
   */
  retrieveByCompanyId: (c_num) => request.get(`/jobinfo/jobtype/${c_num}`),

  /**
   *
   * @param {*} j_num 채용공고 시퀀스 아이디
   * @param {*} state 지원 상태 (대기, 최종합격, 불합격)
   * @param {*} pageNum 요구 페이지 (default: 1페이지)
   * @param {*} pageSize 페이지 내 개수 (default: 20개)
   * @returns {object[]}
   */
  retrieveByBoardIdAndState: (j_num, state, pageNum, pageSize) =>
    request.get(
      `/company/apply/list/${j_num}`,
      {},
      { state: state === "전체" ? null : state, pageNum, pageSize }
    ),

  /**
   *
   * @param {object} dto 지원자 시퀀스 아이디 + 지원상태
   * @returns
   */
  update: (dto) => request.put("/company/apply/update", dto),

  /**
   *
   * @param {*} j_num 채용 공고 시퀀스 아이디
   * @returns {object[]}
   */
  count: (j_num) => request.get(`/apply/list/count/${j_num}`, {}, { type: "company" }),
};

export default applicant;
