import axios from "axios";

const breweriesAPI = axios.create({
  baseURL: "https://api.openbrewerydb.org/breweries",
});

export default breweriesAPI;
