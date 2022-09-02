import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useNavigate } from 'react-router-dom'
import { USER_INFO_KEY } from '../../constants/common'
import { setUserInfoAction } from '../../store/actions/userAction';
import { MaLoaiNguoiDung } from "../../enums/common";



export default function Header() {
    const dispatch = useDispatch();
    const userState = useSelector((state) => state.userReducer);
    // console.log(userState)
    const navigate = useNavigate();
    // const { cartList = [] } = userState;

    // console.log(cartList)

    const handleLogout = () => {
        localStorage.removeItem(USER_INFO_KEY)
        dispatch(setUserInfoAction(null));
        navigate('/');
    }

    // const renderTableBody = () => {
    //     if (cartList) {
    //         return cartList.map((ele) => {
    //             if (ele !== "")
    //                 return (
    //                     <tr key={ele.maLichChieu}>
    //                         <td>{ele.tenPhim}</td>
    //                         <td>
    //                             {ele.tenGhe.map((ele, idx) => {
    //                                 return (
    //                                     <button key={idx} className="badge badge-warning m-1">
    //                                         {ele}
    //                                     </button>
    //                                 );
    //                             })}
    //                         </td>
    //                         <td>{ele.gioChieu}</td>
    //                         <td>{ele.ngayChieu}</td>
    //                         <td>
    //                             {ele.danhSachVe &&
    //                                 ele.danhSachVe
    //                                     .reduce((previousValue, currentValue) => {
    //                                         previousValue += currentValue.giaVe;
    //                                         return previousValue;
    //                                     }, 0)
    //                                     .toLocaleString()}
    //                         </td>
    //                     </tr>
    //                 );
    //         });
    //     }
    // };

    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark">
                <NavLink className="navbar-brand" to='/'>
                    <img className="w-50" src="../logo.png" alt='logo' />
                </NavLink>
                <>
                    <div className="header_Login ml-auto">
                        {
                            !userState.userInfo ? (
                                <>
                                    <button
                                        className='btn btn-outline-info my-2 my-sm-0 mr-2'
                                        type='submit'
                                        onClick={() => navigate('/register')}
                                    >
                                        Register
                                    </button>

                                    <button onClick={() => navigate('/login')} type="button" id="btnLogin" className="btn btn-secondary" data-toggle="modal" data-target="#myModal">
                                        Login
                                    </button>
                                </>
                            ) : (
                                <>
                                    <NavLink to={'/UpdateInfo'} className='text-decoration-none text-success'>
                                        {userState.userInfo.maLoaiNguoiDung !== MaLoaiNguoiDung.QuanTri ? (
                                            `Welcome ${userState.userInfo.hoTen}!!!!`
                                        ) : (
                                            `Welcome Admin ${userState.userInfo.hoTen}!!!!`
                                        )}
                                    </NavLink>
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
                    <div className="Admin_login ml-2">
                        {/* Set condition in order to moving admin page */}
                        {userState.userInfo && userState.userInfo.maLoaiNguoiDung !== MaLoaiNguoiDung.QuanTri ? (
                            <></>
                        ) : (
                            <button
                                className="btn btn-success"
                                onClick={() => navigate("/admin/movie-management")}
                            >
                                Chuyển tới trang admin
                            </button>
                        )}
                    </div>
                </>
                {/* <div className="cart ml-auto">
                    <div className="cart_layout">
                        <div className="cart_content dropdown">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton"
                                data-toggle="dropdown"
                                aria-haspopup="true"
                                aria-expanded="false"
                                onClick={() => navigate("/cart")}
                            >
                                <i className="fas fa-shopping-cart" />
                                <span className="quantities">
                                    {userState.cartList.length}
                                </span>
                            </button>
                            <div
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton"
                            >
                                <div className="modal-body">
                                    <form>
                                        <table className="table text-center">
                                            <thead>
                                                <tr>
                                                    <th>Tên Phim</th>
                                                    <th>Ghế</th>
                                                    <th>Ngày chiếu</th>
                                                    <th>Giờ chiếu</th>
                                                    <th>Tổng tiền</th>
                                                </tr>
                                            </thead>
                                            <tbody id="cartBody">{renderTableBody()}</tbody>
                                        </table>
                                        <div className="modal-footer">
                                            <button
                                                onClick={() => navigate("/cart")}
                                                type="button"
                                                className="btn btn-primary"
                                            >
                                                Thanh toán
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> */}
            </nav>
        </>
    );
}
