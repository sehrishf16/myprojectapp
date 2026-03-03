import axios from "axios";

const API = axios.create({
  baseURL: "https://legal-api.faimsoft.com/", 
  headers: {
    "Content-Type": "application/json",
  },
});

export default API;