import { Button, Form, Input, InputNumber, notification, Select } from 'antd'
import { useAsync } from '../../hooks/useAsync';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { addUserAdminApi, updateUserInfoAdminApi, fetchUserInfoAdminApi, fetchTypeUserApi } from '../../services/user'
import { GROUP_ID } from '../../constants/common';
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
}


export default function CreateUser() {
    const navigate = useNavigate()
    const params = useParams()

    const [form] = Form.useForm()

    const { state: userInfo } = useAsync({
        service: () => fetchUserInfoAdminApi(params.userId),
        condition: !!params.userId,
        dependencies: [params.userId],
    })

    useEffect(() => {
        if (userInfo) {
            form.setFieldsValue(userInfo)
        }
    }, [userInfo])

    const { state: TypeUser } = useAsync({ service: () => fetchTypeUserApi() })

    const onFinish = async (values) => {
        const data = { ...values, maNhom: GROUP_ID }

        console.log(data)
        if (params.userId) {
            try {
                const updateUserInfo = await updateUserInfoAdminApi(data);
                notification.success({ message: `${updateUserInfo.data.message}` })
                navigate('/admin/user-management')
            } catch (error) {
                notification.error({
                    description: `${error.response.data.content}`
                })
            }
        } else {
            try {
                const addUser = await addUserAdminApi(data);
                notification.success({ message: `${addUser.data.message}` });
                navigate('/admin/user-management');
            } catch (error) {
                notification.error({
                    description: `${error.response.data.content}`
                });
            }
        }
    }
    return TypeUser ? (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-6">
                    <Form form={form} {...layout} onFinish={onFinish}>
                        <div className="form-group text-center">
                            {params.userId ? <h1>UPDATE USER</h1> : <h1>ADD USER</h1>}
                        </div>
                        <Form.Item
                            name="taiKhoan"
                            label="Username "
                            rules={[
                                {
                                    required: true,
                                    message: 'Tài khoản không được bỏ trống.',

                                },
                                // {
                                //     pattern: '[a-zA-Z]{4,}',
                                //     message: 'Tài khoản không đúng định dạng.',
                                // },
                                {
                                    min: 6,
                                    max: 15,
                                    message: 'Tài khoản phải từ 6-15 ký tự.'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="matKhau"
                            label="Password "
                            rules={[
                                {
                                    required: true,
                                    message: 'Mật khẩu không được bỏ trống.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="hoTen"
                            label="Full name "
                            rules={[
                                {
                                    required: true,
                                    message: 'Họ và tên không được bỏ trống.',
                                },
                                {
                                    pattern:
                                        '[a-zA-Z]{4,}',
                                    message: 'Họ và tên không đúng định dạng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="email"
                            label="Email"
                            rules={[
                                {
                                    required: true,
                                    message: 'Email không được bỏ trống.',
                                },
                                {
                                    pattern: '[-0-9a-zA-Z.+_]+@[-0-9a-zA-Z.+_]+.[a-zA-Z]{2,4}',
                                    message: 'Email không đúng định dạng.',
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            name="soDT"
                            label="Phone Number"
                            rules={[
                                {
                                    required: true,
                                    message: 'Số phone không được bỏ trống.',
                                },
                                {
                                    pattern: /^[0-9\b]+$/,
                                    message: 'Vui lòng không nhập chữ.',
                                },
                                {
                                    min: 0,
                                    max: 10,
                                    message: 'Số phone không nhập quá 10 số.'
                                }
                            ]}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item name="maLoaiNguoiDung" label="Select">
                            <Select>
                                {TypeUser.map((ele) => {
                                    return (
                                        <Select.Option
                                            key={ele.maLoaiNguoiDung}
                                            value={ele.maLoaiNguoiDung}
                                        >
                                            {ele.tenLoai}
                                        </Select.Option>
                                    )
                                })}
                            </Select>
                        </Form.Item>

                        <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }} shouldUpdate>
                            {() => {
                                return (
                                    <div className="text-right">
                                        <Button
                                            type="primary"
                                            htmlType="submit"
                                            className="mr-2"
                                            disabled={
                                                !form.isFieldsTouched() ||
                                                form.getFieldsError().some((ele) => ele.errors.length > 0)
                                            }
                                        >
                                            {params.userId ? 'Update' : 'Add'}
                                        </Button>
                                    </div>
                                )
                            }}
                        </Form.Item>
                    </Form>
                </div>
            </div>
        </div>
    ) : (
        'loading'
    )
}
