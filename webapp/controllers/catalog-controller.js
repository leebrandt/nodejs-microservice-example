const axios = require("axios");

const axiosClient = axios.create({
  baseURL: "http://catalog-service:3001",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
});

const controllers = {
  getAllItems: () => {
    return axiosClient.get("/");
  },

  getItemDetails: (id) => {
    return axiosClient.get("/" + id);
  },
};

module.exports = controllers;
