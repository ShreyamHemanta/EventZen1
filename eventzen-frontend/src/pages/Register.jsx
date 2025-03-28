import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "../styles/Register.css"

const Register = () => {
    const [username, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            // Send register request to .NET backend
            const response = await fetch('http://localhost:5008/api/user/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ username, email, password }),
            });

            if (response.ok) {
                navigate('/login');
            } else {
                alert('Registration failed');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="register-container">
            <h1 className="register-title">Register</h1>
            <form onSubmit={handleSubmit} className="register-form">
                <input
                    type="text"
                    placeholder="User Name"
                    value={username}
                    onChange={(e) => setUserName(e.target.value)}
                    className="register-input"
                />
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="register-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="register-input"
                />
                <button
                    type="submit"
                    className="register-button">
                    Register
                </button>
            </form>
        </div>
    );
};

export default Register;
