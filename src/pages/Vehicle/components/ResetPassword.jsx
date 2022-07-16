import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';
import { longinType } from "../../../../utils/filter"
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

const ResetPassword = (props) => {
    const {currentData} = props;
    const [form] = Form.useForm();
    const { Option } = Select;
    const initData = () => {
        form.setFieldsValue({
            loginPassword: '',
            againPassword: '',
            name: currentData?.loginName
        });
    };
    useEffect(() => {
        initData();
    }, []);

    return (
        <Modal
            title='重置密码'
            visible={props.modalVisible}
            onOk={() => {
                form
                    .validateFields()
                    .then((value) => {
                        props.onSubmit(value);
                        // form.resetFields();
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
            onCancel={() => {
                props.onCancel();
            }}
        >
            <Form {...layout} name="add" form={form}>

                <Form.Item name="name" label="用户名" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '用户名不能为空!',
                    },
                ]}>
                    <Input bordered={false} readOnly autoComplete="off" />
                </Form.Item>

                <Form.Item name="loginPassword" label="新密码" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '新密码不能为空!',
                    },
                ]}>
                    <Input autoComplete="off" />
                </Form.Item>
                <Form.Item name="againPassword" label="再次输入" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '再次输入密码不能为空!',
                    },
                ]}>
                    <Input autoComplete="off" />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default ResetPassword;
