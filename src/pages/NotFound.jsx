import Navbar from '../partial/navbar';
import Footer from '../partial/footer';
const NotFound = () => {
    return (
        <>
            <Navbar />
            <section className="vh-100">
                <div className="container py-5 h-100">
                    <div className="row d-flex align-items-center justify-content-center h-100">
                        <div className="col-md-8 col-lg-7 col-xl-6">
                        <div className='notfound'>
                            <h1>404 Page Not Found.</h1>
                        </div>
                        </div>
                        {/* <div className="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                        <h1>haha</h1>
                        </div> */}
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}

export default NotFound;
