import { request } from ".";

/**
 * @typedef {Object} SignUpDTO
 * @property {string} id 아이디
 * @property {string} password 비밀번호
 * @property {string} birth 생년월일
 * @property {string} name 이름
 * @property {string} gender 성별
 * @property {string} email 이메일
 * @property {string} phone 휴대폰 번호
 * @property {File} profil 프로필 사진
 */
/**
 * @typedef {Object} LoginDTO
 * @property {string} id 아이디
 * @property {string} password 비밀번호
 */

const member = {
  /**
   *
   * @param {signUpDTO} dto id + password + birth + name + gender + email + phone + profil
   * @returns
   */
  signUp: (dto) => request.post("/member/signup", dto),

  /**
   *
   * @param {loginDTO} dto id + password
   * @returns
   */
  login: (dto) =>
    request.post("/member/login", dto, {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }),

  /**
   *
   * @param {number} id 멤버 시퀀스 아이디
   * @param {signUpDTO} dto id + password + birth + name + gender + email + phone + profil
   * @returns
   */
  update: (id, dto) => request.put(`/member/update/${id}`, dto),

  /**
   *
   * @param {number} id 멤버 시퀀스 아이디
   * @returns
   */
  retrieve: (id) => request.get(`/member/info/${id}`),

  /**
   *
   * @param {number} id 멤버 시퀀스 아이디
   * @returns
   */
  delete: (id) => request.post(`/member/delete/${id}`),

  findPassword: (id, name, phone) =>
    request.post(`/member/${id}/password?id=${id}&name=${name}&phone=${phone}`),

  setPassword: (id, dto) => request.put(`/member/${id}/password`, dto),

  defaultUpdate: (id, r_id) => request.get(`/resume/rdefault?memberId=${id}&r_id=${r_id}`),

  checkDuplicateId: (id) => request.get(`/member/checkId/${id}`),
};

export default member;
