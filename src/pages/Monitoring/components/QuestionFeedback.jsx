import React, { useCallback } from 'react';
import { Input, Radio, Modal, Row, Col, Tabs, Form, Button } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

export default React.memo(function QuestionFeedback() {
  // { name?: string; phone?: string; description?: string }
  const [form] = Form.useForm();
  const onSubmit = useCallback(() => {
    const values = form.validateFields();
    // todo 提交
  }, [form]);
  return (
    <Form form={form} layout="vertical" onFinish={onSubmit}>
      <Form.Item
        name="name"
        label="反馈人"
        style={{
          maxWidth: '300px',
        }}
        rules={[
          {
            max: 256,
            message: '最大可输入256个字符',
          },
          {
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="请输入反馈人" />
      </Form.Item>
      <Form.Item
        name="phone"
        label="联系方式"
        style={{
          maxWidth: '300px',
        }}
        rules={[
          {
            max: 256,
            message: '最大可输入256个字符',
          },
          {
            whitespace: true,
          },
        ]}
      >
        <Input placeholder="请输入联系方式" />
      </Form.Item>
      <Form.Item
        name="description"
        label="问题描述"
        style={{
          maxWidth: '300px',
        }}
        rules={[
          {
            required: true,
          },
          {
            max: 256,
            message: '最大可输入256个字符',
          },
          {
            whitespace: true,
          },
        ]}
      >
        <Input.TextArea placeholder="请输入问题描述" />
      </Form.Item>
      <Button htmlType="submit" type="primary">
        提交
      </Button>
    </Form>
  );
});
