import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validator from 'validator';
import { getOtp, setNewPassword } from "../services/registeruser";
import { toast } from "react-toastify";

const ForgetPasswordComponent = () => {

    const navigator = useNavigate();

    const [user, setUser] = useState({
        email: '',
        otp: '',
        password: '',
        confirm: ''
    })

    const onFieldChange = (e, fieldName) => {
        setUser({ ...user, [fieldName]: e.target.value })
    }

    const requestOtp = (e) => {
        e.preventDefault()
        console.log("request" + user.email);
        if (!validator.isEmail(user.email)) {
            toast.info("Enter Correct Email")
            return;
        }
        else {
            getOtp(user.email).then((result) => {
                toast.info("Check your mail for OTP")
                console.log(result);
            }).catch((err) => {
                console.log(err);
                if (err.message === "Network Error") {
                    toast.error("Error: Please Try again Later")
                }
                else {
                    toast.warn("error: " + err.response.data)
                }
            });
        }
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        if (!validator.isStrongPassword(user.password)) {
            toast.info("Use Stronger Password")
            return;
        }
        if (user.password !== user.confirm) {
            toast.info("Password Does not Match")
            return;
        }
        if (!validator.isEmail(user.email)) {
            toast.info("Enter Correct Email")
            return;
        }
        else {
            setNewPassword(user).then((result) => {
                navigator('/login')
                toast.success("Password Change successfully")
                console.log(result);
            }).catch((err) => {
                console.log(err);
                if (err.message === "Network Error") {
                    toast.error("Error: Please Try again Later")
                }
                else {
                    toast.warn("error: " + err.response.data)
                }
            });
        }
    }


    return (
        <>
            <div className="container1">
                <h1>Forget Password</h1>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            {/* <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" alt="Phone" />
                            </div> */}
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form onSubmit={requestOtp} >
                                    <div>
                                        <p>Please fill in the details to Reset your account.</p>
                                        <hr />

                                        <label htmlFor="email"><b>Enter Email</b></label>
                                        <input type="email" placeholder="Enter Email" id="email"
                                            onChange={(e) => onFieldChange(e, 'email')}
                                            value={user.email} required />
                                        <button type="submit" onClick={requestOtp} className="registerbtn btn btn-outline-success"><strong>Request Otp</strong></button>

                                    </div>
                                </form>
                                <form onSubmit={handleSubmit} >
                                    <div>
                                        {/* <p>Please fill in the details to create an account with us.</p>
                                        <hr /> */}
                                        <label htmlFor="password"><b>Enter Otp</b></label>
                                        <input type="text" placeholder="Enter Otp Send to Mail" id="otp"
                                            onChange={(e) => onFieldChange(e, 'otp')}
                                            value={user.otp} required />
                                        <label htmlFor="password"><b>Password</b></label>
                                        <input type="password" placeholder="Enter New Password" id="password"
                                            onChange={(e) => onFieldChange(e, 'password')}
                                            value={user.password} required />
                                        <label htmlFor="confirm"><b>Confirm Password</b></label>
                                        <input type="password" placeholder="Confirm New Password" id="confirm"
                                            onChange={(e) => onFieldChange(e, 'confirm')}
                                            value={user.confirm} required />
                                        <hr />
                                        <button type="submit" className="registerbtn btn btn-outline-success"><strong>Submit</strong></button>
                                    </div>
                                    {/* <div className="container signin">
                                        <p><Link to="/login">Sign in</Link>.</p>
                                    </div> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default ForgetPasswordComponent;