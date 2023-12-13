import React from "react";
import '../asserts/Login.css'; 
const Login=()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Login</h1>
                <h2>Accounting Application</h2>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>

                </div>
                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>
                
                <div className="remember-forgot">
                    {/* <label><input type="checkbox"/>Remember me</label> */}
                    <a class="for" href="#">Forgot Password?</a>
                </div>
                <button type="submit">Login</button>
                <div className="register-link">
                    <p>Or<br/><a href='#'>Signup</a></p>
                </div>
            </form>
         </div>
    );
}
export default Login;