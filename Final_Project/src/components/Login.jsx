import React from "react";
import { Link } from 'react-router-dom';
import '../asserts/Login.css'; 

function Login(){

    const handleSubmit = () => 
    {
        alert('Login successful!');
        window.location.href = '/Home';
    };

    return(
        <div className="wrapper">
            <form className="fmlogin" action="">
                <h1>Login</h1>
                <h2>Accounting Application</h2>
                <div className="input-box">
                    <input className="in" type="text" placeholder="Username" required/>
                </div>

                <div className="input-box">
                    <input className="in" type="password" placeholder="Password" required/>
                </div>
                
                <div className="remember-forgot">
                    {/* <div className="remember">
                        <label><input type="checkbox"/>Remember me</label>
                    </div> */}
                    <div className="forgot">
                        <a class="for" href="#">Forgot Password?</a>
                    </div>
                </div>
                <button className="but" type="button" onClick={handleSubmit}>Login</button>
                <div className="register-link">
                    <p>Or<br/><Link to="/Signup">Signup</Link></p>
                </div>
            </form>
         </div>
    );
}
export default Login;