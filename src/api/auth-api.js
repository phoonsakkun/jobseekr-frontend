import axios from "./axios";

const appApi = axios.create({
  baseURL: "http://localhost:8080",
});

const addToken = (token) => ({
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export const login = async (input) => {
  return await appApi.post("/auth/login", input);
};

export const loginAdmin = async (input) => {
  return await appApi.post("/admin/login", input);
};

export const register = (input) => {
  return appApi.post("/auth/register", input);
};
export const registerAdmin = (input) => {
  return appApi.post("/admin/register", input);
};

export const getMe = (token) => {
  return appApi.get("/auth/getme", addToken(token));
};
export const getAdmin = (token) => {
  return appApi.get("/admin/getadmin", addToken(token));
};

// export const createJob = (input) => {

// }

export const getSearchJob = (query) => {
  const url = `/jobs${query ? "?" + query : ""}`;
  console.log(url);
  // return appApi.get("/jobs" + query ? `?${query}` : "");
  return appApi.get(url);
};
export const getJob = () => {
  return appApi.get("/jobs/all");
};
// export const getJobByLocation = (locationId) => {
//   return appApi.get(`/jobs?location=${locationId}`);
// };
// export const getJobByJobType = (jobTypeId) => {
//   return appApi.get(`/jobs?jobtype=${jobTypeId}`);
// };
// export const getJobByLocationAndJobType = (locationId, jobTypeId) => {
//   return appApi.get(`/jobs?location=${locationId}&jopType=${jobTypeId}`);
// };

export const getCompany = () => {
  return appApi.get("/jobs/company");
};

export const getLocation = () => {
  return appApi.get("/search");
};
export const getJobtype = () => {
  return appApi.get("/search/jobtype");
};

export const createWorkExp = (input, token) => {
  return appApi.post("/users/workexp", input, addToken(token));
};
// export const getWorkExp = (token) => {
//   return appApi.get("/users/workexp", addToken(token));
// };

export const deleteWorkExp = (id, token) => {
  return appApi.delete(`/users/workexp/${id}`, addToken(token));
};

export const searchJob = (input) => {
  return appApi.post("/jobs/search", input);
};

export const getWorkExpById = (id, token) => {
  return appApi.get(`/users/workexp/${id}`, input, addToken(token));
};

export const editWorkExp = (id, input, token) => {
  console.log("first-------------", id, input, token);
  return appApi.patch(`/users/work/${id}`, input, addToken(token));
};
