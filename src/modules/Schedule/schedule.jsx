import React, { useEffect, useState } from 'react'
import { Button, Checkbox, Form, Input, Cascader, DatePicker, InputNumber, Select, notification } from 'antd';
import { getInfoListTheater, getInfoTheater, layThongTinCumRap } from '../../services/theater';
import { useFormik } from 'formik';
import moment from 'moment';
import { useNavigate, useParams } from 'react-router-dom';
import { bookingTicketManage } from '../../services/booking';

export default function Schedule() {
    const navigate = useNavigate()
    const params = useParams()
    const formik = useFormik({
        initialValues: {
            maPhim: params.movieId,
            ngayChieuGioChieu: '',
            maRap: '',
            giaVe: ''
        },
        onSubmit: async (values) => {
            console.log('values', values);
            try {
                await bookingTicketManage(values)
                notification.success({
                    description: "Create showtime successfully!!!"
                })
                navigate('/admin/movie-management')
            } catch (error) {
                const errorContent = error.response.data;
                console.log('error', errorContent)
            }
        }
    })


    const [state, setState] = useState({
        heThongRapChieu: [],
        cumRapChieu: []
    })

    useEffect(() => {
        async function getInfoTheaters() {
            const result = await getInfoTheater()
            setState({
                ...state,
                heThongRapChieu: result.data.content
            })
        }
        getInfoTheaters()
    }, [])

    const handleChangeHeThongRap = async (value) => {
        const result = await layThongTinCumRap(value)
        setState({
            ...state,
            cumRapChieu: result.data.content,
        })
    }

    const handleChangeCumRap = (value) => {
        formik.setFieldValue('maRap',value)
    }

    const onOk = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
    }

    const onChangeDate = (value) => {
        formik.setFieldValue('ngayChieuGioChieu', moment(value).format('DD/MM/YYYY hh:mm:ss'))
    }


    const onChangePrice = (value) => {
        formik.setFieldValue('giaVe',value)
    }

    const convertSelectHTR = () => {
        return state.heThongRapChieu?.map((heThongRap, index) => {
            return {
                label: heThongRap.tenHeThongRap,
                value: heThongRap.maHeThongRap
            }
        })
    }

    return (
        <>
            <div className='container'>
                <h3 className='text-center mb-5'>Tạo lịch chiếu</h3>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    initialValues={{ remember: true, }}
                    onSubmitCapture={formik.handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item label="Hệ thống rạp">
                        <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Chọn hệ thống rạp" />
                    </Form.Item>

                    <Form.Item label="Cụm rạp">
                        <Select
                            options={state.cumRapChieu?.map((cumRap, index) => ({
                                label: cumRap.tenCumRap,
                                value: cumRap.maCumRap
                            }))}
                            onChange={handleChangeCumRap}
                            placeholder="Chọn cụm rạp"
                        />
                    </Form.Item>

                    <Form.Item label="Ngày chiếu giờ chiếu">
                        <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />
                    </Form.Item>

                    <Form.Item label="Giá vé">
                        <InputNumber min={75000} max={150000} onChange={onChangePrice} />
                    </Form.Item>

                    <Form.Item label="Chức năng">
                        <Button htmlType='submit'>Tạo lịch chiếu</Button>
                    </Form.Item>
                </Form>
            </div>
        </>

    )
}
