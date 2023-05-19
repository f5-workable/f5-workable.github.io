import { request } from ".";

const company = {
    signUp: (dto) => request.post("/company/signup.do", dto),
    login: (dto) => request.post("/company/login.do", dto),
    update: (id, dto) => request.post(`/company/update.do/${id}`, dto),
    retrieve: (id) => request.get(`/company/info.do/${id}`),
    delete: (id) => request.get(`/company/delete.do`),
}

export default company;