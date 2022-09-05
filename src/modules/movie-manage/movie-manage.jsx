import { Button, Space, Table, Tag, Input, notification } from 'antd';
import React, { Fragment, useState } from 'react';
import { useAsync } from '../../hooks/useAsync';
import { deleteMovie, fetchMovieListApi } from '../../services/movie';
import { formatDate } from '../../utils/common';
import { useNavigate } from 'react-router-dom'


const { Search } = Input;

export default function MovieManage() {
    const navigate = useNavigate();
    let { state: data = [] } = useAsync({
        service: () => fetchMovieListApi()
    })
    console.log(data)
    const deleteMovies = async (movieId) => {
        if (window.confirm('Are your sure want to delete?')) {
            const result = await deleteMovie(movieId);
            console.log(result);
            notification.success({
                description: `${result.data.content}`
            });
            navigate('/admin/movie-management');
        }
    }

    const [keyWord, setKeyWord] = useState('')

    const onChange = (e) => {
        const {value} = e.target
        setKeyWord(value)
    }

    if (keyWord !== '') {
        data = data.filter(
            (ele) =>
                ele.tenPhim.toLowerCase().includes(keyWord.toLowerCase())
        )
    }
    const columns = [
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            render: (text) => <span>{text}</span>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'hinhAnh',
            key: 'hinhAnh',
            render: (text, film) => {
                return <Fragment>
                    <img src={film.hinhAnh} alt={film.hinhAnh} width={50} height={50} />
                </Fragment>
            },
        },
        {
            title: 'Ngày khởi chiếu',
            dataIndex: 'ngayKhoiChieu',
            key: 'ngayKhoiChieu',
            render: (text) => {
                return <span>{formatDate()}</span>
            }
        },
        {
            title: 'Đánh giá',
            dataIndex: 'danhGia',
            key: 'danhGia',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a className='btn btn-primary text-white' onClick={() => navigate(`/admin/movie-management/update/${record.maPhim}`)}>Edit</a>
                    <button
                        // style={{ cursor: 'pointer' }}
                        className='btn btn-danger text-white'
                        onClick={() => { deleteMovies(record.maPhim) }}
                    >
                        Delete
                    </button>
                    <button
                        className='btn btn-success text-white'
                        onClick={() => navigate(`/admin/movie-management/showtime/${record.maPhim}`)}
                    >
                        Tạo lịch chiếu
                    </button>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className='d-flex mb-3'>
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    onChange={onChange}
                />
                <div className=''>
                    <Button
                        className='h-100'
                        onClick={() => navigate('/admin/movie-management/create')}
                        type='primary'
                    >
                        CREATE
                    </Button>
                </div>
            </div>

            <Table rowKey='maPhim' columns={columns} dataSource={data} />
        </>
    )
}

