import { request } from "../configs/axios"

const loginApi = (data) => {
    return request({
        data: data,
        url: '/QuanLyNguoiDung/DangNhap',
        method: 'POST'
    })
}


const registerApi = (data) => {
    return request({
        data: data,
        url: '/QuanLyNguoiDung/DangKy',
        method: 'POST'
    })
}

export { loginApi, registerApi }