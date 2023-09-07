import Navbar from '../partial/navbar';
import Footer from '../partial/footer';
import '../Style/signup.css'
import SignupCompo from '../component/SignupCompo';
const Signup = () => {
    return (
        <>
            <Navbar />
            <SignupCompo />
            <Footer />
        </>
    );
}

export default Signup;