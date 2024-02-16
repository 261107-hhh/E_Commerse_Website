import { Input } from "@mui/material";
import { Link } from "react-router-dom";
// import { Input } from "reactstrap";

const AdminNavbar = () => {



    return (
        <div className="container py-2 ">
            <div className="row">
                <div className="col">
                    <nav aria-label="breadcrumb" className="bg-light rounded-3 p-3 mb-4">
                        <ol className="breadcrumb mb-0" style={{ "justifyContent": "space-evenly" }}>
                        
                            <li className=""><Link to={"/admin/manageUser"}>Manage User</Link></li>
                            <li className=""><Link to={"/admin/manageProduct"}>Manage Product</Link></li>
                        </ol>
                    </nav>
                </div>
            </div>
        </div >
    )
}

export default AdminNavbar;