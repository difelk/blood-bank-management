import apiUtils from "../apiUtils";

const AuthService = {
  login: async (data) => {
    console.log("called auth service");
    return await apiUtils.post("/login", data);
  },

  registration: async (data) => {
    return apiUtils.post(`/register`, data);
  },
};

export default AuthService;
