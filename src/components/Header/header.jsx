import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { USER_INFO_KEY } from '../../constants/common'
import { setUserInfoAction } from '../../store/actions/userAction';


export default function Header() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer)
    const navigate = useNavigate()

    const handleLogout = () => {
        localStorage.removeItem(USER_INFO_KEY)
        dispatch(setUserInfoAction(null));
        navigate('/');
    }

    return (
        <nav className="navbar navbar-expand-sm navbar-dark">
            <NavLink className="navbar-brand" to='/'>
                <img className="w-50" src="../logo.png" alt='logo' />
            </NavLink>
            <div className="header_Login ml-auto">
                {
                    !userState.userInfo ? (
                        <>
                            <button
                                className='btn btn-outline-info my-2 my-sm-0 mr-2'
                                type='submit'
                            >
                                Register
                            </button>

                            <button onClick={() => navigate('/login')} type="button" id="btnLogin" className="btn btn-secondary" data-toggle="modal" data-target="#myModal">
                                Login
                            </button>
                        </>
                    ) : (
                        <>
                            <span>Welcome {userState.userInfo.hoTen}!!!</span>
                            <button
                                onClick={handleLogout}
                                className='btn btn-info ml-3'
                            >
                                Log out
                            </button>
                        </>
                    )
                }
            </div>
        </nav>
        //       </div >
        //     </div >
    );
}
