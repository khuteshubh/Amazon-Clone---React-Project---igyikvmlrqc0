import { Label } from "@material-ui/icons";
import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
function Login() {
    return(
        <div className="login-page">
           
            <Link to="/">
                <img className="login-logo" src="https://logos-world.net/wp-content/uploads/2020/04/Amazon-Logo.png" alt=""/>

            </Link>
                
            
            
            <div className="login_container">
                <h2>Sign in</h2>
                <form>
                    <h5>Email or mobile phone number</h5>
                    <input className="input-field" type="text" />
                    <br/>
                    <h5>Enter Password</h5>
                    <input type="password" />
                    <button className="login_signinButton">Sign in</button>
                    <p>By signing-in you agree to Amazon's Condition of use & sale. Please see our Privarcy Notics, our cookies Notice and our Interest-Based Ads Notice. </p>
                    <button className="login_registerButton">Create your Amazon Account</button>
                </form>

            </div>
            
        </div>
    )
}
export default Login;