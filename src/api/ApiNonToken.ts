import axios from 'axios';
// Set up default config for http requests here
// Please have a look at here `https://github.com/axios/axios#request` for the full list of configs

const axiosNonToken = axios.create({
    baseURL: "http://localhost:8080/",
});
axiosNonToken.interceptors.request.use(async (config) => {

    config.headers['Content-Type'] = config.headers['Content-Type'] || 'application/json';

    return config;
})
axiosNonToken.interceptors.response.use((response) => {
    if (response && response.data) {
        return response;
    }
    return response;
}, (error) => {
    return error.response;
});
export default axiosNonToken ;