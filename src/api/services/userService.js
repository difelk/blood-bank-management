import apiUtils from "../apiUtils";

const UserService = {
  getAllUsers: async () => {
    try {
      return await apiUtils.get("/api/users/");
    } catch (e) {
      console.log("error in get all users : ", e);
    }
  },
};

export default UserService;
