import { request } from ".";

/**
 * @typedef {Object} Applicant
 * @property {string} payment_type 임금형태
 * @property {string} disease 중증여부
 * @property {number} cr_num 지원이력서 시퀀스 아이디
 * @property {string} name 지원자 이름
 * @property {string} ob_type 장애유형
 * @property {string} payment 희망임금
 */
/**
 * @typedef {Object} ApplicantList
 * @property {number} total 총 데이터 수
 * @property {Applicant[]} list 해당 페이지의 데이터 목록
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
 * @typedef {Object} Region
 * @property {number} cr_region_id 희망지역 시퀀스 아이디
 * @property {number} cr_num 지원이력서 시퀀스 아이디
 * @property {number} region 지역명
 */
/**
 * @typedef {Object} SavedResume
 * @property {string} job 희망업종(직종)
 * @property {number} cr_num 지원이력서 시퀀스 아이디
 * @property {string} payment_type 임금형태
 * @property {string} payment 희망 임금
 * @property {string} ob_type 장애유형
 * @property {string} disease 중증여부
 * @property {string} career 경력
 * @property {string} pr 자기소개
 * @property {number} m_num 멤버 시퀀스 아이디
 * @property {string} education 학력
 * @property {Region[]} region 희망지역 목록
 */

/**
 * @typedef {Object} ApplyState
 * @property {number} a_id 지원서 시퀀스 아이디
 * @property {string} state 상태
 */

/**
 * @typedef {Object} CountByState
 * @property {number} count 상태에 따른 지원 공고 개수
 * @property {string} state 상태
 */

const applicant = {
  /**
   *
   * @param {*} cr_num 이력서 시퀀스 아이디
   * @returns {{data: SavedResume}}
   */
  retrieve: (cr_num) => request.get(`/company/apply/detail/${cr_num}`),

  /**
   *
   * @param {*} j_num 채용공고 시퀀스 아이디
   * @param {*} state 지원 상태 (대기, 최종합격, 불합격)
   * @param {*} pageNum 요구 페이지 (default: 1페이지)
   * @param {*} pageSize 페이지 내 개수 (default: 20개)
   * @returns {{data: ApplicantList}}
   */
  retrieveByBoardIdAndState: (j_num, state, pageNum = 1, pageSize = 12) =>
    request.get(`/company/apply/list/${j_num}`, {
      params: { state: state === "전체" ? null : state, pageNum, pageSize },
    }),

  /**
   *
   * @param {ApplyState} dto 지원자 시퀀스 아이디 + 지원상태
   * @returns
   */
  update: (cr_num, state) => request.put(`/company/apply/update/${cr_num}?state=${state}`),

  /**
   *
   * @param {*} j_num 채용 공고 시퀀스 아이디
   * @returns {{data: CountByState[]}}
   */
  count: (j_num) => request.get(`/apply/list/count/${j_num}`, { params: { type: "company" } }),
};

export default applicant;
