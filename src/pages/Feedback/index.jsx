/**
 * 呼叫策略设置
 */
import React, { useState, useEffect } from 'react';
import ParkingLot from "../../components/ParkingLot"
import { Select, Form, Button, Radio, DatePicker,Checkbox,Input } from 'antd';
import stycs from './index.less';

const layout = {
    labelCol: { span: 6 },
    wrapperCol: { span: 18 },
};

const tailLayout = {
    wrapperCol: {
      offset: 6,
      span: 18,
    },
  };

const CallStrategy = () => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    const [typeList, setTypeList] = useState([]);
    const [value, setValue] = useState(1);
    const [parkHegiht, setParkHegiht] = useState('calc(100vh - 205px)');//table 最大高度
    const onChange = (e) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };
    return (
        <div className={stycs.sallstrategy}>
            <div className={stycs.leftcontent}>
                <ParkingLot height={parkHegiht} />
            </div>
            <div className={stycs.rightcontent}>
                <Form {...layout} name="form" form={form}>
                    <Form.Item name="typeId" label="停车场名称" >
                        北京测试停车场1
                    </Form.Item>
                    <Form.Item name="typeId" label="是否接入云客服" >
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>是</Radio>
                            <Radio value={2}>否</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item name="typeId" label="云客服托管模式" >
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>全托管</Radio>
                            <Radio value={2}>半托管</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="呼叫策略配置" >

                        <Form.Item>
                            <Checkbox onChange={onChange}>
                                呼叫自动请求【北京区域云客服中心】 ，呼叫等待 
                                <Select showSearch style={{ width: '80px',marginLeft:'5px' }}>
                                    <Option value='0' key='0'>
                                        全部
                                    </Option>
                                    {typeList.map((el) => {
                                        return (
                                            <Option value={el?.categoryId} key={el?.categoryId}>
                                                {el?.categoryName}
                                            </Option>
                                        );
                                    })}
                                </Select> 秒，呼叫转移至 
                                <Select showSearch style={{ width: '160px',marginLeft:'5px' }}>
                                    <Option value='0' key='0'>
                                        全部
                                    </Option>
                                    {typeList.map((el) => {
                                        return (
                                            <Option value={el?.categoryId} key={el?.categoryId}>
                                                {el?.categoryName}
                                            </Option>
                                        );
                                    })}
                                </Select>
                            </Checkbox>
                        </Form.Item>
                        <Form.Item>
                            <Checkbox onChange={onChange}>
                                呼叫自动请求【北京区域云客服中心】 ，呼叫等待 
                                <Select showSearch style={{ width: '80px',marginLeft:'5px' }}>
                                    <Option value='0' key='0'>
                                        全部
                                    </Option>
                                    {typeList.map((el) => {
                                        return (
                                            <Option value={el?.categoryId} key={el?.categoryId}>
                                                {el?.categoryName}
                                            </Option>
                                        );
                                    })}
                                </Select> 秒，自动挂机；
                            </Checkbox>
                        </Form.Item>

                    </Form.Item>
                    <Form.Item name="typeId" label="半托管策略模式" >
                        <Radio.Group onChange={onChange} value={value}>
                            <Radio value={1}>固定时间</Radio>
                            <Radio value={2}>本地端控制</Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label="半托管固定时间" >
                        <div className={stycs.rowinfo}>
                            <Form.Item style={{ width: '200px' }}>
                                <Select showSearch>
                                    <Option value='0' key='0'>整周</Option>
                                    <Option value='1' key='1'>周一至周五</Option>
                                    <Option value='2' key='2'>工作日</Option>
                                </Select>
                            </Form.Item>
                            <Form.Item style={{ padding: '0 10px' }}>
                                <RangePicker showTime />
                            </Form.Item>
                            <Form.Item >
                                <span className={stycs.rowbtn}> 增加</span>
                            </Form.Item>
                        </div>

                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button type="primary">保存</Button>
                    </Form.Item>
                </Form>
            </div>
        </div>
    )
};

export default CallStrategy;
