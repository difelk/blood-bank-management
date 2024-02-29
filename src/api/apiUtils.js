// apiUtils.js

const BASE_URL = "http://localhost:8080/";

const apiUtils = {
  get: async (url) => {
    const response = await fetch(BASE_URL + url);
    return response.json();
  },

  post: async (url, data) => {
    const response = await fetch(BASE_URL + url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  put: async (url, data) => {
    const response = await fetch(BASE_URL + url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  },

  delete: async (url) => {
    const response = await fetch(BASE_URL + url, {
      method: "DELETE",
    });
    return response.json();
  },
};

export default apiUtils;
