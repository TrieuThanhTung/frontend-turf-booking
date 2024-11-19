import axios, { AxiosError } from 'axios';
// import axiosNonToken from './ApiNonToken';

const axiosToken = axios.create({
  baseURL: "http://localhost:8080/",
});
axiosToken.interceptors.request.use(async (config) => {
  const accessToken = localStorage.getItem('accessToken')
  if(accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`
  }

  config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';

  return config;
})
axiosToken.interceptors.response.use((response) => {
  if (response && response.data) {
    return response;
  }
  return response;
},
async (error: AxiosError) => {
  return error.response;
});
export default axiosToken;
