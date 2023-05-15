import { request } from ".";

const applicant = {
    /**
     * 
     * @param {*} cr_num 지원자 아이디
     * @returns
     */
  retrieve: (cr_num) => request.get(`/company/apply/detail/${cr_num}`),

  /**
   * 
   * @param {object} dto 지원자 아이디 + 지원상태
   * @returns 
   */
  update: (dto) => request.put("/company/apply/update", dto)
};

export default applicant;
