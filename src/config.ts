import axios from "axios";

const API_URL =
  "https://app-546f7240-23f5-4dea-b833-661ef1d607a3.cleverapps.io/api";
// const API_URL = "http://localhost:3000/api";

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
