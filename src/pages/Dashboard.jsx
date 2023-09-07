import Footer from "../partial/footer";
import Navbar from "../partial/navbar";
import '../Style/Dashboard.css'

const Dashboard = () => {
    const user = {
        name: 'John Doe',
        email: 'johndoe@example.com',
        membership: 'Gold',
        orders: 10,
    };
    return (
        <>
            <Navbar />
            <div className="container1">

                <div className="dashboard-container">
                    <h1>Dashboard</h1>
                    <div className="user-info">
                        <h2>Welcome, {user.name}!</h2>
                        <p>Email: {user.email}</p>
                        <p>Membership: {user.membership}</p>
                        <p>Total Orders: {user.orders}</p>
                    </div>
                    <div className="recent-orders">
                        <h3>Recent Orders</h3>
                        <ul>
                            <li>Order 1</li>
                            <li>Order 2</li>
                            <li>Order 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Dashboard;