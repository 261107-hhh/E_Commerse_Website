import { email, address, phone } from '../config';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import HomeIcon from '@mui/icons-material/Home';
import Navbar from '../partial/navbar';
import Footer from '../partial/footer';
import log1 from '../Images/cont.jpg';
import '../Style/contact.css'
const ContactUs = () => {
    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
    };
    return (
        <>
            <Navbar />
            <div className='container1'>
                <h1>Contact Us</h1>
                <p>If you have any questions, feedback, or would like to collaborate with us, please fill out the form below.</p>
                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex align-items-center justify-content-center h-100">
                            <div className="col-md-8 col-lg-7 col-xl-6">
                                {/* <img src={log} className="img-fluid" alt="Contact image" /> */}
                                <img src={log1} className="img-fluid rounded" alt="Contact" />
                            </div>
                            <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <div className="form-outline mb-4">
                                            <label for="name">Name:</label>
                                            <input type="text" id="name" placeholder="Enter Name" name="name" required />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="email">Enter Email</label>
                                            <input type="email" placeholder="Enter Email" name="email" required />
                                        </div>
                                        <div className="form-outline mb-4">
                                            <label className="form-label" for="message">Message</label>
                                            <textarea id="message" name="message" rows="4" required></textarea>
                                        </div>
                                        <button type="submit" className="registerbtn btn btn-outline-success"><strong>Submit</strong></button>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <hr />
                        <h1>Contact Details</h1>
                        <ul>
                            <p><AlternateEmailIcon />Email: {email}</p>
                            <p><LocalPhoneIcon />Phone: {phone}</p>
                            <p><HomeIcon />Address:  {address}</p>
                            {/* <li>Email: kumaun.retailstore@retailapp.com</li>
                            <li>Phone: 6397499593</li>
                            <li>Address: Shiv Colony, Haldwani, Uttarakhand, 263139</li> */}
                        </ul>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;
