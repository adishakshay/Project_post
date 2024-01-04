import React, { useState } from "react";
import '../asserts/Signup.css'; 

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const isEmailValid = (email) => 
    {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSignup = () => {
        if (!username || !email || !password || !confirmPassword) 
        {
            alert("Please fill in all fields.");
        }
        else if (!isEmailValid(email)) 
        {
            alert("Please enter a valid email address.");
        }
        else if (password === confirmPassword) 
        {
            alert("Sign Up successful!");
            window.location.href = '/Home';
        } 
        else
        {
            alert("Passwords do not match!");
        }
    };

    return (
        <div className="wrapper1">
            <form className="fmlogin" action="">
                <h1>Sign Up</h1>
                <h2>Accounting Application</h2>
                <div className="input-box">
                    <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Email Id" value={email} onChange={(e) => setEmail(e.target.value)} required />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                </div>
                
                <div className="remember-forgot">
                    <a className="for" href="#">Forgot Password?</a>
                </div>
                <button className="but" type="button" onClick={handleSignup}>Sign Up</button>
            </form>
        </div>
    );
}

export default Signup;





