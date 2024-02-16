import axios from "axios";

export const BASE_URL = "http://localhost:8080";

// export const http=axios.create({
//     baseURL: BASE_URL
// });

// export const PrivateHttp=axios.create({
//     baseURL:Base_url
// })

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

export const registerUser = (data) => {

    return axios.post(`${BASE_URL}/register/createUser`, data).then(res => res.data)

}

export const login = (data) => {
    return axios.post(`${BASE_URL}/user/login`, data).then(res => res.data)
    // return axios.post(`${BASE_URL}/users/`,data).then(response=>response.data)
    // return "h"
}

export const verify = (data) => {   
    return axios.get(`${BASE_URL}/register/verify/`+ data).then(res => res.data)
    // return axios.post(`${BASE_URL}/users/`,data).then(response=>response.data)
    // return "h"
}

export const getOtp = (data) => {
    return axios.get(`${BASE_URL}/register/request/newotp/`+ data).then(res => res.data)
    // return axios.post(`${BASE_URL}/users/`,data).then(response=>response.data)
    // return "h"
}

export const setNewPassword = (data) => {
    return axios.post(`${BASE_URL}/register/request/newpassword`, data).then(res => res.data)

}

export const getCurrentUser = () => {
    return axios.post(`${BASE_URL}/user/current`).then(res => res.data)

}
// export const generateToken=(loginData)=>{
//     return axios.post(`${BASE_URL}/auth/login`,loginData).then((response)=>response.data)
// }

// export const getAllUser=()=>{
//     return PrivateHttp.get(`/users/`).then(res=>res.data)
// }

// export const deleteUser=(userId)=>{
//     return PrivateHttp.delete(`/users/${userId}`).then(res=>res.data)
// }
