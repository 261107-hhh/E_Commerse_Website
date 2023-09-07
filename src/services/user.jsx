import axios from "axios";
import { getToken } from "../Config/index";

export const BASE_URL = "http://localhost:8080";

export const http = axios.create({
    baseURL: BASE_URL,
})

export const PrivateHttp = axios.create({
    baseURL: BASE_URL,
})

PrivateHttp.interceptors.request.use((config) => {
        const token = getToken();
        // const auth = token ? `Bearer ${token}` : '';
        // config.headers.common['Authorization'] = auth;
        config.headers['Authorization'] = `Bearer ${token}`;
        console.log(config.headers.Authorization+" config");
        // config.headers.common.Authorization = `Bearer ${token}`;
        return config;
    },
    (err) => Promise.reject(err)
);


export const logout = () => {

    console.log("logout Request");
    return PrivateHttp.get(`/user/logout`).then(res => res.data)

}
