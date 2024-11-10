// src/components/Signup.js
import React, { useState } from 'react';

const Signup = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Signing up with:', { email, password });
    };

    return (
        <div style={{ padding: '20px' }}>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    style={{ display: 'block', marginBottom: '10px', padding: '8px' }}
                />
                <button type="submit" style={{ padding: '10px', backgroundColor: '#4a90e2', color: 'white' }}>Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
