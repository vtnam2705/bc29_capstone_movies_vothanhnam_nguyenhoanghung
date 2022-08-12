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
    <div className="movies_layout row">
      <div className="movies_images col-lg-4 col-6 col-sm-12">
        <img className="w-100 h-100" src={movieDetail.hinhAnh} />
      </div>
      <div className="movies_content container col-lg-8 col-6 col-sm-12">
        <div className="content_title">
          <h1>{movieDetail.tenPhim}</h1>
          <div className="movie_point">
            <span className="title">Đánh giá : </span>
            <span className="content">{movieDetail.danhGia}</span>
          </div>
          <div className="ngayChieu">
            <span className="title">Ngày chiếu : </span>
            <span className="content">
              {formatDate(movieDetail.ngayKhoiChieu)}
            </span>
          </div>
          <div className="btnTrailer">
            <button>Trailer</button>
          </div>
        </div>
      </div>
      <div className="details_content pt-5 col-12">
        <div className="content_header row">
          <h2 className="col-5">Nội dung phim</h2>
        </div>
        <div className="content_descript">
          <p>{movieDetail.moTa}</p>
        </div>
      </div>
    </div>
  );
}
