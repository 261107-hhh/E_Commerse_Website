import React, { useEffect, useState } from "react";
import Navbar from "../partial/navbar";
import Footer from "../partial/footer";
import { getAllUser } from "../services/user";
import { Button, Input } from "reactstrap";
import '../Style/ManageUser.css';
import { Link } from "react-router-dom";
import AdminNavbar from "./AdminNavbar";

const ManageUser = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        getAllUser().then(res => {
            setUser(res)
        }).catch(e => {
            console.log(e);
        })

    }, [])

    const deleteU = (id) => {
        console.log("remove the user: " + id);
        //         deleteUser(uid).then(data => {
        //             toast.success("User Deleted");
        //             navigate("/admin-dashboard/adminuser");
        //         }).catch(error => {
        //             toast.error("Can't Delete this User");
        //             console.log(error)
        //         })
    }

    const getUser = () => {
        return (
            <div className="user-table my-2">
                <div className="row">
                    <div className="col">
                        <div className="table-responsive">

                            <table className="table">
                                <thead className="thead-light">
                                    <tr>
                                        <th scope="col">id</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Verify</th>
                                        <th scope="col">Active</th>
                                        <th scope="col">Role</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                {/* this will checK / filter the item present if return false display is none otherwise string*/}

                                <tbody>
                                    {user.users.map((data) => {
                                        return (
                                            <tr key={data.id} style={{ display: data.email.toLowerCase().includes(id.toLowerCase()) ? '' : 'none' }} >
                                                <th scope="row">{data.id}</th>
                                                <td>{data.name}</td>
                                                <td>{data.email}</td>
                                                <td>{String(data.verify)}</td>
                                                <td>{String(data.active)}</td>
                                                <td>{data.role[0].name}</td>
                                                <td>
                                                    <Link to={`/admin/${data.id}/updateUser`} style={{
                                                        "marginRight": "8px"
                                                    }}>

                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-pencil-square" viewBox="0 0 16 16">
                                                            <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                                                            <path fillRule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                                                        </svg>
                                                    </Link>
                                                    <Link to={""} onClick={() => deleteU(data.id)} style={{
                                                        "marginLeft": "8px"
                                                    }} >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16">
                                                            <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                                                            <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                                                        </svg>
                                                    </Link>
                                                </td>
                                            </tr>
                                        )
                                    })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    const [id, setid] = useState("");

    const setUserid = (e) => {
        console.log(e.target.value);
        setid(e.target.value)
        // let t = document.getElementsByName("tbody")
        // console.log(t.length + "TTTT");
        // console.log(user.users.filter((u) => u.email.toLowercase().includes("hi")));
        // console.log((user.users.filter(data => data.email.includes(id.toLowerCase()))));
    }
    // console.log((user.users.filter(data => data.name.toLowerCase().includes(id.toLowerCase()))));

    const SearchBar = () => {
        return (
            <div className="container py-2 ">
                <div className="row">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                            <ol className="breadcrumb mb-0" style={{ "justifyContent": "space-around", "alignItems": "center" }}>
                                {/* <li style={{
                                    "width": "25rem"
                                }}><input style={{
                                    "marginBottom": "0"
                                }} value={id} onChange={(e) => setUserid(e)} type="text" placeholder="Enter Id to Search User..." />
                                </li> */}
                                <li style={{
                                    "width": "25rem"
                                }}><input style={{
                                    "marginBottom": "0"
                                }} value={id} onChange={setUserid} type="text" placeholder="Enter Id to Search User..." />
                                </li>
                                <li className=""><Link to={"/admin/manageProduct"}>Manage Product</Link></li>
                            </ol>
                        </nav>
                    </div>
                </div>
            </div >
        )
    }

    return (
        <>
            <Navbar />
            {SearchBar()}
            {/* <h1>Manage User</h1> */}
            {(user && getUser())}
            <Footer />
        </>
    )

}

export default ManageUser;




// import React from "react";
// import { useState } from "react";
// import { useEffect } from "react";
// import { toast } from "react-toastify";
// import { Container, Card, CardBody, CardText, Table, Row, Col, FormGroup, Input, Button } from "reactstrap";
// import { getAllUser, deleteUser } from '../../../Service/user-Service'
// import { Link, useNavigate } from 'react-router-dom'
// function Adminuser() {

//     const [user, setUser] = useState(null)

//     const navigate = useNavigate();
//     useEffect(() => {
//         getAllUser().then(data => {
//             setUser(data)

//         }).catch(error => {
//             console.log(error)
//         })
//     }, [])

//     //Time Formate
//     const formatDate = (time) => {

//         return new Date(time).toDateString();
//     }

//     const deleteU = (uid) => {
//         deleteUser(uid).then(data => {
//             toast.success("User Deleted");
//             navigate("/admin-dashboard/adminuser");
//         }).catch(error => {
//             toast.error("Can't Delete this User");
//             console.log(error)
//         })

//     }





//     const userHtml = () => {
//         return (

//             <Row>
//                 <Col md={13}>
//                     {/* <FormGroup>
//                         <Input type="text" placeholder="Enter userId here"></Input>
//                     </FormGroup> */}
//                     <Table
//                         bordered
//                         borderless
//                         responsive
//                         hover
//                         className={"text-center bg-white"}>
//                         <thead>
//                             <tr>
//                                 <th>#</th>
//                                 <th>Name</th>
//                                 <th>UserName</th>
//                                 <th>Address</th>
//                                 {/* <th>About</th> */}
//                                 <th>Gender</th>
//                                 {/* <th>Create At</th> */}
//                                 <th>Active</th>
//                                 <th>User Roles</th>
//                                 <th>Mobile</th>

//                                 <th>Delete User</th>
//                                 <th>Update User</th>

//                             </tr>
//                         </thead>

//                         <tbody>
//                             {user.map((u, index) => {
//                                 return (
//                                     <tr key={index}>
//                                         <td>{u.userId}</td>
//                                         <td>{u.name}</td>
//                                         <td>{u.email}</td>
//                                         <td>{u.address}</td>
//                                         {/* <td>{u.about}</td> */}
//                                         <td>{u.gender}</td>
//                                         {/* <td>{formatDate(u.date)}</td> */}
//                                         <td>{u.active ? "True" : "False"}</td>

//                                         <td>{u.roles.map(r =>
//                                             r.name + "    ")}
//                                         </td>

//                                         <td>{u.phone}</td>

//                                         <td>
//                                             <Button color="primary" tag={Link} to={'/admin-dashboard/update-user/' + u.userId} action='true'>Update</Button>

//                                         </td>

//                                         <td>
//                                             <Button color="danger" onClick={() => deleteU(u.userId)} >Delete</Button>

//                                         </td>


//                                     </tr>

//                                 )
//                             })}
//                         </tbody>
//                     </Table>
//                 </Col>
//             </Row>

//         )
//     }
//     return (
//         <Container>
//             <Card color="light">
//                 <CardBody> {user && userHtml()} </CardBody>

//             </Card>
//         </Container>
//     )
// }
// export default Adminuser;