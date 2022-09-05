import React, { useContext, useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingContext } from "../../contexts/loading.context";
import { useAsync } from "../../hooks/useAsync";
import { fetchMovieListApi } from "../../services/movie";

export default function MovieList() {
  const navigate = useNavigate();

  const { state: movieList = [] } = useAsync({
    dependencies: [],
    service: () => fetchMovieListApi()
  })

  // **** Search function - start ****
  const [searchInput, setSearchInput] = useState('');

  // Technique debounce    
  const typingTimeoutRef = useRef(null)
  const handleChange = (e) => {
    const { value } = e.target;
    setSearchInput(value);

    // if(!handleSubmit) return;

    if (typingTimeoutRef.current) {
      clearTimeout(typingTimeoutRef.current)
    };

    typingTimeoutRef.current = setTimeout(() => {
      const filtered = handleFilterChange;
    }, 300)
  }

  const handleFilterChange = !searchInput
    ? movieList
    : movieList.filter((ele) =>
      ele.tenPhim.toLowerCase().includes(searchInput.toLowerCase())
    )

  // **** Search function - end ****

  const renderHotMovies = () => {
    return handleFilterChange.map((ele) => {
      if (ele.hot) {
        return (
          <div
            className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4"
            key={ele.maPhim}
          >
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
        );
      }
    });
  };

  const renderPhimDangChieu = () => {
    return handleFilterChange.map((ele) => {
      if (ele.dangChieu) {
        return (
          <div
            className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4"
            key={ele.maPhim}
          >
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
        );
      }
    });
  };

  const renderAllMovies = () => {
    return handleFilterChange.map((ele) => {
      if (ele.sapChieu) {
        return (
          <div
            className="card_overlay col-xs-12 col-md-6 col-lg-4 col-xl-4"
            key={ele.maPhim}
          >
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
        );
      }
    });
  };

  return (
    <>
      <div className="title bg-dark row">
        <ul
          className="py-3 nav nav-pills justify-content-center col-sm-12 col-md-12 col-lg-6 col-xl-6"
          role="tablist"
        >
          <li className="nav-item">
            <a className="nav-link active" data-toggle="pill" href="#phimHot">
              Phim Hot
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#phimDangChieu">
              Phim đang chiếu
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" data-toggle="pill" href="#movies">
              Sắp khởi chiếu
            </a>
          </li>
        </ul>
        <div className="py-3 col-sm-12 col-md-12 col-lg-6 col-xl-6">
          <div className="search_content">
            <div className="search col-sm-12 col-md-12">
              <a className="nav-link">
                <form className="form-inline justify-content-center row">
                  <input
                    className="form-control mr-2 col-7"
                    type="text"
                    placeholder="Which movie do you like to watch?...."
                    onChange={handleChange}
                  />
                </form>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="movies tab-content pt-4">
        <div id="phimHot" className="container tab-pane active">
          <div className="row">{renderHotMovies()}</div>
        </div>
        <div id="phimDangChieu" className="container tab-pane fade">
          <div className="row">{renderPhimDangChieu()}</div>
        </div>
        <div id="moviesAll" className="container tab-pane fade">
          <div className="row">{renderAllMovies()}</div>
        </div>
      </div>
    </>
  );
}
