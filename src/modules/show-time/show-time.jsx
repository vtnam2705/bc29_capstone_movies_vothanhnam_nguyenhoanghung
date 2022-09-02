import React, { Fragment, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { fetchMovieShowTimeApi } from "../../services/theater";

// import moment from "moment";
import { formatDate } from "../../utils/common";

export default function ShowTime() {
  const [movieShowTime, setMovieShowTime] = useState({});

  const param = useParams();

  useEffect(() => {
    fetchMovieShowTime();
  }, []);

  const fetchMovieShowTime = async () => {
    const result = await fetchMovieShowTimeApi(param.movieId);

    setMovieShowTime(result.data.content);
  };

  return (
    <div className="movie_showtimes container">
      <div className="showtime_layout">
        {movieShowTime?.heThongRapChieu?.map((ele) => {
          return (
            <div key={ele.maHeThongRap} className="showtime_detail">
              <div className="showtime_tilte p-0 row">
                <div className="title_content col-8 row">
                  <img className="img-fluid m-2" src={ele.logo} />
                  <h3 className="m-2">{ele.tenHeThongRap}</h3>
                </div>
              </div>
              <div className="showtime_content">
                {ele.cumRapChieu.map((ele) => {
                  return (
                    <div className="content mb-3 row" key={ele.maCumRap}>
                      <div className="RapPhim">
                        <div className="RapPhim_title row">
                          <img className="m-2" src={ele.hinhAnh} />
                          <h3 className="m-2">{ele.tenCumRap}</h3>
                        </div>
                        <h6 className="diaChi">{ele.diaChi}</h6>
                      </div>
                      <div className="GioChieu row">
                        {ele.lichChieuPhim.map((ele) => {
                          return (
                            <Link
                              to={`/booking/${ele.maLichChieu}`}
                              key={ele.maLichChieu}
                            >
                              <div className="GioChieu_content">
                                <div className="time">
                                  <span>
                                    {formatDate(ele.ngayChieuGioChieu)}
                                  </span>
                                </div>
                                <div className="rap">
                                  <span>{ele.tenRap}</span>
                                </div>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
