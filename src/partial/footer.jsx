import { Link } from 'react-router-dom';
import '../Style/footer.css';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
const Footer = () => {

    return (
        <>
            <div className='footer'>
                <footer className="w-100 py-4 flex-shrink-0 footer-bottom " style={{
                    'background': '#212529'
                }}>
                    <div className="container py-4">
                        <div className="row gy-4 gx-5">
                            <div className="col-lg-5 col-md-6">
                                <h5 className="h1 text-white">Kumaun E-Commerce</h5>
                                <p className="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <p className="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a className="text-primary" href="#ASD">sumit.com</a></p>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <h5 className="text-white mb-3">Quick links</h5>
                                <ul className="list-unstyled text-muted">
                                    <li><Link to="/"><HomeIcon className='icon' style={{ "fontSize": "28px" }} /></Link></li>
                                    <li><Link to="/aboutus"><InfoIcon className='icon' style={{ "fontSize": "28px" }} /></Link></li>

                                </ul>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <h5 className="text-white mb-3">Contact</h5>
                                <ul className="list-unstyled text-muted">
                                    <li>
                                        <Link to="https://www.instagram.com/confidential_06/" target='_blank'><InstagramIcon className='icon' style={{ "fontSize": "28px" }} /></Link>
                                    </li>
                                    <li>
                                        <Link to="https://wa.me/6397499593" target='_blank'><WhatsAppIcon className='icon' style={{ "fontSize": "28px" }} /></Link>
                                    </li>
                                </ul>
                            </div>
                            {/* <div class="col-lg-4 col-md-6">
                                <h5 class="text-white mb-3">Newsletter</h5>
                                <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
                                <form action="#">
                                    <div class="input-group mb-3">
                                        <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
                                        <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
                                    </div>
                                </form>
                            </div> */}
                        </div>
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Footer;


















// import "../Style/footer.css"

// const Footer = () => {

//     return (
//         <>
//             <div class="d-flex flex-column h-100">
//                 <footer class="w-100 py-4 flex-shrink-0">
//                     <div class="container py-4">
//                         <div class="row gy-4 gx-5">
//                             <div class="col-lg-4 col-md-6">
//                                 <h5 class="h1 text-white">FB.</h5>
//                                 <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
//                                 <p class="small text-muted mb-0">&copy; Copyrights. All rights reserved. <a class="text-primary" href="#">Bootstrapious.com</a></p>
//                             </div>
//                             <div class="col-lg-2 col-md-6">
//                                 <h5 class="text-white mb-3">Quick links</h5>
//                                 <ul class="list-unstyled text-muted">
//                                     <li><a href="#">Home</a></li>
//                                     <li><a href="#">About</a></li>
//                                     <li><a href="#">Get started</a></li>
//                                     <li><a href="#">FAQ</a></li>
//                                 </ul>
//                             </div>
//                             <div class="col-lg-2 col-md-6">
//                                 <h5 class="text-white mb-3">Quick links</h5>
//                                 <ul class="list-unstyled text-muted">
//                                     <li><a href="#">Home</a></li>
//                                     <li><a href="#">About</a></li>
//                                     <li><a href="#">Get started</a></li>
//                                     <li><a href="#">FAQ</a></li>
//                                 </ul>
//                             </div>
//                             <div class="col-lg-4 col-md-6">
//                                 <h5 class="text-white mb-3">Newsletter</h5>
//                                 <p class="small text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt.</p>
//                                 <form action="#">
//                                     <div class="input-group mb-3">
//                                         <input class="form-control" type="text" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="button-addon2" />
//                                             <button class="btn btn-primary" id="button-addon2" type="button"><i class="fas fa-paper-plane"></i></button>
//                                     </div>
//                                 </form>
//                             </div>
//                         </div>
//                     </div>
//                 </footer>

//             </div>
//         </>
//     )
// }

// export default Footer;