import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5009", // 5008 instead of 5003
});

export default API;
