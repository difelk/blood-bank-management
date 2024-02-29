import apiUtils from "./apiUtils";

const donorService = {
  getAllDonors: async () => {
    return apiUtils.get("donors");
  },

  getDonorById: async (id) => {
    return apiUtils.get(`donors/${id}`);
  },
};

export default donorService;
