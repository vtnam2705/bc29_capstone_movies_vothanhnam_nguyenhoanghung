import { request } from "../configs/axios"

const fetchRoomListApi = (showTimeId) => {
    return request({
        url: `/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${showTimeId}`,
        method: 'GET',
    })
}

const bookingTicketApi = (data) => {
    return request({
        url: '/QuanLyDatVe/DatVe',
        method: 'POST',
        data,
    })
}


const bookingTicketManage = (data) => {
    return request({
        url: '/QuanLyDatVe/TaoLichChieu',
        method: 'POST',
        data
    })
}
export {
    fetchRoomListApi,
    bookingTicketApi,
    bookingTicketManage
}