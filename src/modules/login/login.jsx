import React, { useState } from 'react'
import { loginApi } from '../../services/user';
import { setUserInfoAction } from '../../store/actions/userAction';
import { useDispatch } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { USER_INFO_KEY } from '../../constants/common';

export default function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate()
    const [login, setLogin] = useState({
        taiKhoan: '',
        matKhau: '',
    })

    const handleChange = (event) => {
        const { name, value } = event.target;

        setLogin({
            ...login,
            [name]: value,
        })
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        const result = await loginApi(login)

        // Save user, password to local storage in order to web will be auto-login when accessing
        localStorage.setItem(USER_INFO_KEY, JSON.stringify(result.data.content))

        // dispatch data to store
        dispatch(setUserInfoAction(result.data.content))
        // After login, return home page
        navigate('/')
    }

    return (
        <div>
            <div className="modal-body">
                {/* <div className="form-group">
                    <form className='w-25 mx-auto my-5' onSubmit={handleSubmit}>
                        <label>Tài khoản</label>
                        <input
                            type="text"
                            className="form-control w-75"
                            name='taiKhoan'
                            aria-describedby="helpId"
                            onChange={handleChange}
                        />
                        <label>Mật khẩu</label>
                        <input
                            type="password"
                            className="form-control w-75 mb-3"
                            name="matKhau"
                            onChange={handleChange}
                            id="password"
                            aria-describedby="helpId" />
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div> */}

                <section className="vh-100">
                    <div className="container py-5 h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
                                <div className="card shadow-2-strong shadow" style={{ borderRadius: '1rem' }}>
                                    <div className="card-body p-5 text-center">
                                        <h3 className="mb-5">Sign in</h3>
                                        <form onSubmit={handleSubmit}>
                                            <div className="form-outline mb-4">
                                                {/* <label className="form-label" htmlFor="typeEmailX-2">Email</label> */}
                                                <input
                                                    type="text"
                                                    className="form-control form-control-lg"
                                                    placeholder='Username'
                                                    name='taiKhoan'
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            <div className="form-outline mb-4">
                                                {/* <label className="form-label" htmlFor="typePasswordX-2">Password</label> */}
                                                <input
                                                    type="password"
                                                    className="form-control form-control-lg"
                                                    placeholder='Password'
                                                    name="matKhau"
                                                    onChange={handleChange}
                                                />
                                            </div>
                                            {/* Checkbox */}
                                            <div className="form-check d-flex justify-content-start mb-4">
                                                <input className="form-check-input" type="checkbox" defaultValue id="form1Example3" />
                                                <label className="form-check-label" htmlFor="form1Example3"> Remember password </label>
                                            </div>
                                            <button className="btn btn-primary btn-lg btn-block" type="submit">Login</button>
                                        </form>
                                        <hr className="my-4" />
                                        <button className="btn btn-lg btn-block btn-primary" style={{ backgroundColor: '#dd4b39' }} type="submit">
                                            <i className="fab fa-google me-2" />
                                            Sign in with google
                                        </button>
                                        <button className="btn btn-lg btn-block btn-primary mb-2" style={{ backgroundColor: '#3b5998' }} type="submit">
                                            <i className="fab fa-facebook-f me-2" />
                                            Sign in with facebook
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
