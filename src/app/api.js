import axios from "axios";

const instance = axios.create({
  baseUrl: 'https://users-m.herokuapp.com'
});

export default instance;
