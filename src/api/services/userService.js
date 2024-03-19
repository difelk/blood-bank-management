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

  resetPassword: async (data) => {
    try {
      return await apiUtils.put(`/api/users/password`, data, SERVICETYPE.USER);
    } catch (e) {
      console.log("error in delete user : ", e);
    }
  },

  getUserByUsername: async (username) => {
    try {
      return await apiUtils.get(
        `/api/users/username/${username}`,
        SERVICETYPE.USER
      );
    } catch (e) {
      console.log("error in et username user : ", e);
    }
  },

  getUserByNic: async (nic) => {
    try {
      return await apiUtils.get(`/api/users/nic/${nic}`, SERVICETYPE.USER);
    } catch (e) {
      console.log("error in get nic user : ", e);
    }
  },
};

export default UserService;
