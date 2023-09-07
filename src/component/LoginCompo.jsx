import { Link, useNavigate } from 'react-router-dom';
import { login } from '../services/registeruser';
import { useState } from 'react';
import validator from 'validator';
import { toast } from 'react-toastify'
import { loginData } from '../Config/index';
// import { toast } from 'react-toastify';

const LoginCompo = () => {

    const navigator = useNavigate();

    // const toast = toast();

    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const verify = (e) => {
        e.preventDefault()
        console.log(user);

        if (!validator.isEmail(user.email)) {
            toast.info("enter Correct Email")
            return;
        }
        else {
            login(user).then((result) => {
                console.log(result)
                toast.success("Login Success")
                loginData(result, () => {
                    navigator("/")
                })
            }).catch((err) => {
                console.log(err.response)
                if (err.message === "Network Error") {
                    toast.error("Please Try Again Later");
                }
                else if (err.response.data === "User is Not Active") {
                    toast.error("User is Not Active");
                }
                else if (err.response.data === "User is Not Verified") {
                    toast.error("User is Not Verified");
                }   
                else {
                    toast.error("Invalid Username or Password");
                }
            });
        }
    }

    const onFieldChange = (event, fieldName) => {
        setUser({ ...user, [fieldName]: event.target.value.trim() })
    }

    // onChange={(e) => onFieldChange(e, 'confirm')}

    return (
        <>
            <div className='container1'>
                <h1>Login</h1>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-Content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" alt="Phone" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form onSubmit={verify}>
                                    {/* <!-- Email input --> */}
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="email">Email address</label>
                                        <input type="email" id="email" className="form-control form-control-lg" value={user.email}
                                            onChange={(e) => onFieldChange(e, "email")} required
                                        />
                                    </div>

                                    {/* <!-- Password input --> */}
                                    <div className="form-outline mb-4">
                                        <label className="form-label" htmlFor="pwd">Password</label>
                                        <input type="password" id="pwd" className="form-control form-control-lg" value={user.password}
                                            onChange={(e) => onFieldChange(e, "password")} required
                                        />
                                    </div>
                                    <hr />
                                    <div className="d-flex justify-content-around align-items-center mb-4">
                                        <a href="#!">Forgot password?</a>
                                    </div>

                                    {/* <!-- Submit button --> */}
                                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                    <div className="divider d-flex align-items-center my-4" style={{ "justifyContent": "center" }}>
                                        <p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p>
                                    </div>
                                    <p>New User? <Link to="/signup">Register</Link>.</p>
                                    {/* <a className="btn btn-primary btn-lg btn-block" style={{"background-color": "#3b5998"}} href="#!"
                                        role="button">
                                        <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
                                    </a>
                                    <a className="btn btn-primary btn-lg btn-block" style={{"background-color": "#55acee"}} href="#!"
                                        role="button">
                                        <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}

                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default LoginCompo;