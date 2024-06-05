import React from 'react';

const AuthPage: React.FC = () => {
    return (
        <div>
            <h1>Login</h1>
            <input placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
        </div>
    );
};

export default AuthPage;
