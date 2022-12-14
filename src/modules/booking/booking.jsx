import { notification } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
import { ThongTinDatVe } from '../../enums/common';
import MovieChair from '../../modules/Movie-seat/movie-chair';
import { fetchRoomListApi, bookingTicketApi, bookingTickets } from '../../services/booking'
import { formatDate } from '../../utils/common';
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


    const handleBookingTickets = async (data) => {
        const thongTinDatVe = new ThongTinDatVe();
        thongTinDatVe.maLichChieu = param.maLichChieu;
        thongTinDatVe.danhSachVe = danhSachGhe;

        const result = await bookingTickets(thongTinDatVe);
        navigate('/')
        notification.success({
            description: `${result.data.content}`
        })
    }

    return roomList ? (
        <div id="movies_booking">
            <div className="w-75 mx-auto py-5">
                <div className="booking_content d-flex flex-wrap flex-sm-wrap flex-md-wrap flex-lg-wrap flex-xl-wrap">
                    <div className="border_chair col-sm-12 col-md-12 col-lg-9 col-xl-9">
                        <div className="screen_content p-2 mt-2 bg-dark"></div>
                        <div className='trapezoid'>
                            <h4 className='d-flex justify-content-center align-items-center'>Screen</h4>
                        </div>
                        <div className="chair ml-0 py-3">
                            <div className="chair_layout">
                                {roomList.danhSachGhe.map((ele, idx) => {
                                    return (
                                        <React.Fragment key={ele.tenGhe}>
                                            <MovieChair handleSelect={handleSelect} item={ele} />
                                            {(idx + 1) % 16 === 0 && <br />}
                                        </React.Fragment>
                                    );
                                })}
                            </div>
                        </div>
                        <div className='w-75 mx-auto d-flex justify-content-between'>
                            <div className="row">
                                <button className="ghe gheVip"></button>
                                <h5 className='mb-0 d-flex align-items-center'>Gh??? Vip</h5>
                            </div>
                            <div className="row">
                                <button className="ghe dangDat"></button>
                                <h5 className='mb-0 d-flex align-items-center'>Gh??? ??ang Ch???n</h5>
                            </div>
                            <div className="row">
                                <button className="ghe daDat"></button>
                                <h5 className='mb-0 d-flex align-items-center'>Gh??? ???? ?????t</h5>
                            </div>
                            <div className="row">
                                <button className="ghe"></button>
                                <h5 className='mb-0 d-flex align-items-center'>Gh??? C??n Tr???ng</h5>
                            </div>
                        </div>
                    </div>
                    <div className="border_detail col-sm-12 col-md-12 col-lg-3 col-xl-3">
                        <div className="detail_img">
                            <img className="img-fluid" src={roomList.thongTinPhim.hinhAnh} />
                        </div>
                        <div className="detail_content py-2">
                            <div className="content_title">
                                <h1>{roomList.thongTinPhim.tenPhim}</h1>
                                <div className="gioChieu d-flex justify-content-between">
                                    <span className="title text-danger font-weight-bold">Gi??? chi???u</span>
                                    <span className="content">
                                        {roomList.thongTinPhim.gioChieu}
                                    </span>
                                </div>
                                <hr />
                                <div className="ngayChieu d-flex justify-content-between">
                                    <span className="title font-weight-bold">Ng??y chi???u</span>
                                    <span className="content">
                                        {/* {formatDate(roomList.thongTinPhim.ngayChieu)} */}
                                        {roomList.thongTinPhim.ngayChieu}
                                    </span>
                                </div>
                                <hr />
                                <div className="diaChi">
                                    <span className="title font-weight-bold">?????a Ch??? : </span>
                                    <span className="content">
                                        {roomList.thongTinPhim.diaChi}
                                    </span>
                                </div>
                                <hr />
                                <div className="rap">
                                    <span className="content font-weight-bold">
                                        {roomList.thongTinPhim.tenRap}
                                    </span>
                                </div>
                                <hr />
                                <div className='d-flex justify-content-between'>
                                    <p className='font-weight-bold'>
                                        Gh???
                                    </p>
                                    <span>
                                        {danhSachGhe.map(
                                            ele => (
                                                ele.loaiGhe === 'Thuong' ?
                                                    <span className='mr-2 badge badge-success'>{ele.tenGhe}</span>
                                                    : <span className='mr-2 badge badge-danger'>{ele.tenGhe}</span>
                                            )
                                        )}
                                    </span>
                                </div>
                                <hr />
                                <div className=" d-flex justify-content-between">
                                    <p className='font-weight-bold'>
                                        T???ng ti???n
                                    </p>
                                    <span className='ml-2 font-weight-bold text-success'>
                                        {danhSachGhe.reduce((previousValue, currentValue) => {
                                            previousValue += currentValue.giaVe
                                            return previousValue
                                        }, 0).toLocaleString()} vn??
                                    </span>
                                </div>
                                <button onClick={() => { handleBookingTickets() }} className='w-100'>
                                    Th??m v??o gi??? h??ng
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    ) : (
        <div className='loading vh-100'>
            <div className="fancy-spinner">
                <div className="ring" />
                <div className="ring" />
                <div className="dot" />
            </div>
        </div>
    )
}
