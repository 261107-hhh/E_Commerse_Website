import axios from "axios";

export const BASE_URL = "http://localhost:8081/api/v2/product";

export const http = axios.create({
    baseURL: BASE_URL,
})

export const PrivateHttp = axios.create({
    baseURL: BASE_URL
})

// PrivateHttp.interceptors.request.use(request=>{
//     let token=getToken()
//     if(token){

//         request.headers.common.Authorization=`Bearer ${token}`
//       //  console.log("Token add to header"+token)

//     }
//     return request;
// },error=>Promise.reject(error))


export const getAllProducts = () => {

    console.log("Get all product request");
    return http.get(`getAll/Products`).then(res => res.data)

}

export const getProductByID = (id) => {

    console.log("Get product by ID request");
    return http.get(`get/Product/${id}`).then(res => res.data)

}


export const getAllProductByCategoryID = (id) => {
    // /getAll/{catID}/Products
    console.log("Get category by id request");
    return http.get(`/getAll/${id}/Products`).then(res => res.data)

}
