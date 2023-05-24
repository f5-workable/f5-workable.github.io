import { request } from ".";

const bookmark = {
  retrieveByMemberId: (memberId) => request.get(`/wish?memberId=${memberId}`),
  add: (memberId, g_id) => request.post(`/wish?memberId=${memberId}&g_id=${g_id}`),
  delete: (memberId, g_id) => request.delete(`/wish?memberId=${memberId}&g_id=${g_id}`),
};

export default bookmark;
