import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchMovieListApi } from "../../services/movie";

export default function MovieList() {
    const navigate = useNavigate();

    const [movieList, setMovieList] = useState([]);

    useEffect(() => {
        fetchMovieList();
    }, []);

    const fetchMovieList = async () => {
        const result = await fetchMovieListApi();
        console.log(result.data)
        setMovieList(result.data.content);
    }


    const renderMovieList = () => {
        return movieList.map(ele => {
            return (
                <div className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4" key={ele.maPhim}>
                    <div className="card">
                        <div className="card-header p-0">
                            <img
                                className="card_img img-fluid w-100"
                                src={ele.hinhAnh}
                                alt="movie"
                            />
                            <div className="card-hover">
                                <button
                                    onClick={() => navigate(`/movie/${ele.maPhim}`)}
                                    className="btn"
                                >
                                    Xem Chi tiết
                                </button>
                            </div>
                        </div>
                        <div className="card-body">
                            <h4 className="card-title d-flex justify-content-center">
                                {ele.tenPhim}
                            </h4>
                        </div>
                    </div>
                </div>
            )
        })
    }

    return (
        <div>
            <div className="title row">
                <ul className="nav nav-pills justify-content-center col-sm-12 col-md-12 col-lg-6 col-xl-6" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" data-toggle="pill" href="#phimHot">Phim Hot</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#phimDangChieu">Phim đang chiếu</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="pill" href="#movies">Còn lại</a>
                    </li>
                </ul>
                {/* search-movies */}
                <div className="searchMovies m-sm-auto col-sm-12 col-md-12 col-lg-6 col-xl-6">
                    <div className="search_cart row">
                        <div className="search col-sm-9 col-md-9">
                            <a className="nav-link"><form className="form-inline justify-content-center row">
                                <input className="form-control mr-2 col-7" type="text" placeholder="Search" />
                                <button className="btn btn-success col-3" type="submit">
                                    Search
                                </button>
                            </form></a>
                        </div>
                        {/* Cart */}
                        <div className="cart mr-sm-2 col-sm-2 col-md-2 col-lg-2">
                            <button type="button" id="btnCart" className="btn" data-toggle="modal" data-target="#myModal">
                                <i className="fas fa-shopping-cart text-info" />
                            </button>
                            {/* <span class="quantity_cart">123</span> */}
                        </div>
                    </div>
                </div>
            </div>

            <div className="movies tab-content pt-4">

                <div id="phimHot" className="container tab-pane active">
                    <div className="row">
                        {renderMovieList()}
                    </div>
                </div>

                <div id="phimDangChieu" className="container tab-pane fade">
                    <div className="row">
                        <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-header p-0">
                                    <img className="img-fluid w-100" src="./thor-tinh-yeu-va-sam-set_gp01.jpg" alt />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title d-flex justify-content-center">
                                        Tên phim
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-header p-0">
                                    <img className="img-fluid w-100" src="./one-piece-red_gp01.jpg" alt />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title d-flex justify-content-center">
                                        Tên phim
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col-xs-12 col-md-6 col-lg-4 col-xl-4">
                            <div className="card">
                                <div className="card-header p-0">
                                    <img className="img-fluid w-100" src="./avatar-3_gp01.jpg" alt />
                                </div>
                                <div className="card-body">
                                    <h2 className="card-title d-flex justify-content-center">
                                        Tên phim
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="movies" className="container tab-pane fade">
                    <div className="row">{renderMovieList()}</div>
                </div>
            </div>
        </div>
    );
}
