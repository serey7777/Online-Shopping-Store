
import axios from "axios";

const API = axios.create({
  baseURL: "https://localhost:7252/api", // change to your backend URL
});

// Attach JWT token if exists
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth Endpoints
export const registerUser = (data) => API.post("/Auth/Register", data);
export const loginUser = (data) => API.post("/Auth/Login", data);

export default API;
