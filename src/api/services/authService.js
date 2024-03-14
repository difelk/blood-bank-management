import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const AuthService = {
  login: async (data) => {
    return await apiUtils.post("/login", data, SERVICETYPE.USER);
  },

  registration: async (data) => {
    return await apiUtils.post(`/register`, data, SERVICETYPE.USER);
  },
};

export default AuthService;
