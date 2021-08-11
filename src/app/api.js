import axios from 'axios';

const api = axios.create({
  baseUrl: 'https://users-m.herokuapp.com',
})

export default api