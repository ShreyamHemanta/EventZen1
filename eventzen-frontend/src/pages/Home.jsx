import { Link } from 'react-router-dom';
import "../styles/Home.css"

const Home = () => {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to EventZen</h1>
            <p className="home-description">Manage your events efficiently and stay organized.</p>
            <div className="home-buttons">
                <Link to="/login" className="home-button">Login</Link>
                <Link to="/register" className="home-button">Register</Link>
            </div>
        </div>
    );
};

export default Home;
