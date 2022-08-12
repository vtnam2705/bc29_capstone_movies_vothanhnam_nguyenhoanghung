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
                <div className="form-group">
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
                            className="form-control w-75"
                            name="matKhau"
                            onChange={handleChange}
                            id="password"
                            aria-describedby="helpId" />
                        <button className="btn btn-primary">Login</button>
                    </form>
                </div>
            </div>
            {/* <div id="LoginAdmin" className="modal fade" tabIndex={-1} role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Đăng nhập Admin</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>

                    </div>
                </div>
            </div> */}
        </div>
    )
}
