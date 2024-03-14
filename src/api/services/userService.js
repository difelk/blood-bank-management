import apiUtils from "../apiUtils";

const UserService = {
  getAllUsers: async () => {
    try {
      return await apiUtils.get("/api/users/");
    } catch (e) {
      console.log("error in get all users : ", e);
    }
  },
  deleteUser: async (nic) => {
    try {
      return await apiUtils.delete(`/api/users/${nic}`);
    } catch (e) {
      console.log("error in delete user : ", e);
    }
  },
};

export default UserService;
