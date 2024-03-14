import axios from "axios";

const BASE_URLS = {
  USER_SERVICE: "http://localhost:8081/bcn",
  DONOR_SERVICE: "http://localhost:8082/bcn",
  STOCK_SERVICE: "http://localhost:8083/bcn",
  HOSPITAL_SERVICE: "http://localhost:8084/bcn",
  EVENT_SERVICE: "http://localhost:8084/bcn",
};

const getToken = () => {
  return sessionStorage.getItem("token");
};

const apiUtils = {
  get: async (url, serviceType) => {
    try {
      const response = await axios.get(BASE_URLS[serviceType] + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`error in get request ${url} - `, error);
      throw error;
    }
  },

  post: async (url, data, serviceType) => {
    try {
      const response = await axios.post(BASE_URLS[serviceType] + url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(`error in post request ${url} - `, error);
      throw error;
    }
  },

  put: async (url, data, serviceType) => {
    try {
      const response = await axios.put(BASE_URLS[serviceType] + url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      return response.data;
    } catch (error) {
      console.error(`error in put request ${url} - `, error);
      throw error;
    }
  },

  delete: async (url, serviceType) => {
    console.log("BASE_URL + url - ", BASE_URLS[serviceType] + url);
    try {
      const response = await axios.delete(BASE_URLS[serviceType] + url, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${getToken()}`,
        },
      });
      return response.data;
    } catch (error) {
      console.error(`error in delete request ${url} - `, error);
      throw error;
    }
  },
};

export default apiUtils;
