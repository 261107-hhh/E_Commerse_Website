import { Link, useNavigate } from "react-router-dom";
import validator from 'validator';
import { toast } from 'react-toastify';
import { useState } from "react";
import { registerUser } from "../services/registeruser";
// import {  signUpUser } from "../services/registeruser";

const SignupCompo = () => {

    const navigator = useNavigate();

    const [otp, setOtp] = useState('')

    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: '',
        confirm: '',
    })

    const onFieldChange = (event, fieldName) => {
        setUser({ ...user, [fieldName]: event.target.value.trim() })
    }

    const handelVerify = (e) => {
        console.log(otp)
        e.preventDefault();
        if (otp.length < 4) {
            toast.error("Incorrect Otp")
        }
        else {
            // signUpUser(otp).then((result) => {
            //     navigator("/login")
            // }).catch((err) => {
            //     toast.warn("error: " + err)
            // });
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(user);
        // console.log(e.target);
        if (!validator.isMobilePhone(user.phone)) {
            toast.info("Invalid Phone Number")
            return;
        }
        if (!validator.isStrongPassword(user.password)) {
            toast.info("Use Stronger Password")
            return;
        }
        if (user.password !== user.confirm) {
            toast.info("Password Does not Match")
            return;
        }
        if (!validator.isEmail(user.email)) {
            toast.info("Email Does not Match")
            return;
        }
        else {

            registerUser(user).then((result) => {
                toast.success("Success: User Registered")
                console.log(result);
                navigator("/login")
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


    //Submit the Form
    // createUser(user).then((data) => {
    //   console.log(data);
    //   //alert("User Register");
    //   toast.success("User Registered successfully")
    //   navigate("/login")

    // }).catch(error => {
    //   if (error.response.status === 400) {
    //     toast.error("vaildation Eroor")
    //     // alert("vaild Error");
    //     var message = ``
    //     for (let i in error.response.data) {
    //       //  print error in console console.log(error.response.data[i])
    //       message = message + `${i.toUpperCase()} ${error.response.data[i]} \n`
    //     }
    //     message = message + "";
    //     toast.error(message);
    //   } else {
    //     toast.error("Server Error")
    //     //alert("server Error");
    //   }
    //   console.log(error)
    // })




    return (
        <>
            <div className="container1">
                <h1>Register</h1>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" alt="Phone" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <p>Please fill in the details to create an account with us.</p>
                                        <hr />
                                        <label htmlFor="name"><b>Enter Name</b></label>
                                        <input type="text" placeholder="Enter Name" id="name"
                                            onChange={(e) => onFieldChange(e, 'name')}
                                            value={user.name}
                                        />
                                        <label htmlFor="email"><b>Enter Email</b></label>
                                        <input type="email" placeholder="Enter Email" id="email"
                                            onChange={(e) => onFieldChange(e, 'email')}
                                            value={user.email} required />
                                        <label htmlFor="phone"><b>Enter Phone</b></label>
                                        <input type="tel" placeholder="Enter Phone" id="phone"
                                            onChange={(e) => onFieldChange(e, 'phone')}
                                            value={user.phone} pattern="[0-9]{10}" required />
                                        <label htmlFor="password"><b>Password</b></label>
                                        <input type="password" placeholder="Enter Password" id="password"
                                            onChange={(e) => onFieldChange(e, 'password')}
                                            value={user.password} required />
                                        <label htmlFor="confirm"><b>Confirm Password</b></label>
                                        <input type="password" placeholder="Confirm Password" id="confirm"
                                            onChange={(e) => onFieldChange(e, 'confirm')}
                                            value={user.confirm} required />
                                        <hr />
                                        {/* <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p> */}
                                        <button type="submit" className="registerbtn btn btn-outline-success"><strong>Register</strong></button>
                                    </div>
                                    <div className="container signin">
                                        <p>Already have an account? <Link to="/login">Sign in</Link>.</p>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
            </div>

            <div className="modal fade bd-example-modal-lg" tabIndex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Verify OTP</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">

                            <div className="row d-flex align-items-center justify-content-center h-100">
                                <div className="col-md-8 col-lg-7 col-xl-6">
                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                        className="img-fluid" alt="Phone" />
                                </div>
                                <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                    <form onSubmit={handelVerify}>
                                        <div>
                                            <p>Verify Email. {user.email}</p>
                                            <hr />
                                            <label htmlFor="otp"><b>Enter OTP</b></label>
                                            <input type="text" placeholder="Enter OTP" id="otp"
                                                value={otp} required maxLength={4} onChange={(e) => setOtp(e.target.value)}
                                            />
                                            <button type="submit" className="registerbtn btn btn-primary btn-outline-success" data-toggle="modal" data-target=".bd-example-modal-lg">Verify</button>
                                        </div>
                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignupCompo;

