import { request } from ".";

/**
 * @typedef {Object} Statistics
 * @property {number} total_cnt 총 지원자 수
 * @property {Disease[]} disease 중증여부 통계 리스트
 * @property {Education[]} education 학력 통계 리스트
 * @property {Gender[]} gender 성별 통계 리스트
 * @property {ObType[]} ob_type 장애유형 통계 리스트
 * @property {Age[]} age 나이 통계 리스트
 */

/**
 * @typedef {Object} Disease
 * @property {number} cnt 개수
 * @property {string} type 분류
 */
/**
 * @typedef {Object} Education
 * @property {number} cnt 개수
 * @property {string} type 분류
 */
/**
 * @typedef {Object} Gender
 * @property {number} cnt 개수
 * @property {string} type 분류
 */
/**
 * @typedef {Object} ObType
 * @property {number} cnt 개수
 * @property {string} type 분류
 */
/**
 * @typedef {Object} Age
 * @property {number} cnt 개수
 * @property {number} age **세 이하, 값이 75인 경우는 66세 이상
 */

const applicantStatistics = {
  /**
   *
   * @param {number} j_id 채용 공고 시퀀스 아이디
   * @returns {{data: Statistics}}
   */
  retrieve: (j_id) => request.get(`/jobinfo/stat/${j_id}`),
};

export default applicantStatistics;
