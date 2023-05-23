import { request } from ".";

/**
 * @typedef {Object} CompanyInfo
 * @property {string} job_type 업종(직종)
 * @property {number} job_id 공고 시퀀스 아이디
 * @property {number} payment 임금
 * @property {string} payment_type 임금형태
 * @property {string} address 기업 주소
 * @property {string} j_name 기업명
 */
/**
 * @typedef {Object} CompaniesInfo
 * @property {number} total 총 데이터 수
 * @property {CompanyInfo[]} list 해당 페이지의 데이터 목록
 * @property {number} pageNum 현재 페이지
 * @property {number} pageSize 한 페이지당 들어갈 데이터 수
 * @property {number} size 현재 리스트의 데이터 수
 * @property {number} pages 총 페이지 수
 * @property {number} prePage 이전 페이지
 * @property {number} nextPage 다음 페이지
 * @property {boolean} isFirstPage 첫 페이지 여부
 * @property {boolean} isLastPage 마지막 페이지 여부
 * @property {boolean} hasPreviousPage 이전 페이지 존재 여부
 * @property {boolean} hasNextPage 다음 페이지 존재 여부
 * @property {boolean} navigatePageNums 페이지 목록
 * @property {boolean} navigateFirstPage 첫 페이지 목록번호
 * @property {boolean} navigateLastPage 마지막 페이지 목록 번호
 */

/**
 * @typedef {Object} CountByState
 * @property {number} count 상태에 따른 지원 공고 개수
 * @property {string} state 상태
 */

const apply = {
  /**
   *
   * @param {number} j_id 구인공고 아이디
   * @param {number} r_id 선택된 이력서 아이디
   * @returns
   */
  add: (j_id, r_id) => request.post("/apply", {}, { params: { j_id, r_id } }),

  /**
   *
   * @param {number} m_num 멤버 시퀀스 아이디
   * @param {string} state 조회하는 지원 상태
   * @param {number} pageNum
   * @param {number} pageSize
   * @returns {{data: CompaniesInfo}}
   */
  retrieveByState: (m_num, state, pageNum, pageSize) =>
    request.get(`/apply/list/${m_num}`, {}, { params: { state, pageNum, pageSize } }),

  /**
   *
   * @param {number} m_num 멤버 시퀀스 아이디
   * @returns {{data: CountByState[]}}
   */
  count: (m_num) => request.get(`/apply/list/count/${m_num}`),

  /**
   *
   * @param {number} a_id 지원서 아이디
   * @returns
   */
  delete: (a_id) => request.delete(`/apply/${a_id}`),
};

export default apply;
