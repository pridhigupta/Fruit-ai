import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberPassword, setRememberPassword] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div className="login-container">
            <h2>Login</h2>
            <p>By signing in you are agreeing our <Link to="/terms">Term and privacy policy</Link></p>
            <div className="login-options">
                <Link to="/login" className="active">Login</Link>
                <Link to="/register">Register</Link>
            </div>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="email">Email Address</label>
                    <input 
                        type="email" 
                        id="email" 
                        placeholder="Email Address" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input 
                        type="password" 
                        id="password" 
                        placeholder="Password" 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className="show-password">👁️</span> {}
                </div>
                <div className="password-options">
                    <div>
                        <input 
                            type="checkbox" 
                            id="rememberPassword" 
                            checked={rememberPassword}
                            onChange={(e) => setRememberPassword(e.target.checked)} 
                        />
                        <label htmlFor="rememberPassword">Remember password</label>
                    </div>
                    <Link to="/forgot-password">Forget password</Link>
                </div>
                <button type="submit" className="login-button">Login</button>
            </form>
            <p>or connect with</p>
            <div className="social-login">
                <button className="social-button facebook">Facebook</button>
                <button className="social-button instagram">Instagram</button>
                <button className="social-button pinterest">Pinterest</button>
                <button className="social-button linkedin">LinkedIn</button>
            </div>
            <div className="fingerprint-login">
                <span>🔒</span> {}
            </div>
        </div>
    );
};

export default Login;
