import { request } from ".";

/**
 * @typedef {Object} signUpDTO
 * @property {string} c_id 아이디
 * @property {string} c_password 비밀번호
 * @property {string} c_name 회사 이름
 * @property {string} rnum 사업자등록번호
 * @property {string} address 위치
 * @property {string} c_type 기업형태
 * @property {string} phone 회사 연락처
 * @property {File} logo 회사 로고
 */
/**
 * @typedef {Object} loginDTO
 * @property {string} c_id 아이디
 * @property {string} c_password 비밀번호
 */

const company = {
  /**
   *
   * @param {signUpDTO} dto
   * @returns
   */
  signUp: (dto) =>
    request.post("/company/signup", dto, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  /**
   *
   * @param {loginDTO} dto
   * @returns
   */
  login: (dto) =>
    request.post("/company/login", dto, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }),

  /**
   *
   * @param {number} id 기업 시퀀스 아이디
   * @param {signUpDTO} dto
   * @returns
   */
  update: (id, dto) =>
    request.post(`/company/update/${id}`, dto, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }),

  /**
   *
   * @param {number} id 기업 시퀀스 아이디
   * @returns
   */
  retrieve: (id) => request.get(`/company/info/${id}`),

  /**
   *
   * @param {number} id 기업 시퀀스 아이디
   * @returns
   */
  delete: (id) => request.get(`/company/delete/${id}`),
};

export default company;
