import React from 'react'
import '../../index.css';

export default function Footer() {
    return (
        // <div className='footer bg-light py-3 text-center'>Made by myself</div>
        <div id="footer" className="bg-dark">
            <div className="w-75 mx-auto">
                <div className="footer_content row">
                    <div className="footer_introduce content col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer_title">
                            <h4>Giới thiệu</h4>
                        </div>
                        <div className="introduce_content">
                            <div className="about">
                                <a href="#">Cinema</a>
                            </div>
                            <div className="rules">
                                <a href="#">Điều khoản</a>
                            </div>
                        </div>
                    </div>
                    <div className="footer_contact content col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="cinema">
                            <div className="footer_title">
                                <h4>Kết nối với cinema</h4>
                            </div>
                            <div className="cinema_content">
                                <div className="facebook">
                                    <a href="#">
                                        <i className="fab fa-facebook-square" />
                                    </a>
                                </div>
                                <div className="youtube">
                                    <a href="#">
                                        <i className="fab fa-youtube" />
                                    </a>
                                </div>
                                <div className="twitter">
                                    <a href="#">
                                        <i className="fab fa-twitter" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="app pt-3">
                            <div className="footer_title">
                                <h4>Dowload App</h4>
                            </div>
                            <div className="app_content">
                                <div className="apple_store">
                                    <a href="#">
                                        <i className="fab fa-app-store-ios" />
                                    </a>
                                </div>
                                <div className="ch_play">
                                    <a href="#">
                                        <i className="fab fa-google-play" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer_service content col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer_title">
                            <h4>Kết nối với cinema</h4>
                        </div>
                        <div className="service_content pt-3">
                            <div className="hotline"><p>Hotline:123456</p></div>
                            <div className="working"><p>Giờ làm việc: 8:00 - 22:00</p></div>
                            <div className="email">
                                <p>Email: <a href="#">123@gmail.com</a></p>
                            </div>
                        </div>
                    </div>
                    <div className="footer_support content col-sm-6 col-md-6 col-lg-3 col-xl-3">
                        <div className="footer_title">
                            <h4>Hỗ trợ</h4>
                        </div>
                        <div className="support_content pt-3">
                            <div className="feedback"><p>Feedback:12345@gmail.com</p></div>
                            <div className="recruit"><p>Tuyển dụng: abcxyz@gmail.com</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
