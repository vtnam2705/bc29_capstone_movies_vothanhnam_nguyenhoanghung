
// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import MovieChair from "../../modules/Movie-seat/movie-chair";
// import { fetchRoomListApi, bookingTicketApi } from "../../services/booking";

import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieChair from '../../modules/Movie-seat/movie-chair';
import { fetchRoomListApi, bookingTicketApi } from '../../services/booking'
import './booking.scss'

export default function Booking() {
  const [danhSachGhe, setDanhSachGhe] = useState([]);

  const [roomList, setRoomList] = useState();

  const param = useParams();

  const navigate = useNavigate();

  useEffect(() => {
    fetchRoomList();
  }, []);

  const fetchRoomList = async () => {
    const result = await fetchRoomListApi(param.maLichChieu);

    setRoomList(result.data.content);
  };

  const handleSelect = (selectedSeat) => {
    const data = [...danhSachGhe];

    const idx = danhSachGhe.findIndex(
      (ele) => ele.tenGhe === selectedSeat.tenGhe
    );

    if (idx !== -1) {
      data.splice(idx, 1);
    } else {
      data.push(selectedSeat);
    }

    setDanhSachGhe(data);
  };

  const handleBookingTicket = async () => {
    const danhSachVe = danhSachGhe.map((ele) => {
      return {
        maGhe: ele.maGhe,
        giaVe: ele.giaVe,
      };
    });

    const submitData = {
      maLichChieu: param.maLichChieu,
      danhSachVe,
    };

    await bookingTicketApi(submitData);

    navigate("/");
  };

  return roomList ? (
    <div id="movies_booking">
      <div className="container">
        <div className="booking_content row">
          <div className="border_chair col-sm-12 col-md-12 col-lg-7 col-xl-7">
            <div className="screen">
              <div className="screen_content py-3">
                <h6 className="text-center">Màn hình</h6>
              </div>
            </div>
            <div className="chair row ml-0 py-3">
              <div className='col-7'>
                {roomList.danhSachGhe.map((ele, idx) => {
                  return (
                    <React.Fragment key={ele.tenGhe}>
                      <MovieChair handleSelect={handleSelect} item={ele} />
                      {(idx + 1) % 16 === 0 && <br />}
                    </React.Fragment>
                  )
                })}
              </div>
              
              <div className='col-5'>
                <img className='img-fluid' src={roomList.thongTinPhim.hinhAnh} alt='Movie' />
                <h4 className='mt-3'>Tên phim: {roomList.thongTinPhim.tenPhim}</h4>
                <h5>Rạp chiếu: {roomList.thongTinPhim.tenRap}</h5>
                <p>
                  Ghế: {danhSachGhe.map(
                    ele => (
                      ele.loaiGhe === 'Thuong' ?
                        <span className='mr-2 badge badge-success'>{ele.tenGhe}</span>
                        : <span className='mr-2 badge badge-danger'>{ele.tenGhe}</span>

                    )
                  )}
                </p>
                <p>
                  Tổng tiền:
                  <span className='ml-2'>
                    {danhSachGhe.reduce((previousValue, currentValue) => {
                      previousValue += currentValue.giaVe
                      return previousValue
                    }, 0).toLocaleString()}
                  </span>
                  vnđ
                </p>
                <button onClick={handleBookingTicket} className='btn btn-danger'>Booking</button>
              </div>
            </div>
            <div className="border_detail col-sm-12 col-md-12 col-lg-5 col-xl-5">
              <div className="detail_img">
                <img
                  className="img-fluid"
                  src="./thor-tinh-yeu-va-sam-set_gp01.jpg"
                  alt="Movie"
                />
              </div>
              <div className="detail_content py-2">
                <h2>Tên phim</h2>
                <p>Ngày chiếu</p>
                <button>Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="fancy-spinner">
      <div className="ring" />
      <div className="ring" />
      <div className="dot" />
    </div>

  )
}
