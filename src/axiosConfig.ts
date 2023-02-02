import axios from "axios";

const instance = axios.create({
  baseURL: "https://shift-winter-2023-backend.onrender.com/api/",
});

export default instance;
