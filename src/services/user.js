import { request } from "../configs/axios"
import { GROUP_ID } from "../constants/common"

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

const fetchUserListApi = () => {
    return request({
        url: `/QuanLyNguoiDung/LayDanhSachNguoiDung?MaNhom=${GROUP_ID}`,
        method: 'GET',
    })
}

const deleteUserApi = (taiKhoan) => {
    return request({
        url: `/QuanLyNguoiDung/XoaNguoiDung?TaiKhoan=${taiKhoan}`,
        method: 'DELETE',
    })
}

const searchUserApi = (keyWord) => {
    return request({
        url: `/QuanLyNguoiDung/TimKiemNguoiDung`,
        params: {
            MaNhom: GROUP_ID,
            ...(keyWord ? { tuKhoa: keyWord } : {}),
        },
        method: 'GET',
    })
}

const fetchUserInfoAdminApi = (userId) => {
    return request({
        url: `/QuanLyNguoiDung/LayThongTinNguoiDung?taiKhoan=${userId}`,
        method: 'POST',
    })
}

const addUserAdminApi = (data) => {
    return request({
        url: '/QuanLyNguoiDung/ThemNguoiDung',
        method: 'POST',
        data,
    })
}

const updateUserInfoAdminApi = (data) => {
    return request({
        url: '/QuanLyNguoiDung/CapNhatThongTinNguoiDung',
        method: 'POST',
        data,
    })
}

const fetchTypeUserApi = () => {
    return request({
        url: '/QuanLyNguoiDung/LayDanhSachLoaiNguoiDung',
        method: 'GET',
    })
}
export {
    loginApi,
    registerApi,
    fetchUserListApi,
    deleteUserApi,
    searchUserApi,
    addUserAdminApi,
    updateUserInfoAdminApi,
    fetchUserInfoAdminApi,
    fetchTypeUserApi
}