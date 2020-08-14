import axios from "axios";

export const getphotosAPI = async (term, page) => {
  try {
    const response = await axios({
      method: "GET",
      baseURL: "https://api.unsplash.com/",
      url: `/search/photos?query=${term}&per_page=9&page=${page}`,
      headers: {
        Authorization: "Client-ID YeF5RrprCxZ9G0pkZL7ixaULO-U4-F_NTbTXcf7rkC4",
      },
    });

    return response.data;
  } catch (err) {
    throw new Error(err.errors);
  }
};
