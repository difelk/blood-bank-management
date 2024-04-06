import { SERVICETYPE } from "../../share/enums";
import apiUtils from "../apiUtils";

const stockService = {
  getAllStockItems: async () => {
    try {
      return await apiUtils.get("/stock-items", SERVICETYPE.STOCK);
    } catch (e) {
      console.log("error in get all stock items : ", e);
    }
  },
};

export default stockService;
