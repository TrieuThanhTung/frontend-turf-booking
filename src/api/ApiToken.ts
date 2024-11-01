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
  // if(error.response?.status !== 401) {
  //   return error.response;
  // }
  // const refreshToken = localStorage.getItem('refreshToken')
  // if(!refreshToken) {
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  //   return error.response;
  // }
  // try {
  //   const response = await axiosNonToken.post('/api/auth/refresh-token', {
  //     refreshToken
  //   })
  //   if(response.status === 401) {
  //     throw new Error()
  //   }
  //   if(response.status !== 200) {
  //     return response;
  //   }
  //   if(response) {
  //     localStorage.setItem('accessToken', response.data.data.accessToken)
  //     localStorage.setItem('refreshToken', response.data.data.refreshToken)
  //   }
  //   const config = error.config!;
  //   config.headers.Authorization = `Bearer ${response.data.accessToken}`
  //   return await axiosToken(config)
  // } catch (error) {
  //   console.log(error)
  //   localStorage.removeItem('accessToken');
  //   localStorage.removeItem('refreshToken');
  //   window.location.href = "/log-in"
  //   return error;
  // }
});
export default axiosToken;
