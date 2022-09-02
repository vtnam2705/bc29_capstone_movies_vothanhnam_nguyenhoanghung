import React from 'react'
import { useNavigate } from 'react-router-dom'
import Footer from '../../components/Footer/footer'
import Header from '../../components/Header/header'
import '../PageNotFound/PageNotFound.scss'
import Image from '../../Image/HTML-404-Page-with-SVG.png'

export default function PageNotFound() {
    const navigate = useNavigate()

    const prevPage = () => {
        navigate('/')
    }

    return (
        <>
            {/* <Header /> */}
            {/* <div style={
                {
                    height: '640px',
                    textAlign: 'center',
                }
            }
            >
                <h1>Page Not found 404!</h1>
                <button onClick={prevPage} className='btn btn-primary'>
                    Back to Homepage
                </button>
            </div> */}
            <div className="wrapper" style={{height: '670px'}}>
                <h2>Oops! Page not found.</h2>
                <div>
                    <img src={Image} alt='404'/>
                </div>
                <h4>We can't fint the page you're looking for.</h4>
                <button type="button" className="main-btn" onClick={prevPage}>GO BACK HOME</button>
            </div>

            <Footer />
        </>
    )
}
