import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5015",
});

export default API;
