import { Button, Space, Table, Tag } from 'antd';
import React from 'react';
import { useAsync } from '../../hooks/useAsync';
import { fetchMovieListApi } from '../../services/movie';
import { formatDate } from '../../utils/common';
import { useNavigate } from 'react-router-dom'

export default function MovieManage() {
    const navigate = useNavigate()
    const { state: data = [] } = useAsync({
        service: () => fetchMovieListApi()
    })

    const columns = [
        {
            title: 'Tên phim',
            dataIndex: 'tenPhim',
            key: 'tenPhim',
            render: (text) => <a>{text}</a>,
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
        // {
        //     title: 'Tags',
        //     key: 'tags',
        //     dataIndex: 'tags',
        //     render: (_, { tags }) => (
        //         <>
        //             {tags.map((tag) => {
        //                 let color = tag.length > 5 ? 'geekblue' : 'green';

        //                 if (tag === 'loser') {
        //                     color = 'volcano';
        //                 }

        //                 return (
        //                     <Tag color={color} key={tag}>
        //                         {tag.toUpperCase()}
        //                     </Tag>
        //                 );
        //             })}
        //         </>
        //     ),
        // },
        {
            title: 'Action',
            key: 'action',
            render: (_, record) => (
                <Space size="middle">
                    <a className='btn btn-primary text-white' onClick={() => navigate(`/admin/movie-management/${record.maPhim}/update`)}>Edit</a>
                    <a className='btn btn-danger text-white'>Delete</a>
                </Space>
            ),
        },
    ];

    return (
        <>
            <div className='text-right mb-3'>
                <Button
                    onClick={() => navigate('/admin/movie-management/create')}
                    type='primary'
                >
                    CREATE
                </Button>
            </div>
            <Table rowKey='maPhim' columns={columns} dataSource={data} />
        </>
    )
}

