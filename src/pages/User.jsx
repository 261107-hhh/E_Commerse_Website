import { Link } from "react-router-dom";

const User = () => {
    return (
        <>
            <h1>user</h1>
            <ul>
                <li className="">
                    <Link className="" to={'/User'}>User</Link>
                </li>
                <li className="">
                    <Link className="" to={'/User/Dashboard'}>Dashboard</Link>
                </li>
                <li className="">
                    <Link className="" to={'/User/Cart'}>Cart</Link>
                </li>
            </ul >
        </>
    )
}

export default User;