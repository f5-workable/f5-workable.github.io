import { request } from ".";

const applicantStatistics = {
  /**
   *
   * @param {*} j_id 채용 공고 시퀀스 아이디
   * @returns {object[]}
   */
  retrieve: (j_id) => request.get(`/jobinfo/stat/${j_id}`),
};

export default applicantStatistics;
