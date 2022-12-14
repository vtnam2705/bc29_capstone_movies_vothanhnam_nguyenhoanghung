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
                <h3 className='text-center mb-5'>T???o l???ch chi???u</h3>
                <Form
                    name="basic"
                    labelCol={{ span: 8, }}
                    wrapperCol={{ span: 16, }}
                    initialValues={{ remember: true, }}
                    onSubmitCapture={formik.handleSubmit}
                    autoComplete="off"
                >
                    <Form.Item label="H??? th???ng r???p">
                        <Select options={convertSelectHTR()} onChange={handleChangeHeThongRap} placeholder="Ch???n h??? th???ng r???p" />
                    </Form.Item>

                    <Form.Item label="C???m r???p">
                        <Select
                            options={state.cumRapChieu?.map((cumRap, index) => ({
                                label: cumRap.tenCumRap,
                                value: cumRap.maCumRap
                            }))}
                            onChange={handleChangeCumRap}
                            placeholder="Ch???n c???m r???p"
                        />
                    </Form.Item>

                    <Form.Item label="Ng??y chi???u gi??? chi???u">
                        <DatePicker format="DD/MM/YYYY hh:mm:ss" showTime onChange={onChangeDate} onOk={onOk} />
                    </Form.Item>

                    <Form.Item label="Gi?? v??">
                        <InputNumber min={75000} max={150000} onChange={onChangePrice} />
                    </Form.Item>

                    <Form.Item label="Ch???c n??ng">
                        <Button htmlType='submit'>T???o l???ch chi???u</Button>
                    </Form.Item>
                </Form>
            </div>
        </>

    )
}
