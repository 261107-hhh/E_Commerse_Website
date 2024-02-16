import axios from "axios";

export const BASE_URL = "http://localhost:8081/api/v2/category";

export const http = axios.create({
    baseURL: BASE_URL,
})

export const PrivateHttp = axios.create({
    baseURL: BASE_URL
})


export const getAllCategories = () => {   
    console.log("Get all category request");
    return http.get(`getAll/Categories`).then(res => res.data)

}