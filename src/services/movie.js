import { request } from "../configs/axios";
import { GROUP_ID } from "../constants/common";

const fetchMovieListApi = () => {
  return request({
    url: `/QuanLyPhim/LayDanhSachPhim?maNhom=${GROUP_ID}`,
    method: "GET",
  });
};

const fetchMovieDetailApi = (movieId) => {
  return request({
    url: `/QuanLyPhim/LayThongTinPhim?MaPhim=${movieId}`,
    method: "GET",
  });
};


const addMovieuploadImage = (data) => {
  return request({
    url: '/QuanLyPhim/ThemPhimUploadHinh',
    method: "POST",
    data,
  })
};


const updateMovieUploadImage = (data) => {
  return request({
    url: '/QuanLyPhim/CapNhatPhimUpload',
    method: "POST",
    data,
  })
}

const deleteMovie = (data) => {
  return request({
    url: '/QuanLyPhim/XoaPhim',
    method: 'DELETE'
  })
}
export { 
  fetchMovieListApi, 
  fetchMovieDetailApi, 
  addMovieuploadImage,
  updateMovieUploadImage
};
