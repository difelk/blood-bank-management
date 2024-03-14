import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const donorService = {
  getAllDonors: async () => {
    return apiUtils.get("donors");
  },

  getDonorById: async (id) => {
    return apiUtils.get(`donors/${id}`);
  },

  createDonor: async (value) => {
    return apiUtils.post(`/donors`, value, SERVICETYPE.DONOR);
  },
};

export default donorService;
