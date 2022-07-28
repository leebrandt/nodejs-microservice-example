const axios = require("axios");

const axiosClient = axios.create({
  baseURL: process.env.CATALOG_SVC_ADDR,
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
