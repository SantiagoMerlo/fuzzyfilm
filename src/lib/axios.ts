import axios from "axios";

const AxiosClient = axios.create({
    baseURL: process.env.REACT_APP_URL_MOVIES,
});

export default AxiosClient;