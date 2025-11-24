import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5010",
});

export default API;
