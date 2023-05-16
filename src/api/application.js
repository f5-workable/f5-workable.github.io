import { request } from ".";

const application = {
  /**
   *
   * @param {*} j_id 구인공고 아이디
   * @param {*} r_id 선택된 이력서 아이디
   * @returns 
   */
  add: (j_id, r_id) => request.post("/apply", {}, { params: { j_id, r_id } }),

  /**
   *
   * @param {*} m_num 멤버 시퀀스 아이디
   * @param {string} state 조회하는 지원 상태
   * @returns {object[]}
   */
  retrieveByState: (m_num, state) =>
    request.get(`/apply/list/${m_num}`, {}, { params: { state } }),

  /**
   *
   * @param {*} m_num 멤버 시퀀스 아이디
   * @returns {object[]}
   */
  count: (m_num) => request.get(`/apply/list/count/${m_num}`),

  /**
   *
   * @param {*} a_id 지원서 아이디
   * @returns
   */
  delete: (a_id) => request.delete(`/apply/${a_id}`),
};

export default application;
