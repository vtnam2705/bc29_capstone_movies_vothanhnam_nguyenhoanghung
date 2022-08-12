import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { fetchMovieShowTimeApi } from '../../services/theater';

import moment from 'moment';

export default function ShowTime() {
    const [movieShowTime, setMovieShowTime] = useState({});

    const param = useParams();

    useEffect(() => {
        fetchMovieShowTime();
    }, []);

    const fetchMovieShowTime = async () => {
        const result = await fetchMovieShowTimeApi(param.movieId);

        setMovieShowTime(result.data.content);
    }

    const renderTitle = () => {
        return movieShowTime?.heThongRapChieu?.map((ele, idx) => {
            return (
                <a
                    key={ele.maHeThongRap}
                    className={`nav-link text-capitalize ${idx === 0 && "active"}`}
                    data-toggle="pill"
                    href={`#${ele.maHeThongRap}`}
                    role="tab"
                    aria-selected="true"
                >
                    {ele.tenHeThongRap}
                </a>
            );
        });
    };

    const renderContent = () => {
        return movieShowTime?.heThongRapChieu?.map((ele, idx) => {
            return (
                <div
                    className={`tab-pane fade show ${idx === 0 && 'active'}`}
                    id={ele.maHeThongRap}
                    key={ele.maHeThongRap}
                    role="tabpanel"
                >
                    {
                        ele.cumRapChieu.map(ele => {
                            return (
                                <div key={ele.maCumRap} className="row mb-5">
                                    <div className="col-1">
                                        <img
                                            className="img-fluid rounded"
                                            src={ele.hinhAnh}
                                        />
                                    </div>
                                    <div className="col-11 pl-0">
                                        <h5>{ele.tenCumRap}</h5>
                                        <span className="text-muted">{ele.diaChi}</span>
                                    </div>
                                    <div className="col-12">
                                        <div className="row">
                                            {
                                                ele.lichChieuPhim.map(ele => {
                                                    return (
                                                        <div key={ele.maLichChieu} className="col-3">
                                                            <Link to={`/booking/${ele.maLichChieu}`} className='text-decoration-none'>
                                                                {moment(ele.ngayChieuGioChieu).format('llll')}
                                                            </Link>
                                                        </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            )
        })
    }
    return (
        <div className="row">
            <div className="col-3">
                <div className="nav flex-column nav-pills" id="v-pills-tab" role="tablist" aria-orientation="vertical">
                    {renderTitle()}
                </div>
            </div>
            <div className="col-9">
                <div className="tab-content" id="v-pills-tabContent">
                    {renderContent()}
                </div>
            </div>
        </div>
    )
}
