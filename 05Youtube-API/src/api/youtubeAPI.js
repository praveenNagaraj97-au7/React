import axios from "axios";

export const APIKEY = "AIzaSyCYiaikFUKQZoso9s00H6sEYz0w5r979Hk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
});
