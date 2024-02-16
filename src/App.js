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
import VerifyMail from "./pages/VerifyMail";
import ForgetPassword from "./pages/ForgetPassword";
import AdminDashboard from "./admin/AdminDashboard";
import AddProduct from "./admin/AddProduct";
import ListProduct from "./admin/ListProduct";
import UpdateUser from "./admin/UpdateUser";
import UpdateProduct from "./admin/UpdateProduct";
import ListUser from "./admin/ListUser";
import { ViewProduct } from "./pages/ViewProduct";
import ManageUser from "./admin/ManageUser";
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
          <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
          <Route path="/verify" element={<VerifyMail />}></Route>
          <Route path="/*" element={<NotFound />}></Route>

          {/* <Route path="/store" element={<Front />} /> */}
          {/* <Route path="/store/:categoryID" element={<Front/>}></Route> */}

          <Route path="/viewproduct/:productID" element={<ViewProduct />}></Route>

          <Route path="/user" element={<CheckUser />}>
            <Route path="cart" element={<Cart />} />
            {/* <Route path="/User" element={<User />}></Route> */}
            <Route path="dashboard" element={<Dashboard />} />
          </Route>
          <Route path="/admin" element={<CheckUser />}>
            <Route path="dashboard" element={<AdminDashboard/>} />
            <Route path="addproduct" element={<AddProduct />} />
            <Route path="manageProduct" element={<UpdateProduct />} />
            <Route path="manageUser" element={<ManageUser />} />
            <Route path=":id/updateUser" element={<UpdateUser />} />
            <Route path="listuser" element={<ListUser />} />
            <Route path="listproduct" element={<ListProduct />} />
            <Route path="updateCategory" element={<ListProduct />} />
            {/* <Route path="" element={<ListProduct />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
