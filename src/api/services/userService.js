import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const UserService = {
  getAllUsers: async () => {
    try {
      return await apiUtils.get("/api/users/", SERVICETYPE.USER);
    } catch (e) {
      console.log("error in get all users : ", e);
    }
  },
  updateUser: async (data) => {
    try {
      return await apiUtils.put(`/api/users/`, data, SERVICETYPE.USER);
    } catch (e) {
      console.log("error in put  users : ", e);
    }
  },
  deleteUser: async (nic) => {
    try {
      return await apiUtils.delete(`/api/users/${nic}`, SERVICETYPE.USER);
    } catch (e) {
      console.log("error in delete user : ", e);
    }
  },
};

export default UserService;
