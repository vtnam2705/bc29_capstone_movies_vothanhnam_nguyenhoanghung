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
import { useNavigate, useParams } from 'react-router-dom';
import { GROUP_ID } from '../../constants/common';
import { useAsync } from '../../hooks/useAsync';
import { addMovieuploadImage, fetchMovieDetailApi } from '../../services/movie';

export default function MovieForm() {
    const [componentSize, setComponentSize] = useState('default');
    // Display image through base64 image
    const [image, setImage] = useState();
    // send image data to back-end (format 'file')
    const [file, setFile] = useState()
    const params = useParams()
    const navigate = useNavigate();
    const {} = useAsync({
        service: () => fetchMovieDetailApi(params.movieId),
        dependencies: [params.movieId],
        condition: params.movieId,
    });
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

        await addMovieuploadImage(formData);

        // notification add moivie success
        notification.success({
            description: "Add new movie successfully!!!!"
        })
        // after add new movie to api => navigate to movie list in admin page
        navigate('/admin/movie-management')
    }

    const handleChangeImage = (event) => {
        const file = event.target.files[0]

        const reader = new FileReader()

        reader.readAsDataURL(file);
        reader.onload = (e) => {
            setImage(e.target.result);
            setFile(file);
        };
    }

    return (
        <Form
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
                <DatePicker />
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

            <Form.Item label="Số sao" name='danhGia'>
                <InputNumber />
            </Form.Item>

            <Form.Item label='Hình ảnh'>
                <Input type='file' onChange={handleChangeImage} />
            </Form.Item>

            <Image src={image} />

            <Form.Item>
                <Button htmlType='submit' type='primary'>Save</Button>
            </Form.Item>
        </Form>
    );
}
