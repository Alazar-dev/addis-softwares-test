import axios from "axios";

// const API_URL = "https://addis-test.herokuapp.com/api";
const API_LOCAL = "http://localhost:3000/api";

export const axiosInstance = axios.create({
  baseURL: API_LOCAL,
  headers: {
    "Content-Type": "application/json",
  },
});
