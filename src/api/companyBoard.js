import { request } from ".";

const companyBoard = {
  /**
   *
   * @param {object} dto 입력받은 기업정보
   * @returns
   */
  add: (dto) => request.post("/jobinfo", dto),

  /**
   *
   * @param {*} id 구직공고 시퀀스 아이디
   * @returns
   */
  retrieve: (id) => request.get(`/jobinfo/${id}`),

  /**
   *
   * @param {object} dto employment_type(고용형태) + payment_type(임금형태) + temp_address(지역) + tempcompany_type(기업형태) + tempjob_type(검색형태) + keyword(검색어)
   * @returns
   */
  search: (dto) => request.get("/jobinfo/search", dto),

  /**
   *
   * @param {*} id 구직공고 시퀀스 아이디
   * @param {*} dto 수정한 기업 정보
   * @returns
   */
  update: (id, dto) => request.put(`/jobinfo/${id}`, dto),

  /**
   *
   * @param {*} id 구직공고 시퀀스 아이디
   * @returns
   */
  delete: (id) => request.delete(`/jobinfo/${id}`),
};

export default companyBoard;
