import axios from "axios";

const api = axios.create({
  baseURL: 'https://hardi-jdt10.herokuapp.com'
});

export default api
