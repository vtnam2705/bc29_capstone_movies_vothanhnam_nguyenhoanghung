import { request } from "../configs/axios"
import { GROUP_ID } from "../constants/common"

const fetchMovieShowTimeApi = (movieId) => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${movieId}`,
        method: 'GET'
    })
}


const getInfoListTheater = () => {
    return request({
        url: `/QuanLyRap/LayThongTinLichChieuHeThongRap?maNhom=${GROUP_ID}`,
        method: 'GET'
    })
}

const getInfoTheater = () => {
    return request({
        url: '/QuanLyRap/LayThongTinHeThongRap',
        method: 'GET'
    })
}


const layThongTinCumRap = (maHeThongRap) => {
    return request({
        url: `/QuanLyRap/LayThongTinCumRapTheoHeThong?maHeThongRap=${maHeThongRap}`,
        method: 'GET'
    })
}

export {
    fetchMovieShowTimeApi,
    getInfoListTheater,
    getInfoTheater, 
    layThongTinCumRap
}