import axios from "axios";

const AxiosClient = axios.create({
    baseURL: "https://api.tvmaze.com/",
});

export default AxiosClient;