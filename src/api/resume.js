import { request } from ".";

const resume = {
  /**
   *
   * @param {object} dto 입력받은 이력서 데이터
   * @returns
   */
  add: (dto) => request.post("/resume", dto),

  /**
   *
   * @param {*} id 이력서 시퀀스 아이디
   * @returns {object}
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
   * @param {object} dto payment_type(임금형태) + disease(중증여부) + ob_type(장애유형) + place(희망지역) + job(희망직종)
   * @returns {object[]}
   */
  search: (dto) => request.get("/resume/search", dto),
};

export default resume;
