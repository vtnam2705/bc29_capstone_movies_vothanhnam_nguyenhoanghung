import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieDetailApi } from "../../services/movie";
import { formatDate } from "../../utils/common";

export default function Details() {
  const [movieDetail, setMovieDetail] = useState({});

  const param = useParams();

  useEffect(() => {
    fetchMovieDetail();
  }, []);

  const fetchMovieDetail = async () => {
    const result = await fetchMovieDetailApi(param.movieId);

    setMovieDetail(result.data.content);
  };

  return (
    <div className="movies_detail row">
      <div className="movies_images col-lg-4 col-6 col-sm-12">
        <img className="w-100 h-100" src={movieDetail.hinhAnh} />
      </div>
      <div className="movies_content container col-lg-8 col-6 col-sm-12">
        <div className="content_title">
          <h1>{movieDetail.tenPhim}</h1>
          <div className="movie_point">
            <span className="title">Đánh giá : </span>
            <span className="content">{movieDetail.danhGia}/10</span>
          </div>
          <div className="ngayChieu">
            <span className="title">Ngày chiếu : </span>
            <span className="content">{formatDate(movieDetail.ngayChieu)}</span>
          </div>
          <div className="btnTrailer">
            <button data-toggle="modal" data-target="#exampleModalCenter">Trailer</button>
            <div className="modal fade" id="exampleModalCenter">
              <div className="modal-dialog modal-dialog-centered" role='document'>
                <div className="modal-content">
                  <div className="modal-body">
                    <div className="embed-responsive embed-responsive-16by9 p-3">
                      <iframe className="embed-responsive-item" src={movieDetail.trailer}></iframe>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="details_content p-0 col-12">
        <div className="content_header pt-5 row">
          <h2 className="col-5">Nội dung phim</h2>
        </div>
        <div className="content_descript">
          <p>{movieDetail.moTa}</p>
        </div>
      </div>
    </div>
  );
}

