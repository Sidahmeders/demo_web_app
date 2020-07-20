import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/login/login.css';


function Login() {

    return (
        <div className="login-page">
            <div className="background-image"></div>
            <div className="image-div">
                <span className="logo"></span>
                <p>login</p>
            </div>
            <div className="login-forms-div">
                <form>
                    <div>
                        <label>Email</label>
                        <input type="email" name="email" placeholder="email"/>
                    </div>
                    <div>
                        <label>Password</label>
                        <input type="password" name="password" placeholder="password"/>
                    </div>
                    <button>Login</button>
                </form>
                <div className="register-link-btn">
                    <p>Don't have account</p>
                    <Link to="/register">
                        register
                    </Link>
                </div>
            </div>
            <Link to="/home">take me home</Link>
        </div>
    );
};

export default Login;
