//     <li>Add User</li>
//     <li>add product</li>
//     <li>Add category</li>
//     <li>update user</li>
//     <li>update Product</li>
//     <li>update category</li>

import React, { useEffect, useState } from "react";
import { Link, Outlet } from 'react-router-dom'
import Navbar from "../partial/navbar";
import Footer from "../partial/footer";
import { getCurrentUser } from "../Config/index";
import AdminNavbar from "./AdminNavbar";



function Admindashboard() {


    const [user, setUserDetail] = useState(
        {
            "id": "",
            "name": "abc",
            "email": "abc@example.com",
            "password": "",
            "phone": "",
            "address": "",
            "active": "",
            "verify": "",
            "role": [{
                "id": "",
                "name": ""
            }]
        }

    );

    useEffect(() => {
        try {
            const data = getCurrentUser();
            console.log(JSON.stringify(data) + " usser details");
            setUserDetail(data)
        } catch (error) {
            console.log(error);
        }
    }, [])

    // const AdminNavbar = () => {
    //     return (
    //         <div className="container py-2 ">
    //             <div className="row">
    //                 <div className="col">
    //                     <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
    //                         <ol className="breadcrumb mb-0" style={{ "justifyContent": "space-evenly" }}>
    //                             <li className=""><Link to={"/admin/manageUser"}>Manage User</Link></li>
    //                             <li className=""><Link to={"/admin/manageProduct"}>Manage Product</Link></li>
    //                         </ol>
    //                     </nav>
    //                 </div>
    //             </div>
    //         </div >
    //     )
    // }

    const AdmindashboardHtml = () => {
        return (
            <>
                <AdminNavbar />
                <div className="admindas">
                    <header>
                        <h1>Admin Dashboard</h1>
                    </header>

                    <div className="profile">
                        <section style={{ "backgroundColor": "#eee" }}>
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-lg-4">
                                        <div className="card mb-4">
                                            <div className="card-body text-center">
                                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
                                                    className="rounded-circle img-fluid" style={{ "width": "150px" }} />
                                                <h5 className="my-3">{user.name}</h5>
                                                <p className="text-muted mb-4">{user.role[0].name}</p>
                                                <p className="text-muted mb-1">{user.address}</p>
                                                <div className="d-flex justify-content-center mb-2">
                                                    <button type="button" href="/manage" className="btn btn-outline-primary ms-1">Update</button>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="card mb-4 mb-lg-0">
                                            <div className="card-body p-0">
                                                <ul className="list-group list-group-flush rounded-3">
                                                    <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                        <i className="fas fa-globe fa-lg text-warning"></i>
                                                        <p className="mb-0">https://mdbootstrap.com</p>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div> */}
                                    </div>
                                    <div className="col-lg-8">
                                        <div className="card mb-4">
                                            <div className="card-body">
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Name</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{user.name}</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Email</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{user.email}</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Phone</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">(+91) {user.phone}</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Address</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{user.address}</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Active</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{String(user.active)}</p>
                                                    </div>
                                                </div>
                                                <hr></hr>
                                                <div className="row">
                                                    <div className="col-sm-3">
                                                        <p className="mb-0">Verify</p>
                                                    </div>
                                                    <div className="col-sm-9">
                                                        <p className="text-muted mb-0">{String(user.verify)}</p>
                                                    </div>
                                                </div>

                                            </div>
                                            {/* <div className="row">
                                                <div className="col-md-6">
                                                    <div className="card mb-4 mb-md-0">
                                                        <div className="card-body">
                                                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                            </p>
                                                            <p className="mb-1" style={{ "fontSize": ".77rem" }}>Web Design</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }}>
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Website Markup</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }}>
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "72%" }} aria-valuenow="72"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p classNameName="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>One Page</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }}>
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "89%" }} aria-valuenow="89"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Mobile Template</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }}>
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "55%" }} aria-valuenow="55"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Backend API</p>
                                                            <div className="progress rounded mb-2" style={{ "height": "5px" }}>
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "66%" }} aria-valuenow="66"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="card mb-4 mb-md-0">
                                                        <div className="card-body">
                                                            <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
                                                            </p>
                                                            <p className="mb-1" style={{ "fontSize": ".77rem" }}>Web Design</p>
                                                            <div className="progress rounded" style={{ "height": " 5px" }} >
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Website Markup</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }} >
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "72%" }} aria-valuenow="72"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>One Page</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }} >
                                                                <div className="progress-bar" role="progressbar" style={{
                                                                    "width": "89%"
                                                                }} aria-valuenow="72"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Mobile Template</p>
                                                            <div className="progress rounded" style={{ "height": "5px" }} >
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "55%" }} aria-valuenow="55"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                            <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Backend API</p>
                                                            <div className="progress rounded mb-2" style={{ "height": "5px" }} >
                                                                <div className="progress-bar" role="progressbar" style={{ "width": "66%" }} aria-valuenow="66"
                                                                    aria-valuemin="0" aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </div >

                </div >
            </>
        )
    }

    return (
        <>
            <Navbar />
            {AdmindashboardHtml()}
            <Footer />

        </>
    )

}
export default Admindashboard;




























// // import React from "react";
// // import { Outlet } from "react-router-dom";
// // import Navbar from "../partial/navbar";

// // const AdminDashboard = () => {
// //     return (
// //         <>
// //             {/* <Outlet /> */}
// //             <Navbar />
// //             <h1>Admin Dashboard</h1>

// //             <div className="updates">
// // <ul>
// //     <li>Add User</li>
// //     <li>add product</li>
// //     <li>Add category</li>
// //     <li>update user</li>
// //     <li>update Product</li>
// //     <li>update category</li>
// // </ul>
// //             </div>
// //         </>
// //     )

// // }

// // export default AdminDashboard;



// import React from "react";
// import { Link, Outlet } from 'react-router-dom'
// import Navbar from "../partial/navbar";
// import Footer from "../partial/footer";


// const AdminNavbar = () => {
//     return (
//         <nav className="navbar-dark navigation bg-primary">

//             <ul style={{
//                 "display": "flex",
//                 "flexDirection": "row",
//                 "listStyle": "none",
//                 "justifyContent": "space-evenly",
//                 "boxSizing": "border-box",
//                 "color": "aliceblue",

//             }}>

//                 <li>
//                     <Link className="nav-link" to="/ManageUser">Manage User</Link>
//                 </li>
//                 <li>
//                     <Link className="nav-link" to="/ManageProduct">Manage Product</Link>
//                 </li>
//                 <li>
//                     <Link className="nav-link" to="/ManageCategory">Manage Category</Link>
//                 </li>

//             </ul >
//         </nav>
//     )
// }

// const AdmindashboardHtml = () => {
//     return (
//         <>
//             {AdminNavbar()}
//             <div className="admindas">
//                 <header>
//                     <h1>Admin Dashboard</h1>
//                 </header>

//                 <div className="profile">
//                     <section style={{ "backgroundColor": "#eee" }}>
//                         <div className="container py-5">
//                             <div className="row">
//                                 <div className="col">
//                                     <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
//                                         <ol className="breadcrumb mb-0">
//                                             <li className="breadcrumb-item"><a href="#">Home</a></li>
//                                             <li className="breadcrumb-item"><a href="#">User</a></li>
//                                             <li className="breadcrumb-item active" aria-current="page">User Profile</li>
//                                         </ol>
//                                     </nav>
//                                 </div>
//                             </div>

//                             <div className="row">
//                                 <div className="col-lg-4">
//                                     <div className="card mb-4">
//                                         <div className="card-body text-center">
//                                             {/* <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3.webp" alt="avatar"
//                                                     className="rounded-circle img-fluid" style="width: 150px;"> */}
//                                             <h5 className="my-3">John Smith</h5>
//                                             <p className="text-muted mb-1">Full Stack Developer</p>
//                                             <p className="text-muted mb-4">Bay Area, San Francisco, CA</p>
//                                             <div className="d-flex justify-content-center mb-2">
//                                                 <button type="button" className="btn btn-primary">Follow</button>
//                                                 <button type="button" className="btn btn-outline-primary ms-1">Message</button>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <div className="card mb-4 mb-lg-0">
//                                         <div className="card-body p-0">
//                                             <ul className="list-group list-group-flush rounded-3">
//                                                 <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                                                     <i className="fas fa-globe fa-lg text-warning"></i>
//                                                     <p className="mb-0">https://mdbootstrap.com</p>
//                                                 </li>
//                                                 <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                                                     <i className="fab fa-github fa-lg" style={{ "color": "#333333" }}></i>
//                                                     <p className="mb-0">mdbootstrap</p>
//                                                 </li>
//                                                 <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                                                     <i className="fab fa-twitter fa-lg" style={{ "color": "#55acee" }}></i>
//                                                     <p className="mb-0">@mdbootstrap</p>
//                                                 </li>
//                                                 <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                                                     <i className="fab fa-instagram fa-lg" style={{ "color": "#ac2bac" }}></i>
//                                                     <p className="mb-0">mdbootstrap</p>
//                                                 </li>
//                                                 <li className="list-group-item d-flex justify-content-between align-items-center p-3">
//                                                     <i className="fab fa-facebook-f fa-lg" style={{ "color": "#3b5998" }}></i>
//                                                     <p className="mb-0">mdbootstrap</p>
//                                                 </li>
//                                             </ul>
//                                         </div>
//                                     </div>
//                                 </div>
//                                 <div className="col-lg-8">
//                                     <div className="card mb-4">
//                                         <div className="card-body">
//                                             <div className="row">
//                                                 <div className="col-sm-3">
//                                                     <p className="mb-0">Full Name</p>
//                                                 </div>
//                                                 <div className="col-sm-9">
//                                                     <p className="text-muted mb-0">Johnatan Smith</p>
//                                                 </div>
//                                             </div>
//                                             <hr></hr>
//                                             <div className="row">
//                                                 <div className="col-sm-3">
//                                                     <p className="mb-0">Email</p>
//                                                 </div>
//                                                 <div className="col-sm-9">
//                                                     <p className="text-muted mb-0">example@example.com</p>
//                                                 </div>
//                                             </div>
//                                             <hr></hr>
//                                             <div className="row">
//                                                 <div className="col-sm-3">
//                                                     <p className="mb-0">Phone</p>
//                                                 </div>
//                                                 <div className="col-sm-9">
//                                                     <p className="text-muted mb-0">(097) 234-5678</p>
//                                                 </div>
//                                             </div>
//                                             <hr></hr>
//                                             <div className="row">
//                                                 <div className="col-sm-3">
//                                                     <p className="mb-0">Mobile</p>
//                                                 </div>
//                                                 <div className="col-sm-9">
//                                                     <p className="text-muted mb-0">(098) 765-4321</p>
//                                                 </div>
//                                             </div>
//                                             <hr></hr>
//                                             <div className="row">
//                                                 <div className="col-sm-3">
//                                                     <p className="mb-0">Address</p>
//                                                 </div>
//                                                 <div className="col-sm-9">
//                                                     <p className="text-muted mb-0">Bay Area, San Francisco, CA</p>
//                                                 </div>
//                                             </div>

//                                         </div>
//                                         <div className="row">
//                                             <div className="col-md-6">
//                                                 <div className="card mb-4 mb-md-0">
//                                                     <div className="card-body">
//                                                         <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
//                                                         </p>
//                                                         <p className="mb-1" style={{
//                                                             "fontSize: ".77rem"}}>Web Design</p>
//                                                                 <div className = "progress rounded" style = "height: 5px;">
//                                                         < div className="progress-bar" role="progressbar" style={{
//                                                                 "width": "80 % "
//                                                             }} aria-valuenow="80"
//                                                             aria- valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Website Markup</p>
//                                                 <div className="progress rounded" style={{ "height": " 5px" }}>
//                                                     <div className="progress-bar" role="progressbar" style={{
//                                                         "width": "72 % "
//                                                     }} aria-valuenow="72"
//                                                         aria- valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <p classNameName="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>One Page</p>
//                                                 <div className="progress rounded" style={{ "height": " 5px " }}>
//                                                     <div className="progress-bar" role="progressbar" style={{
//                                                         "width": "89 % "
//                                                     }} aria-valuenow="89"
//                                                         aria- valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Mobile Template</p>
//                                                 <div className="progress rounded" style={{ "height": "5px" }}>
//                                                     <div className="progress-bar" role="progressbar" style={{
//                                                         "width": "55 % "
//                                                     }} aria-valuenow="55"
//                                                         aria- valuemin="0" aria-valuemax="100"></div>
//                                                 </div>
//                                                 <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}>Backend API</p >
//                                                 <div className="progress rounded mb-2" style={{ "height": "5px" }}>
//                                                     < div className="progress-bar" role="progressbar" style={{
//                                                         "width": "66 % "
//                                                     }} aria-valuenow="66"
//                                                         aria - valuemin="0" aria - valuemax="100" ></div >
//                                             </div >
//                                         </div >
//                                     </div >
//                                 </div >
//                                 <div className="col-md-6">
//                                     <div className="card mb-4 mb-md-0">
//                                         <div className="card-body">
//                                             <p className="mb-4"><span className="text-primary font-italic me-1">assigment</span> Project Status
//                                             </p>
//                                             <p className="mb-1" style={{ "fontSize": ".77rem" }}>Web Design</p>
//                                             <div className="progress rounded" style={{ "height": " 5px" }}>
//                                                 <div className="progress-bar" role="progressbar" style={{ "width": "80%" }} aria-valuenow="80"
//                                                     aria-valuemin="0" aria-valuemax="100"></div>
//                                             </div>
//                                             <p className="mt-4 mb-1" style={{ "fontSize": ".77rem " }}>Website Markup</p>
//                                             < div className="progress rounded" style={{ "height": " 5px" }}>
//                                                 < div className="progress-bar" role="progressbar" style={{
//                                                     "width": "72 % "
//                                                 }} aria-valuenow="72"
//                                                     aria - valuemin="0" aria - valuemax="100" ></div >
//                                         </div >
//                                         <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" > One Page</p>
//                                     < div className="progress rounded" style={{ "height": " 5px" }
//                                     } >
//                                         < div className="progress-bar" role="progressbar" style={{
//                                             "width": "89 % "
//                                         }} aria-valuenow="89"
//                                             aria - valuemin="0" aria - valuemax="100" ></div >
//                                 </div >
//                                 <p className="mt-4 mb-1" style={{ "fontSize": ".77rem " }} > Mobile Template</p>
//                                 < div className="progress rounded" style={{ "height": " 5px" }
//                                 } >
//                                     < div className="progress-bar" role="progressbar" style={{ "width": "55%" }} aria - valuenow="55"
// aria - valuemin="0" aria - valuemax="100" ></div >
//                             </div >
//                             <p className="mt-4 mb-1" style={{ "fontSize": ".77rem" }}> Backend API</p>
//                             <div className="progress rounded mb-2" style={{ "height": " 5px" }}>
//                                 < div className="progress-bar" role="progressbar" style={{ "width": "66%" }} aria - valuenow="66"
// aria - valuemin="0" aria - valuemax="100" ></div >
//                         </div >
//                 </div >
//             </div >
//         </div >
//                                         </div >
//                                     </div >
//                                 </div >
//                             </div >
//                         </div >
//                     </section >
//                 </div >

//             </div >
//         </>
//     )
// }

// function Admindashboard() {
//     return (
//         <>
//             <Navbar />
//             {AdmindashboardHtml()}
//             <Footer />

//         </>
//     )

// }
// export default Admindashboard;