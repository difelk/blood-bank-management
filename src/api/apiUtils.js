import axios from "axios";

const BASE_URL = "http://localhost:8081/bcn";

const getToken = () => {
  return sessionStorage.getItem("token");
};

console.log("token bv - ", getToken());

const apiUtils = {
  get: async (url) => {
    try {
      const response = await axios.get(BASE_URL + url, {
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

  post: async (url, data) => {
    try {
      const response = await axios.post(BASE_URL + url, data, {
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

  put: async (url, data) => {
    try {
      const response = await axios.put(BASE_URL + url, data, {
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

  delete: async (url) => {
    try {
      const response = await axios.delete(BASE_URL + url);
      return response.data;
    } catch (error) {
      console.error(`error in delete request ${url} - `, error);
      throw error;
    }
  },
};

export default apiUtils;
