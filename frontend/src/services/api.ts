import axios from "axios";

const api = axios.create({
  baseURL: process.env.NDMOVIES_IMDB_BASEURL,
})

export default api;