import axios from "axios";

const Api = axios.create({
  baseURL: "https://api.itbook.store/1.0/",
});

export default Api;
