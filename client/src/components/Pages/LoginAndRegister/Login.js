import React from "react";

import classes from './LoginAndRegister.module.css';
import Wrapper from './Wrapper';
import {Link} from 'react-router-dom';
const Login = () => {

    return (
        <Wrapper>
        <div className={`${classes.form} ${classes.login}`}>
                <span className={classes.title}>Login</span>

                <form action="#">
                    <div className={`${["input-field"]}`}>
                        <input type="text" placeholder="Enter your email" required/>
                        <i className="uil uil-envelope icon"></i>
                    </div>
                    <div className={`${["input-field"]}`}>
                        <input type="password" className="password" placeholder="Enter your password" required/>
                        <i className="uil uil-lock icon"></i>
                        <i className="uil uil-eye-slash showHidePw"></i>
                    </div>

                    <div className={classes["checkbox-text"]}>
                        <div className={classes["checkbox-content"]}>
                            <input type="checkbox" id="logCheck"/>
                            <label htmlFor="logCheck" className={classes["text"]}>Remember me</label>
                        </div>
                        {/* <a href="#" className="text">Forgot password?</a> */}
                    </div>

                    <div className={`${classes["input-field"]} classes.button`}>
                        <input type="button" value="Login"/>
                    </div>
                </form>

                <div className={classes["login-signup"]}>
                    <span className={classes["text"]}>Not a member?
                        <Link to="/register" className={`${classes["text"]} ${classes["signup-link"]}`}>Signup Now</Link>
                    </span>
                </div>
            </div>
        </Wrapper>
    );
}

export default Login;