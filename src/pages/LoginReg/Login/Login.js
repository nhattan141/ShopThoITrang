import * as React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

//import api
import { handleLoginApi } from 'services/loginService';

import useToken from 'HOC/useToken';

import './Login.scss';

const Login = () => {
    const [username, setUsername] = React.useState();
    const [password, setPassword] = React.useState();
    const [errors, setErrors] = React.useState();
    const { setToken } = useToken();
    const navigate = useNavigate();

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
            if (res && res.status === 200 && res.data.errCode === 0) {
                toast.success('Đăng nhập thành công');
                if (res.data.user.role == '0') {
                    navigate('/');
                } else if (res.data.user.role == '1') {
                    navigate('/dashboard/default');
                }
                setToken(res.data);
            } else {
                setErrors(res.data.errMessage);
            }
        } catch (e) {
            // console.log(e);
            // toast.error('Có lỗi xảy ra');
            if (e.response) {
                if (e.response.data) {
                    toast.error(e.response.data.errMessage);
                }
            }
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
                            <h2>Đăng nhập</h2>
                            <form onSubmit={handleLogin}>
                                <div className="inputBox">
                                    <input type="text" onChange={handleOnChangeUserName} placeholder="Email" />
                                </div>
                                <div className="inputBox">
                                    <input type="password" onChange={handleOnChangePassword} placeholder="Mật khẩu" />
                                </div>
                                <div className="inputBox error">{errors}</div>
                                <div className="inputBox">
                                    <input type="submit" value="Đăng nhập" />
                                </div>
                                <p className="signup">
                                    Chưa có tài khoản ? <Link to="/register">Đăng ký</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
