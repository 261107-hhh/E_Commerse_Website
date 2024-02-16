import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../Style/navbar.css'
import { checkLogin, isAdmin, removeLogindata, } from '../Config/index';
import { logout } from '../services/user';

const Navbar = () => {

    const navigator = useNavigate();

    const logMeOut = async () => {
        //    console.log("TOKEN"+ getToken());
        await logout()
        removeLogindata(() => {
            navigator("/")
        })
    }

    return (
        <>
            <div className='header'>

                <nav className="navbar navbar-expand-lg navbar-dark bg-primary navigation ">
                    <Link className="navbar-brand" to="/">Sumit</Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Store</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/aboutus">About Us</Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link" to="/contactus">Contact Us</Link>
                            </li>


                        </ul>
                        <form className="form-inline my-2 my-lg-0 search">
                            <input className="form-control mr-sm-2 resizedTextbox" type="search" placeholder="Search" />
                            <button className="btn btn-outline-light my-2 my-sm-0" type="submit">Search</button>
                        </form>
                        <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            {(!checkLogin() && (
                                <>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" to="/signup">SignUp</Link>
                                    </li>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </>
                            ))}
                            {(checkLogin() && (
                                <>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" to="/cart">Cart</Link>
                                    </li>
                                    {isAdmin() && (
                                        <li className="nav-item active navbar-nav my-2 my-lg-0">
                                            <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
                                        </li>
                                    )}
                                    {!isAdmin() && (
                                        <li className="nav-item active navbar-nav my-2 my-lg-0">
                                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                        </li>
                                    )}
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" onClick={logMeOut} to="/">Logout</Link>
                                    </li>
                                </>
                            ))}
                        </ul>
                        {/* <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                            {!checkLogin() && (
                                <>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" to="/signup">SignUp</Link>
                                    </li>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                </>
                            )}
                            {checkLogin() && (
                                <>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" to="/cart">Cart</Link>
                                    </li>

                                </>
                            )}
                            {checkLogin() && (
                                <>
                                    {isAdmin() && (
                                        <li className="nav-item active navbar-nav my-2 my-lg-0">
                                            <Link className="nav-link" to="/admin/dashboard">Admin Dashboard</Link>
                                        </li>
                                    )}
                                    {!isAdmin() && (
                                        <li className="nav-item active navbar-nav my-2 my-lg-0">
                                            <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                        </li>
                                    )}
                                </>
                            )}
                            {checkLogin() && (
                                <>
                                    <li className="nav-item active navbar-nav my-2 my-lg-0">
                                        <Link className="nav-link" onClick={logMeOut} to="/">Logout</Link>
                                    </li>
                                </>
                            )}
                        </ul> */}
                    </div>
                </nav>
            </div>
        </>
    )
}

export default Navbar;