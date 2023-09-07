import Navbar from '../partial/navbar';
import Footer from '../partial/footer';
import '../Style/login.css'
import LoginCompo from '../component/LoginCompo';
const Login = () => {
    return (
        <>
            <Navbar />
            <LoginCompo />
            <Footer />
        </>
    );
}

export default Login;















// import Navbar from '../partial/navbar';
// import Footer from '../partial/footer';
// import '../Style/login.css'
// const Login = () => {
//     return (
//         <>
//             <Navbar />
//             <div className='container'>
//                 <section className="vh-100 login">
//                     <div className="container py-5 h-100">
//                         <div className="row d-flex align-items-center justify-content-center h-100">
//                             <div className="col-md-8 col-lg-7 col-xl-6">
//                                 <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
//                                     className="img-fluid" alt="Phone image" />
//                             </div>
//                             <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
//                                 <form>
//                                     {/* <!-- Email input --> */}
//                                     <div className="form-outline mb-4">
//                                         <label className="form-label" for="email">Email address</label>
//                                         <input type="email" id="email" name='email' className="form-control form-control-lg" />
//                                     </div>

//                                     {/* <!-- Password input --> */}
//                                     <div className="form-outline mb-4">
//                                         <label className="form-label" for="pwd">Password</label>
//                                         <input type="password" id="pwd" className="form-control form-control-lg" />
//                                     </div>


//                                     {/* <!-- Submit button --> */}
//                                     <button type="submit" className="btn btn-primary btn-lg btn-block">Sign in</button>

                                    
//                                     {/* 
//                                     <a className="btn btn-primary btn-lg btn-block" style="background-color: #3b5998" href="#!"
//                                         role="button">
//                                         <i className="fab fa-facebook-f me-2"></i>Continue with Facebook
//                                     </a>
//                                     <a className="btn btn-primary btn-lg btn-block" style="background-color: #55acee" href="#!"
//                                         role="button">
//                                         <i className="fab fa-twitter me-2"></i>Continue with Twitter</a> */}

//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </section>
//             </div>
//             <Footer />
//         </>
//     );
// }

// export default Login;