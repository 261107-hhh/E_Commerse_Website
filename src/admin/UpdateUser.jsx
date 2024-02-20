import { useParams } from "react-router-dom";
import Footer from "../partial/footer";
import Navbar from "../partial/navbar";
import { useEffect, useState } from "react";
import { getUser, updateUser } from "../services/user";

const UpdateUser = () => {
    const id = useParams();

    const [user, setuser] = useState();
    const [upduser, setupduser] = useState();

    useEffect(() => {
        getUser(id.id).then(async (res) => {
            // const data = JSON.stringify(res)
            // console.log(res.id);
            setuser(res)
            setupduser(res)
        }).catch(e => {
            console.log("Error: " + e)
        })
    }, [id])


    useEffect(() => {
        setupduser(user)
        // console.log(user.name+" upd");
        // console.log(user.name+" upd");
    }, [user])

    const userProfile = () => {
        console.log((user.id) + ": user is ");

        const Update = () => {
            updateUser(user.id, upduser);
            console.log("updated");
        }


        const upd = (e, name) => {
            console.log(JSON.stringify(user) + "12")
            console.log(JSON.stringify(upduser) + "12")
            setupduser({ ...upduser, [name]: e.target.value })

        }
        // console.log(e.target.name)
        // let ss = e.target.name;
        // setupduser({ ...upd, name: e.target.value })
        // console.log(e.target.value + " uuu");
        // console.log((e[0]) + "ddd");
        // setupduser({ ...upd })
        // }

        const udprole = (e) => {
            console.log(e);
            console.log(e.target.id + " role");
            console.log(e.target.value + " role");
            // setupduser()
            // setupduser({ ...upduser, : e.target.value })
        }
        return (
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

                                        {/* <p className="text-muted mb-1">{user.role[0].name}</p> */}
                                        <div className="d-flex justify-content-center mb-2">
                                            <button type="button" onClick={Update} className="btn btn-outline-primary ms-1">Update</button>
                                            <button type="button" href="/admin/manageUser" className="btn btn-outline-primary ms-1">Cancel</button>
                                        </div>
                                    </div>
                                </div>
                                <div className="card mb-4 mb-lg-0">
                                    <div className="card-body p-0">
                                        <ul className="list-group list-group-flush rounded-3">
                                            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
                                                {/* <i className="fas fa-globe fa-lg text-warning"></i>
                                                <p className="mb-0">https://mdbootstrap.com</p> */}
                                                <div className="col-sm-3">
                                                    <p className="mb-0">Role</p>
                                                </div>
                                                <div className="col-sm-9">
                                                    <select onChange={e => upd(e, "role")} id="role">
                                                        <option value="1111">ROLE_ADMIN</option>
                                                        <option value="2222">ROLE_STAFF</option>
                                                        <option value="3333">ROLE_GUEST</option>
                                                    </select>
                                                    {/* <input type="text" onChange={upd} value={user.role[0].name}></input> */}
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-8">
                                <div className="card mb-4">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input type="text" name="name" onChange={e => upd(e, "name")} value={upduser.name}></input>
                                                {/* <input type="text" onChange={event => setupduser({ ...upduser, name: event.target.value })} value={upduser.name}></input> */}

                                            </div>
                                            {/* <div className="col-sm-3">
                                                <p className="mb-0">Name</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input id={'name'} placeholder="Enter Product Name Here" type={'text'}
                                                    onChange={event => setupduser({ ...upduser, name: event.target.value })}
                                                    value={upduser.name} ></input>
                                            </div> */}

                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                {/* <input type="text" value={user.name}></input> */}
                                                <p className="mb-0">Email</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input type="text" onChange={event => setupduser({ ...upduser, email: event.target.value })} value={upduser.email}></input>
                                                {/* <p className="text-muted mb-0">{user.email}</p> */}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Phone</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input type="text" onChange={upd} value={user.phone}></input>
                                                {/* <p className="text-muted mb-0">(+91) {user.phone}</p> */}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Address</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input type="text" onChange={upd} value={user.address}></input>
                                                {/* <p className="text-muted mb-0">{user.address}</p> */}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Active</p>
                                            </div>
                                            <div className="col-sm-9">
                                                <input type="text" onChange={upd} value={String(user.active)}></input>
                                                {/* <p className="text-muted mb-0">{String(user.active)}</p> */}
                                            </div>
                                        </div>
                                        <hr></hr>
                                        <div className="row">
                                            <div className="col-sm-3">
                                                <p className="mb-0">Verify</p>
                                            </div>
                                            <div className="col-sm-9">
                                                {/* <p className="text-muted mb-0">{String(user.verify)}</p> */}
                                                <input type="text" onChange={upd} s value={String(user.verify)}></input>
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
                </section >
            </div >
        )
    }

    return (
        <>

            <Navbar />
            {(user && userProfile())}
            <Footer />
        </>

    )
}

export default UpdateUser;