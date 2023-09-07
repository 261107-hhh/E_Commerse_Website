import React from "react"
import { Navigate, Outlet } from "react-router-dom"
import { checkLogin } from "./Config/index";
// import checkLogin from "./Config/index"

export const CheckUser = () => {
    if (checkLogin()) {
        return <Outlet />
    } else {
        return <Navigate to="/login" />
    }
}
// export default CheckUser;