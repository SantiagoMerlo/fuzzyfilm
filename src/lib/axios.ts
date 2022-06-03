import axios from "axios";

const AxiosClient = axios.create({
    baseURL: 'https://api.tvmaze.com/',
    timeout: 2000,
});

export default AxiosClient;