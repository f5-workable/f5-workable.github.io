import { request } from ".";

/**
 * @typedef {Object} Region
 * @property {number} region_id 지역 아이디
 * @property {number} r_id 이력서 시퀀스 아이디
 * @property {number} region 지역명
 */
/**
 * @typedef {Object} Resume
 * @property {number} r_id 이력서 시퀀스 아이디
 * @property {string} education 학력
 * @property {string} place 위치
 * @property {string} job 업종(직종)
 * @property {string} payment_type 임금형태
 * @property {number} payment 임금
 * @property {string} ob_type 장애유형
 * @property {string} disease 중증여부
 * @property {string} career 경력
 * @property {string} pr 자기소개
 * @property {boolean} r_default 대표이력서 여부
 * @property {number} m_num 멤버 시퀀스 아이디
 * @property {string} title 이력서 제목
 * @property {Region[]} region 지역
 */
/**
 * @typedef {Object} SearchedResumes
 * @property {number} total 검색된 이력서 개수
 * @property {Resume[]} list 검색된 이력서들
 */

const resume = {
  /**
   *
   * @param {Object} dto 입력받은 이력서 데이터
   * @returns
   */
  add: (dto) => request.post("/resume", dto),

  /**
   *
   * @param {*} id 이력서 시퀀스 아이디
   * @returns {{data: Resume}}
   */
  retrieve: (id) => request.get(`/resume/${id}`),

  /**
   *
   * @param {*} id 이력서 시퀀스 아이디
   * @param {object} dto 수정한 이력서 데이터
   * @returns
   */
  update: (id, dto) => request.put(`/resume/${id}`, dto),

  /**
   *
   * @param {*} id 이력서 시퀀스 아이디
   * @returns
   */
  delete: (id) => request.delete(`/resume/${id}`),

  /**
   *
   * @param {string[]} payment_type 임금형태
   * @param {string[]} disease 중증여부
   * @param {string[]} ob_type 장애유형
   * @param {string[]} place 희망지역
   * @param {string} job 희망직종
   * @returns {{data: SearchedResumes}}
   */
  search: (payment_type, disease, ob_type, place, job) =>
    request.get(
      `/resume/search?payment_type=${payment_type}&disease=${disease}&ob_type=${ob_type}&place=${place}&job=${job}`
    ),
};

export default resume;
