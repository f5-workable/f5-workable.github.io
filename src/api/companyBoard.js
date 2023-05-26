import { request } from ".";

/**
 * @typedef {Object} BoardInfo
 * @property {number} j_id 공고 시퀀스 아이디
 * @property {string} c_name 회사명
 * @property {string} d_date 마감일
 * @property {string} job_type 업종(직종)
 * @property {string} employment_type 고용형태
 * @property {string} payment_type 임금형태
 * @property {string} payment 임금
 * @property {string} career 경력
 * @property {string} edu 학력
 * @property {string} r_date 등록일
 * @property {string} detail 기업설명
 * @property {string} address 주소
 */
/**
 * @typedef {Object} BoardList
 * @property {number} total 총 데이터 수
 * @property {BoardInfo[]} list 해당 페이지의 데이터 목록
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
 * @typedef {Object} JobInfo
 * @property {string} job_type 업종(직종)
 * @property {number} j_id 공고 시퀀스 아이디
 * @property {string} d_date 마감일
 */

const companyBoard = {
  /**
   *
   * @param {BoardInfo} dto 입력받은 기업정보
   * @returns
   */
  add: (dto) => request.post("/jobinfo", dto),

  /**
   *
   * @param {number} j_id 구직공고 시퀀스 아이디
   * @param {number} memberId 멤버 시퀀스 아이디
   * @returns {{data: BoardInfo}}
   */
  retrieve: (j_id, memberId) => request.get(`/jobinfo/select?j_id=${j_id}&memberId=${memberId}`),

  /**
   *
   * @param {number} c_num 기업 시퀀스 아이디
   * @returns {{data: BoardList}}
   */
  retrieveByCompanyId: (c_num) => request.get(`/jobinfo/jobtype/${c_num}`),

  /**
   *
   * @param {string[]} employment_type 고용형태
   * @param {string[]} payment_type 임금형태
   * @param {string[]} temp_address 지역
   * @param {string[]} tempcompany_type 기업형태
   * @param {string[]} tempjob_type 검색형태
   * @param {string[]} keyword 검색어
   * @param {string} sort 정렬기준
   * @param {string} memberId 멤버 시퀀스 아이디
   * @param {number} pageNum 불러올 페이지 인덱스
   * @param {number} pageSize 한 페이지에 불러올 데이터 수
   * @returns {{data: BoardInfo[]}}
   */
  search: (
    employment_type,
    payment_type,
    address,
    c_type,
    job_type,
    keyword,
    sort,
    memberId,
    pageNum = 1,
    pageSize = 12
  ) =>
    request.get(
      `/jobinfo/search?employment_type=${employment_type}&payment_type=${payment_type}&address=${address}&c_type=${c_type}&job_type=${job_type}&keyword=${keyword}&sort=${sort}&pageNum=${pageNum}&pageSize=${pageSize}&memberId=${memberId}`
    ),

  /**
   *
   * @param {number} id 구직공고 시퀀스 아이디
   * @param {BoardInfo} dto 수정한 기업 정보
   * @returns
   */
  update: (id, dto) => request.put(`/jobinfo/${id}`, dto),

  /**
   *
   * @param {number} id 구직공고 시퀀스 아이디
   * @returns
   */
  delete: (id) => request.delete(`/jobinfo/${id}`),
};

export default companyBoard;
