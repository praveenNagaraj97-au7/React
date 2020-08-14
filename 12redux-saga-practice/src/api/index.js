import axios from "axios";

export const getphotosAPI = (term) =>
  axios.create({
    method: "GET",
    baseURL: "https://api.unsplash.com/",
    url: `/search/photos?query=${term}&per_page=9`,
    params: {
      page: 1,
    },
    headers: {
      Authorization: "Client-ID YeF5RrprCxZ9G0pkZL7ixaULO-U4-F_NTbTXcf7rkC4",
    },
  });
