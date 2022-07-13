import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select, Checkbox } from 'antd';
import { longinType } from "../../../../utils/filter"
const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

const AccountSet = (props) => {
    const { roleListData = [], isAdd,currentData} = props;
    const [form] = Form.useForm();
    const { Option } = Select;
    console.log(currentData)
    const initData = () => {
        if (isAdd == 1) {
            form.setFieldsValue({
                loginName: '',
                roleId: '13',
                loginPassword: '',
                phone: '',
                systemCodeEnums: '',
                defaultPassword: 'ytc@123456'
            });
        } else {
            form.setFieldsValue({
                loginName: currentData?.loginName||'',
                roleId: currentData?.roleId,
                loginPassword: currentData?.loginPassword||'',
                phone: currentData?.phone||'',
                systemCodeEnums:currentData?.systemCodeEnums||'',
                defaultPassword: 'ytc@123456'
            });
        }

    };
    const onChange = (checkedValues) => {
        console.log('checked = ', checkedValues);
    };
    useEffect(() => {
        initData();
    }, []);

    return (
        <Modal
            title={isAdd == 1 ? '新增账号' : '编辑账号'}
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

                <Form.Item name="loginName" label="用户名" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '用户名不能为空!',
                    },
                ]}>
                    <Input autoComplete="off" />
                </Form.Item>
                <Form.Item name="roleId" label="绑定角色" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '绑定角色不能为空!',
                    },
                ]} >
                    <Select showSearch placeholder="请选择角色">
                        {roleListData.map((el) => {
                            return (
                                <Option value={el?.categoryId} key={el?.categoryId}>
                                    {el?.categoryName}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item name="loginPassword" label="登录密码">
                    <Input autoComplete="off" />
                </Form.Item>
                <Form.Item name="defaultPassword" label="默认密码" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '默认密码不能为空!',
                    },
                ]}>
                    <Input autoComplete="off" bordered={false} readOnly />
                </Form.Item>
                <Form.Item name="phone" label="移动电话" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '移动电话不能为空!',
                    },
                ]}>
                    <Input autoComplete="off" />
                </Form.Item>
                <Form.Item name="systemCodeEnums" label="登录权限" rules={[
                    { required: true },
                    {
                        pattern: /\S/,
                        message: '登录权限不能为空!',
                    },
                ]}>
                    <Checkbox.Group options={longinType} onChange={onChange} />
                </Form.Item>

            </Form>
        </Modal>
    );
};

export default AccountSet;
