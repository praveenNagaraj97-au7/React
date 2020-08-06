import axios from "axios";

const streamAPI = axios.create({
  baseURL: "http://localhost:3001/",
});

export default streamAPI;
