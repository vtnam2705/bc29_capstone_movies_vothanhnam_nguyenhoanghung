import { request } from "../configs/axios";
import { GROUP_ID } from "../constants/common";

// Lấy danh sách phim
const fetchMovieListApi = (tenPhim = '') => {
  if (tenPhim.trim() !== '') {
    return request(
      {
        url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}&tenPhim=${tenPhim}`,
        method: "GET",
      }
    );
  }
  return request({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
    method: "GET",
  });
};

// Lấy thông tin phim
const fetchMovieDetailApi = (movieId) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
    method: "GET",
  });
};

// Thêm phim và upload hình ảnh
const addMovieuploadImage = (data) => {
  return request({
    url: '/QuanLyPhim/ThemPhimUploadHinh',
    method: "POST",
    data,
  })
};

// Cập nhật phim và upload hình ảnh
const updateMovieUploadImage = (data) => {
  return request({
    url: '/QuanLyPhim/CapNhatPhimUpload',
    method: "POST",
    data,
  })
}

const deleteMovie = (movieId) => {
  return request({
    url: `/QuanLyPhim/XoaPhim?MaPhim=${movieId}`,
    method: 'DELETE'
  })
}

export {
  fetchMovieListApi,
  fetchMovieDetailApi,
  addMovieuploadImage,
  updateMovieUploadImage,
  deleteMovie
};
