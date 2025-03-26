import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div className="container mx-auto text-center py-10">
            <h1 className="text-4xl font-bold mb-6">Welcome to EventZen</h1>
            <p className="mb-4">Manage your events efficiently and stay organized.</p>
            <div className="space-x-4">
                <Link to="/login" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">Login</Link>
                <Link to="/register" className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">Register</Link>
            </div>
        </div>
    );
};

export default Home;
