import React, { useState, useEffect } from 'react';
import { Button, Form, Input, Space, Select } from 'antd';
import { selectType } from '../../../utils/filter'
const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const TableCondition = (props) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { onlyId } = props;
    const initialValues = props?.searchForm;
    console.log('initialValues===>', initialValues)
    return (
        <>
            <Form {...layout}
                initialValues={initialValues}
                name="searchform"
                layout='inline'
                form={form}
                onFinish={(value) => {
                    props.onSearch(value);
                }}
            >
                {onlyId == 'company' && (
                    <Form.Item name="companyName" label="公司名称" style={{ width: '200px' }}>
                        <Input placeholder='请输入公司名称'  autoComplete="off"/>
                    </Form.Item>
                )}
                {onlyId == 'company' && (
                    <Form.Item name="queryUseStatusEnum" label="公司状态" style={{ width: '200px' }}>
                        <Select >
                            {selectType.map((el) => {
                                return (
                                    <Option value={el?.value} key={el?.value}>
                                        {el?.label}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                )}

                {onlyId == 'role' && (
                    <Form.Item name="roleName" label="角色名称" style={{ width: '200px' }}>
                        <Input placeholder='请输入角色名称'  autoComplete="off"/>
                    </Form.Item>
                )}
                {onlyId == 'account' && (
                    <Form.Item name="loginName" label="用户名称" style={{ width: '200px' }}>
                        <Input placeholder='请输入用户名称'  autoComplete="off"/>
                    </Form.Item>
                )}
                {(onlyId == 'role' || onlyId == 'account') && (
                    <Form.Item name="status" label="角色状态" style={{ width: '200px' }}>
                        <Select >
                            {selectType.map((el) => {
                                return (
                                    <Option value={el?.value} key={el?.value}>
                                        {el?.label}
                                    </Option>
                                );
                            })}
                        </Select>
                    </Form.Item>
                )}
                <Form.Item >
                    <Space>
                        <Button type="primary" htmlType="submit">查询</Button>
                        <Button type="primary" onClick={() => {
                            if (onlyId == 'company' || onlyId == 'account' || onlyId == 'role') {
                                props.onAdd();
                            }
                        }}>新增</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
};

export default TableCondition;
