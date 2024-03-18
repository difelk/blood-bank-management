import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const donationHistoryService = {
  getAllDonations: async () => {
    try {
      return await apiUtils.get("/donation-history", SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in get all donations : ", e);
    }
  },
  
  createDonation: async (value) => {
    try {
      return apiUtils.post(`/donation-history`, value, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in create donation : ", e);
    }
  },

  deleteDonationById: async (id) => {
    try {
      return await apiUtils.delete(`/donation-history/${id}`, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in delete donation : ", e);
    }
  },

  updateDonation: async (value) => {
    try {
      return apiUtils.put(`/donation-history`, value, SERVICETYPE.DONOR);
    } catch (e) {
      console.log("error in update donation : ", e);
    }
  },

};

export default donationHistoryService;
