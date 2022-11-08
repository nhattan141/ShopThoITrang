import * as React from 'react';
import { Link } from 'react-router-dom';

import '../Login/Login.scss';

const Register = () => {
    return (
        <section>
            <div className="color"></div>
            <div className="color"></div>
            <div className="color"></div>
            <div className="login-box">
                <div className="login-quare" style={{ ['--i']: 0 }}></div>
                <div className="login-quare" style={{ ['--i']: 1 }}></div>
                <div className="login-quare" style={{ ['--i']: 2 }}></div>
                <div className="login-quare" style={{ ['--i']: 3 }}></div>
                <div className="login-quare" style={{ ['--i']: 4 }}></div>
                <div className="login-container">
                    <div className="login-form">
                        <h2>Register Form</h2>
                        <form>
                            <div className="inputBox">
                                <input type="text" placeholder="Username" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="inputBox">
                                <input type="password" placeholder="Password" />
                            </div>
                            <div className="inputBox">
                                <input type="submit" value="Sign up" />
                            </div>
                            <p className="signup">
                                Had an account ? <Link to="/login">Login</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;
