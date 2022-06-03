import axios from "axios";

const AxiosClient = axios.create({
    baseURL: 'https://api.tvmaze.com/',
    timeout: 1000,
});

export default AxiosClient;