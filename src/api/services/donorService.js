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
    return apiUtils.get(`donors/${id}`, SERVICETYPE.DONOR);
  },

  createDonor: async (value) => {
    try {
      return apiUtils.post(`/donors`, value, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in create donor : ", e);
    }
  },

  deleteDonorById: async (donorNic) => {
    try {
      return await apiUtils.delete(`/donors/${donorNic}`, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in delete donor : ", e);
    }
  },

  updateDonor: async (value) => {
    try {
      console.log("update donor value - ", value);
      return apiUtils.put(`/donors`, value, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in update donor : ", e);
    }
  },

  getDonorByNic: async (nic) => {
    try {
      return await apiUtils.get(`/donors/nic/${nic}`, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in get nic user : ", e);
    }
  },
};

export default donorService;
