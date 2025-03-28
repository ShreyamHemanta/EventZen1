import { useNavigate } from 'react-router-dom';
import "../styles/Dashboard.css"

const Dashboard = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <div className="container mx-auto text-center py-10">
            <h2 className="text-3xl font-bold">Dashboard</h2>
            <button onClick={handleLogout} className="bg-red-500 text-white px-4 py-2 mt-4 rounded">
                Logout
            </button>
        </div>
    );
};

export default Dashboard;
