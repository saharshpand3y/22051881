import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.BASE_URL,
  timeout: 5000,
});

export { apiClient };
