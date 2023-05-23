import axios from "axios";
import apply from "./apply";
import applicant from "./applicant";
import companyBoard from "./companyBoard";
import resume from "./resume";
import company from "./company";
import member from "./member";
import applicantStatistics from "./applicantStatistics";

const baseURL = process.env.REACT_APP_API_BASE_URL;

const options = {
  baseURL,
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Credentials": "true",
  },
};

export const request = axios.create(options);

request.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    if (error?.response?.status === 403) {
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

const api = {
  apply,
  applicant,
  companyBoard,
  resume,
  applicantStatistics,
  company,
  member,
};

export default api;
