import React, { useEffect, useState } from 'react'
import { Button, Form, Input, InputNumber } from 'antd';
import { USER_INFO_KEY } from '../../constants/common';

const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
/* eslint-disable no-template-curly-in-string */

const validateMessages = {
    required: '${label} is required!',
    types: {
        email: '${label} is not a valid email!',
        number: '${label} is not a valid number!',
    },
    number: {
        range: '${label} must be between ${min} and ${max}',
    },
};
/* eslint-enable no-template-curly-in-string */

const onFinish = (values) => {
    console.log(values);
};


export default function UpdateInfoUser() {
    let getUserInfo = localStorage.getItem(USER_INFO_KEY);
    getUserInfo = JSON.parse(getUserInfo);
    console.log(getUserInfo);
    const { email, hoTen, maLoaiNguoiDung, soDT, taiKhoan } = getUserInfo;

    const [updateUser, setUpdateUser] = useState({
        email: 'email',
        hoTen: 'hoTen',
        maLoaiNguoiDung: 'maLoaiNguoiDung',
        soDT: 'soDT',
        taiKhoan: 'taiKhoan'

    })

    useEffect(() => {
        console.log(maLoaiNguoiDung)
    },)

    
    return (
        // <Form
        //     {...layout}
        //     name="nest-messages"
        //     onFinish={onFinish}
        //     validateMessages={validateMessages}
        //     className='w-75'
        //     initialValues={
        //         {
        //             email: '',
        //             hoTen: '',
        //             maLoaiNguoiDung: '',
        //             soDT: '',
        //             taiKhoan: ''
        //         }
        //     }
        // >
        //     <Form.Item
        //         name={['user', 'email']}
        //         label="Email"
        //         rules={[
        //             {
        //                 type: 'email',
        //             },
        //         ]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     <Form.Item
        //         name={['user', 'hoten']}
        //         label="Name"
        //         rules={[
        //             {
        //                 required: true,
        //             },
        //         ]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     {/* <Form.Item
        //         name={['user', 'age']}
        //         label="Age"
        //         rules={[
        //             {
        //                 type: 'number',
        //                 min: 0,
        //                 max: 99,
        //             },
        //         ]}
        //     >
        //         <InputNumber />
        //     </Form.Item> */}

        //     <Form.Item
        //         name={['user', 'maLoaiNguoiDung']}
        //         label="User type"
        //         rules={[
        //             {
        //                 required: true,
        //             },
        //         ]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     <Form.Item
        //         name={['user', 'soDT']}
        //         label="Phone number"
        //         rules={[
        //             {
        //                 type: 'number',
        //                 min: 0,
        //                 max: 10,
        //                 required: true,
        //             }
        //         ]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     <Form.Item
        //         name={['user', 'taiKhoan']}
        //         label="Username"
        //         rules={[
        //             {
        //                 required: true,
        //             },
        //         ]}
        //     >
        //         <Input />
        //     </Form.Item>

        //     <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        //         <Button type="primary" htmlType="submit">
        //             Submit
        //         </Button>
        //     </Form.Item>
        // </Form>
        <>
            <input name='email' value={email}/>
            <input name='hoTen' value={hoTen}/>
            <input name='maLoaiNguoiDung' value={maLoaiNguoiDung}/>
            <input name='soDT' value={soDT}/>
            <input name='taiKhoan' value={taiKhoan}/>
        </>
    );
};

