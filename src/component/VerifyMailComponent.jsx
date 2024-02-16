import { useState } from "react";
import { verify } from "../services/registeruser";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const VerifyMailComponent = () => {

    const navigator = useNavigate();

    const [otp, setOtp] = useState('');

    const onFieldChange = (e) => {
        setOtp(e.target.value)
    }

    const sendMail = (e) => {
        e.preventDefault()
        verify(otp).then((result) => {
            console.log(result);
            navigator("/login")
            toast.success("Success: Verified")
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

    return (
        <>
            <div className="container1">
                <h1>Verify Mail</h1>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            {/* <div className="col-md-8 col-lg-7 col-xl-6">
                                <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                                    className="img-fluid" alt="Phone" />
                            </div> */}
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form onSubmit={sendMail} >
                                    <div>
                                        <p>Please verify the User to activate account with us.</p>
                                        <hr />

                                        <label className="form-label" htmlFor="otp">Enter OTp</label>
                                        <input type="text" id="otp" className="form-control form-control-lg" value={otp}
                                            onChange={(e) => onFieldChange(e)} required
                                        />
                                        <button type="submit" className="registerbtn btn btn-outline-success"><strong>Verify</strong></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default VerifyMailComponent;