import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import 'react-toastify/dist/ReactToastify.css';
import NotFound from "./pages/NotFound";
import Front from "./pages/Front";
import About from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import SignUp from "./pages/Signup";
import Login from "./pages/Login";
// import User from "./pages/User";
import Dashboard from "./pages/Dashboard";
import Cart from "./pages/Cart";
import { ToastContainer } from "react-toastify";
import { CheckUser } from "./CheckUser";
// import { CheckUser } from "./CheckUser";
function App() {
  return (
    <>

      <BrowserRouter>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<Front />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/*" element={<NotFound />}></Route>

          <Route path="/user" element = {<CheckUser />}>
            <Route path="cart" element={<Cart />} />
            {/* <Route path="/User" element={<User />}></Route> */}
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
