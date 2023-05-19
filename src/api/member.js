import { request } from ".";

const member = {
  signUp: (dto) => request.post("/member/signup.do", dto),
  login: (dto) => request.post("/member/login.do", dto),
  update: (id, dto) => request.post(`/member/update.do/${id}`, dto),
  retrieve: (id) => request.get(`/member/info.do/${id}`),
  delete: (id) => request.get(`/member/delete.do`),
};

export default member;
