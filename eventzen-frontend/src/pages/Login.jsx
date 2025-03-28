import { useState } from 'react';
import { login } from '../services/authService';
import { setToken } from '../utils/token';
import "../styles/Login.css"

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await login({ email, password });
      setToken(data.token);
      window.location.href = '/dashboard';
    } catch (error) {
      console.error('Login error:', error);
    }
  };

  return (
    <div className='login-container'>
      <h1 className='login-title'>Login</h1>
        <form onSubmit={handleSubmit} className='login-form'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className='login-input'
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className='login-input'
          />
        <button type="submit" className='login-button'>Login</button>
      </form>
    </div>
  );
};

export default Login;
