import apiUtils from "../apiUtils";

const AuthService = {
  login: async (data) => {
    return await apiUtils.post("/login", data);
  },

  registration: async (data) => {
    return await apiUtils.post(`/register`, data);
  },
};

export default AuthService;
