import {
    Button,
    Cascader,
    DatePicker,
    Form,
    Image,
    Input,
    InputNumber,
    notification,
    Radio,
    Select,
    Switch,
    TreeSelect,
} from 'antd';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GROUP_ID } from '../../constants/common';
import { useAsync } from '../../hooks/useAsync';
import { addMovieuploadImage, fetchMovieDetailApi, updateMovieUploadImage } from '../../services/movie';
import moment from 'moment';

export default function EditMovie() {
    const [componentSize, setComponentSize] = useState('default');
    // Display image through base64 image
    const [image, setImage] = useState();
    // send image data to back-end (format 'file')
    const [file, setFile] = useState()
    const params = useParams()
    const navigate = useNavigate();

    const [form] = Form.useForm()

    const { state: movieDetails } = useAsync({
        service: () => fetchMovieDetailApi(params.movieId),
        dependencies: [params.movieId],
        condition: !!params.movieId,
    });

    useEffect(() => {
        if (movieDetails) {
            form.setFieldsValue({
                ...movieDetails,
                ngayKhoiChieu: moment(movieDetails.ngayKhoiChieu),
            });

            setImage(movieDetails.hinhAnh)
        }
    }, [movieDetails])

    const onFormLayoutChange = (event) => {
        setComponentSize(event.target.value);
    };

    const handleSave = async (values) => {
        values.ngayKhoiChieu = values.ngayKhoiChieu.format('DD/MM/YYYY');
        values.maNhom = GROUP_ID;

        const formData = new FormData();
        // loop object values
        for (const key in values) {
            formData.append(key, values[key])
        }
        // set condition file
        file && formData.append('File', file, file.name);
        params.movieId && formData.append("maPhim", params.movieId)

        if (params.movieId) {
            try {
                const updateMovie = await updateMovieUploadImage(formData);
                // notification update film successful
                notification.success({
                    description: `${updateMovie.data.message}`
                })
            } catch (error) {
                notification.error({
                    description: `${error.response.data.content}`
                })
            }

        } else {
            await addMovieuploadImage(formData);
            // notification add moivie successful
            notification.success({
                description: "Add new movie successfully!!!!"
            })
        }

        // after add new movie to api => navigate to movie list in admin page
        navigate('/admin/movie-management')
    }

    const handleChangeImage = (event) => {
        const file = event.target.files[0]
        if (file.type === 'image/png' || file.type === 'image/jpeg') {
            const reader = new FileReader()

            reader.readAsDataURL(file);
            reader.onload = (e) => {
                setImage(e.target.result);
                setFile(file);
            };
        }
    }

    return (
        <Form
            form={form}
            labelCol={{
                span: 4,
            }}
            wrapperCol={{
                span: 14,
            }}
            layout="vertical"
            initialValues={{
                tenPhim: "",
                moTa: "",
                ngayKhoiChieu: "",
                sapChieu: false,
                dangChieu: false,
                hot: false,
                trailer: "",
                danhGia: "",
            }}
            onFinish={handleSave}
            size={componentSize}
        >
            <Form.Item label="Form Size">
                <Radio.Group defaultValue={componentSize} onChange={onFormLayoutChange}>
                    <Radio.Button value="small">Small</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="large">Large</Radio.Button>
                </Radio.Group>
            </Form.Item>

            <Form.Item label="Tên phim" name='tenPhim'>
                <Input />
            </Form.Item>

            <Form.Item label="Trailer" name='trailer'>
                <Input />
            </Form.Item>

            <Form.Item label="Mô tả" name='moTa'>
                <Input />
            </Form.Item>

            <Form.Item label="Ngày khởi chiếu" name='ngayKhoiChieu'>
                <DatePicker format={'DD/MM/YYYY'} />
            </Form.Item>

            <Form.Item label="Đang chiếu" valuePropName="checked" name='dangChieu'>
                <Switch />
            </Form.Item>

            <Form.Item label="Sắp chiếu" valuePropName="checked" name='sapChieu'>
                <Switch />
            </Form.Item>

            <Form.Item label="Hot" valuePropName="checked" name='hot'>
                <Switch />
            </Form.Item>

            <Form.Item label="Đánh giá phim" name='danhGia'>
                <InputNumber min={0} max={10} />
            </Form.Item>

            <Form.Item label='Hình ảnh'>
                <Input type='file' onChange={handleChangeImage} accept='image/png, image/jpeg' />
            </Form.Item>
            <br />
            <Image style={{ width: 150, height: 150 }} src={image} alt='....' className='mb-2' />

            <Form.Item>
                <Button htmlType='submit' type='primary'>Save</Button>
            </Form.Item>
        </Form>
    );
}
