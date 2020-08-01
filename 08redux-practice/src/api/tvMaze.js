import axios from "axios";

export default async (searchKeyword) => {
  return await axios(
    `https://tvjan-tvmaze-v1.p.rapidapi.com/search/shows?q=${searchKeyword}`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "tvjan-tvmaze-v1.p.rapidapi.com",
        "x-rapidapi-key": "f50eb81e8amshf3fe15c2e5ee7a8p153e27jsn62720e4521c1",
      },
    }
  );
};
