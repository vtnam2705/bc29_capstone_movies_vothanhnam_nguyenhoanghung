import { notification } from 'antd'
import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { registerApi } from '../../services/user'



export default function Register() {
    const [register, setRegister] = useState({
        taiKhoan: '',
        matKhau: '',
        email: '',
        soDt: '',
        maNhom: '',
        hoTen: '',
    })
    const navigate = useNavigate()

    const handleChange = (e) => {
        const { name, value } = e.target;

        setRegister({
            ...register,
            [name]: value,
        })
        // console.log(e.target.value)
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const result = await registerApi(register);
            notification.success({ message: `${result.data.message}` });
            navigate('/')
        } catch (error) {
            notification.error({
                description: `${error.response.data.content}`
            });
        }

    }


    return (
        <div>
            <section className="vh-100" style={{ backgroundColor: '#eee' }}>
                <div className="container h-100">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-lg-12 col-xl-11">
                            <div className="card text-black" style={{ borderRadius: 25 }}>
                                <div className="card-body p-md-5">
                                    <div className="row justify-content-center">
                                        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                            <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                                            <form className="mx-1 mx-md-4" onSubmit={handleSubmit}>
                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example1c"
                                                            className="form-control"
                                                            placeholder='Username'
                                                            name='taiKhoan'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-lock fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="password"
                                                            id="form3Example4c"
                                                            className="form-control"
                                                            placeholder='Password'
                                                            name='matKhau'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-key fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input type="password" id="form3Example4cd" className="form-control" placeholder='Repeat your password' onChange={handleChange} />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-envelope fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="email"
                                                            className="form-control"
                                                            placeholder='Your Email'
                                                            name='email'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-phone fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            id="form3Example3c"
                                                            className="form-control"
                                                            placeholder='Phone Number'
                                                            name='soDt'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                {/* <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Your Group'
                                                            name='maNhom'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div> */}

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw mr-1" />
                                                    <div className="form-outline flex-fill mb-0">
                                                        <input
                                                            type="text"
                                                            className="form-control"
                                                            placeholder='Your Name'
                                                            name='hoTen'
                                                            onChange={handleChange}
                                                        />
                                                    </div>
                                                </div>

                                                <div className="d-flex flex-row align-items-center mb-4">
                                                    <i className="fas fa-user fa-lg me-3 fa-fw mr-1" />
                                                    <select
                                                        type='select'
                                                        className="form-select"
                                                        aria-label="Default select example"
                                                        name='maNhom'
                                                        onChange={handleChange}
                                                    >
                                                        <option>GP01</option>
                                                        <option>GP02</option>
                                                        <option>GP03</option>
                                                        <option>GP04</option>
                                                        <option>GP05</option>
                                                        <option>GP06</option>
                                                        <option>GP07</option>
                                                        <option>GP08</option>
                                                        <option>GP09</option>
                                                        <option>GP10</option>
                                                    </select>
                                                </div>


                                                <div className="form-check text-center mb-5">
                                                    <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                                                    <label className="form-check-label" htmlFor="form2Example3">
                                                        I agree all statements in <a href="#!">Terms of service</a>
                                                    </label>
                                                </div>

                                                <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                    <button
                                                        // type="button"
                                                        className="btn btn-primary btn-lg"
                                                    >
                                                        Register
                                                    </button>
                                                </div>
                                            </form>
                                        </div>
                                        <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
