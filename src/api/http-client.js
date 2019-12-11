import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_STUART_API_BASE_URL
});

export default httpClient;
