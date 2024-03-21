import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const AuthService = {
  login: async (data) => {
    try {
      return await apiUtils.postLoginReg("/login", data, SERVICETYPE.USER);
    } catch (e) {
      console.log("login catch: ", e);
      return { message: e };
    }
  },

  registration: async (data) => {
    try {
      return await apiUtils.postLoginReg(`/register`, data, SERVICETYPE.USER);
    } catch (e) {
      return e;
    }
  },
};

export default AuthService;
