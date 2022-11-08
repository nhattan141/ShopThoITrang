import * as React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

//import api
import { handleLoginApi } from 'services/loginService';

import './Login.scss';

const Login = ({ setToken }) => {
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [errors, setErrors] = React.useState();

    const handleOnChangeUserName = (e) => {
        setUsername(e.target.value);
    };

    const handleOnChangePassword = (e) => {
        setPassword(e.target.value);
    };

    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const res = await handleLoginApi(username, password);
            setToken(res.data);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className="login-container">
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
                            <h2>Login Form</h2>
                            <form onSubmit={handleLogin}>
                                <div className="inputBox">
                                    <input type="text" onChange={handleOnChangeUserName} placeholder="Username" />
                                </div>
                                <div className="inputBox">
                                    <input type="password" onChange={handleOnChangePassword} placeholder="Password" />
                                </div>
                                <div className="inputBox">
                                    <input type="submit" value="Login" />
                                </div>
                                <p className="signup">
                                    Don't have an account ? <Link to="/register">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};

export default Login;