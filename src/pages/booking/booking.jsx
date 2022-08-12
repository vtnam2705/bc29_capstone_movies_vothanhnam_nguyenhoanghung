import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import MovieChair from '../../modules/Movie-seat/movie-chair';
import { fetchRoomListApi, bookingTicketApi } from '../../services/booking'


export default function Booking() {
    const [danhSachGhe, setDanhSachGhe] = useState([])

    const [roomList, setRoomList] = useState()

    const param = useParams();

    const navigate = useNavigate();

    useEffect(() => {
        fetchRoomList()
    }, [])

    const fetchRoomList = async () => {
        const result = await fetchRoomListApi(param.maLichChieu);

        console.log(result)
        setRoomList(result.data.content)
    }

    const handleSelect = (selectedSeat) => {
        const data = [...danhSachGhe]

        const idx = danhSachGhe.findIndex((ele) => ele.tenGhe === selectedSeat.tenGhe);

        if (idx !== -1) {
            data.splice(idx, 1);
        } else {
            data.push(selectedSeat)
        }

        setDanhSachGhe(data)
    }

    const handleBookingTicket = async () => {
        const danhSachVe = danhSachGhe.map((ele) => {
            return {
                maGhe: ele.maGhe,
                giaVe: ele.giaVe
            }
        })

        const submitData = {
            maLichChieu: param.maLichChieu,
            danhSachVe,
        }

        await bookingTicketApi(submitData)

        navigate('/')
    }

    return roomList ? (
        <div className='row w-75 mx-auto my-5'>
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
                <img className='img-fluid' src={roomList.thongTinPhim.hinhAnh} alt='image' />
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
    ) : (
        <h3 className='text-center'>Loading...</h3>
    )
}
