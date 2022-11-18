import React from 'react'
import '../../index.css';

export default function Footer() {
    return (
        <div>
            {/* <div id="footer" className="bg-dark">
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
                                <div className="app_content d-flex flex-column align-items-start">
                                    <div className="apple_store mb-2">
                                        <a href="#">
                                            <i className="fab fa-app-store-ios" />
                                            <span className='mx-3'>App Store</span>
                                        </a>
                                    </div>
                                    <div className="ch_play">
                                        <a href="#">
                                            <i className="fab fa-google-play" />
                                            <span className='mx-3'>CH Play</span>
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
            </div> */}
            <div>
                <footer className="text-center text-lg-start bg-light text-muted shadow-lg bg-white rounded">
                    {/* Section: Social media */}
                    <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                        {/* Left */}
                        <div className="me-5 d-none d-lg-block">
                            <span>Get connected with us on social networks:</span>
                        </div>
                        {/* Left */}
                        {/* Right */}
                        <div className='footer_social'>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-facebook-f" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-twitter" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-google" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-instagram" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-linkedin" />
                            </a>
                            <a href className="me-4 text-reset">
                                <i className="fab fa-github" />
                            </a>
                        </div>
                        {/* Right */}
                    </section>
                    {/* Section: Social media */}
                    {/* Section: Links  */}
                    <section className>
                        <div className="container text-center text-md-start mt-5">
                            {/* Grid row */}
                            <div className="row mt-3">
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                    {/* Content */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        {/* <i className="fas fa-gem me-3" />Company name */}
                                        <img className="w-50" src="../logo.png" alt='logo' />
                                    </h6>
                                    <p>
                                        Here you can use rows and columns to organize your footer content. Lorem ipsum
                                        dolor sit amet, consectetur adipisicing elit.
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Products
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Angular</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">React</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Vue</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Laravel</a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">
                                        Useful links
                                    </h6>
                                    <p>
                                        <a href="#!" className="text-reset">Pricing</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Settings</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Orders</a>
                                    </p>
                                    <p>
                                        <a href="#!" className="text-reset">Help</a>
                                    </p>
                                </div>
                                {/* Grid column */}
                                {/* Grid column */}
                                <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                    {/* Links */}
                                    <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
                                    <p><i className="fas fa-home me-3" /> New York, NY 10012, US</p>
                                    <p>
                                        <i className="fas fa-envelope me-3 mr-2" />
                                        thanhnamkh2705@gmail.com
                                    </p>
                                    <p><i className="fas fa-phone me-3 mr-2" />0399677216</p>
                                    <p><i className="fas fa-print me-3" /> + 01 234 567 89</p>
                                </div>
                                {/* Grid column */}
                            </div>
                            {/* Grid row */}
                        </div>
                    </section>
                    {/* Section: Links  */}
                    {/* Copyright */}
                    <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
                        © 2022 Copyright
                        <a className="text-reset fw-bold" href="https://github.com/vtnam2705"> Vo Thanh Nam</a>
                    </div>
                    {/* Copyright */}
                </footer>
            </div>
        </div>
    )
}
