import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const donorService = {
  getAllDonors: async () => {
    try {
      return await apiUtils.get("/donors", SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in get all donors : ", e);
    }
  },

  getDonorById: async (id) => {
    return apiUtils.get(`donors/${id}`);
  },

  createDonor: async (value) => {
    return apiUtils.post(`/donors`, value, SERVICETYPE.DONOR);
  },
};

export default donorService;
