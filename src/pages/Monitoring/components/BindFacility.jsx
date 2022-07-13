import React, { useState, useEffect } from 'react';
import { Modal, Form, Input, Select } from 'antd';

const layout = {
    labelCol: { span: 5 },
    wrapperCol: { span: 19 },
};

const BindFacility = (props) => {
    const { typeList = [], brandList = [] } = props;
    const [form] = Form.useForm();
    const { Option } = Select;
    const initData = () => {
        form.setFieldsValue({
            typeId: typeList?.[0]?.categoryId || '',
            brandId: brandList?.[0]?.categoryId || '',
            numid: '',
        });
    };

    useEffect(() => {
        initData();
    }, []);

    return (
        <Modal
            title='绑定设备'
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

                <Form.Item name="typeId" label="设备分类">
                    <Select showSearch>
                        {typeList.map((el) => {
                            return (
                                <Option value={el?.categoryId} key={el?.categoryId}>
                                    {el?.categoryName}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item name="brandId" label="设备品牌">
                    <Select showSearch>
                        {brandList.map((el) => {
                            return (
                                <Option value={el?.categoryId} key={el?.categoryId}>
                                    {el?.categoryName}
                                </Option>
                            );
                        })}
                    </Select>
                </Form.Item>
                <Form.Item name="numid" label="序列号">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default BindFacility;
