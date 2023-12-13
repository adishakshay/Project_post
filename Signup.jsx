import React from "react";
import '../asserts/Signup.css';
const Signup=()=>{
    return(
        <div className="wrapper">
            <form action="">
                <h1>Sign Up</h1>
                <h2>Accountion Application</h2>
                <div className="input-box">
                    <input type="text" placeholder="Username" required/>
                </div>

                <div className="input-box">
                    <input type="text" placeholder="Email Id" required/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Password" required/>
                </div>

                <div className="input-box">
                    <input type="password" placeholder="Confirm Password" required/>
                </div>
                
                <div className="remember-forgot">
                    {/* <label><input type="checkbox"/>Remember me</label> */}
                    <a class="for" href="#">Forgot Password?</a>
                </div>

                <button type="submit">Sign Up</button>
            </form>
         </div>
    );
}
export default Signup;
