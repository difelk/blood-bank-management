import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const AuthService = {
  login: async (data) => {
    try {
      console.log("login try");
      return await apiUtils.post("/login", data, SERVICETYPE.USER);
    } catch (e) {
      console.log("login catch");
      return { message: e };
    }
  },

  registration: async (data) => {
    return await apiUtils.post(`/register`, data, SERVICETYPE.USER);
  },
};

export default AuthService;
