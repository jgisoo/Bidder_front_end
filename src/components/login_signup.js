import React from 'react';
// import './login.css'; // Import your CSS file

function LoginSignupPage() {
    return (
        <div className="login-container">
            <div className="login-form-container">
                {/* Login Form */}
                <form id="login-form">
                    <h2>Login</h2>
                    <div className="login-input">
                    <input type="text" placeholder="Username" required />
                    <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="form-button">Login</button>
                </form>
                {/* Signup Form */}
                <br />
                <form id="signup-form">
                    <h2>Sign Up</h2>
                    <div className="signup-input">
                    <input type="text" placeholder="Username" required />
                    <input type="email" placeholder="Email" required />
                    <input type="password" placeholder="Password" required />
                    </div>
                    <button type="submit" className="form-button">Sign Up</button>
                </form>
            </div>
        </div>
    );
}

export default LoginSignupPage;
