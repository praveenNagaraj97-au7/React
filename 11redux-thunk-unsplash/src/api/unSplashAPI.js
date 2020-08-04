import axios from "axios";

export default async (term) => {
  return await axios({
    method: "GET",
    baseURL: "https://api.unsplash.com/",
    url: "/search/photos",
    params: {
      query: term,
      per_page: 9,
      page: 1,
    },
    headers: {
      Authorization: "Client-ID YeF5RrprCxZ9G0pkZL7ixaULO-U4-F_NTbTXcf7rkC4",
    },
  });
};
