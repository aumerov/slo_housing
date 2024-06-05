import React from 'react';
import './AuthPage.css';

const AuthPage: React.FC = () => {
    return (
        <div className="auth-page">
            <h1>Login to leave a review</h1>
            <div className="input-group mb-3">
                <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon2" />
                <span className="input-group-text" id="basic-addon2">@calpoly.edu</span>
            </div>
            <div className="input-group mb-3">
                <input type="password" className="form-control" placeholder="Password" aria-label="Password" aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Randomize</button>
            </div>
            <button className="login-button">Login</button>
            <div className="construction-banner">
                =====Under Construction=====
            </div>
        </div>
    );
};

export default AuthPage;
