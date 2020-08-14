import axios from "axios";

export const reciepeAPI = (page, ingredients, item) =>
  axios.create({
    url: "https://recipe-puppy.p.rapidapi.com/",
    headers: {
      "x-rapidapi-host": "recipe-puppy.p.rapidapi.com",
      "x-rapidapi-key": "f50eb81e8amshf3fe15c2e5ee7a8p153e27jsn62720e4521c1",
    },
    params: {
      p: page,
      i: ingredients,
      q: item,
    },
  });

export const photosAPI = axios.create({
  method: "GET",
  baseURL: "https://api.unsplash.com/",
  url: "/search/photos",
  params: {
    query: "Dogs",
    per_page: 9,
    page: 1,
  },
  headers: {
    Authorization: "Client-ID YeF5RrprCxZ9G0pkZL7ixaULO-U4-F_NTbTXcf7rkC4",
  },
});
