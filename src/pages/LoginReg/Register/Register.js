import * as React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

//import api
import { handleSignupApi } from 'services/loginService';

import '../Login/Login.scss';

const Register = () => {
    const [emailSignup, setEmailSignup] = React.useState();
    const [passReg, setPassReg] = React.useState();
    const [confirm, setConfirm] = React.useState();
    const [errors, setErrors] = React.useState();

    const handleOnChangeMailReg = (e) => {
        setEmailSignup(e.target.value);
    };

    const handleOnChangePassReg = (e) => {
        setPassReg(e.target.value);
    };

    const handleOnChangeConfirm = (e) => {
        setConfirm(e.target.value);
    };

    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            const res = await handleSignupApi(emailSignup, passReg, confirm);
            if (res && res.data.errCode === 0) {
                setErrors();
                toast.success('Dang ky thanh cong, ban co th dang nhap roi');
            } else {
                setErrors(res.data.errMessage);
            }
        } catch (e) {
            console.log(e);
            toast.error('Co loi xay ra');
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
                            <h2>Register Form</h2>
                            <form onSubmit={handleSignup}>
                                <div className="inputBox">
                                    <input type="text" onChange={handleOnChangeMailReg} placeholder="Email" />
                                </div>
                                <div className="inputBox">
                                    <input type="password" onChange={handleOnChangePassReg} placeholder="Password" />
                                </div>
                                <div className="inputBox">
                                    <input type="password" onChange={handleOnChangeConfirm} placeholder="Password" />
                                </div>
                                <div className="inputBox error">{errors}</div>
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
        </div>
    );
};

export default Register;
