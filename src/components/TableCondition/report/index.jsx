import React, { useState, useEffect } from 'react';
import moment from 'moment';
import { Button, Form, DatePicker, Space, Select, Radio, Input } from 'antd';


const TableCondition = (props) => {
    const [form] = Form.useForm();
    const { Option } = Select;
    const { RangePicker } = DatePicker;
    const [selectTime, setselectTime] = useState(0);
    const { onlyId, typeList = [], isAdd } = props;
    console.log('TableCondition===>', props)
    let timelabel = '';
    if (props.onlyId == 'class') {
        timelabel = "当班日期"
    } else if (props.onlyId == 'releaseRecords') {
        timelabel = "异常发生时间"
    } else if (props.onlyId == 'problemRecord') {
        timelabel = "反馈时间"
    } else if (props.onlyId == 'anomalousevent') {
        timelabel = "查询时间"
    } else {
        timelabel = "统计时间"
    }
    function disabledDate(current) {
        return current && current > moment().subtract(1, 'days').endOf('day');
    }
    return (
        <>
            <Form name="searchform" layout='inline' form={form}>
                {(props.onlyId == 'exception' ||
                    props.onlyId == 'classInfo' ||
                    props.onlyId == 'releaseRecords' ||
                    props.onlyId == 'anomalousevent' ||
                    props.onlyId == 'problemRecord'
                ) && (
                        <Form.Item name="typeId" label="停车场名称" style={{ width: '250px' }}>
                            <Select showSearch>
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
                        </Form.Item>
                    )}
                {(props.onlyId == 'classInfo' || props.onlyId == 'anomalousevent') && (
                    <Form.Item name="typeId" label="事件类型" style={{ width: '200px' }}>
                        <Select showSearch>
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
                    </Form.Item>
                )}
                {props.onlyId == 'anomalousevent'  && (
                    <Form.Item name="typeId" label="操作类型" style={{ width: '200px' }}>
                        <Select showSearch>
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
                    </Form.Item>
                )}
                {props.onlyId == 'problemRecord' && (
                    <Form.Item name="typeId" label="反馈渠道" style={{ width: '250px' }}>
                        <Select showSearch>
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
                    </Form.Item>
                )}
                {(props.onlyId == 'baily' || props.onlyId == 'class') && (
                    <Form.Item name="typeId" label="客服中心" style={{ width: '250px' }}>
                        <Select showSearch>
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
                    </Form.Item>
                )}
                {props.onlyId == 'class' && (
                    <Form.Item name="typeId" label="客服人员" style={{ width: '250px' }}>
                        <Select showSearch>
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
                    </Form.Item>
                )}
                {props.onlyId == 'releaseRecords' && (
                    <Form.Item name="typeId" label="异常放行类型" style={{ width: '250px' }}>
                        <Select showSearch>
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
                    </Form.Item>
                )}
                {(props.onlyId !== 'exceptioninfo' &&
                    props.onlyId !== 'classInfo'
                ) && (
                        <Form.Item name="rangeTime" label={`${timelabel}`} >
                            <RangePicker
                                allowClear={false}
                                style={{
                                    width: 220,
                                }}
                                disabledDate={disabledDate}
                                onCalendarChange={(val) => setDates(val)}
                                onChange={(oldValue, newValue) => {
                                    if (newValue && newValue[1] == moment().format('YYYY-MM-DD')) {
                                        form.setFieldsValue({
                                            rangeTime: [moment(newValue[0]), moment().subtract(1, 'days')],
                                        });
                                    }
                                    form.setFieldsValue({ isToDay: 3 });
                                }}
                            />

                        </Form.Item>
                    )}
                {props.onlyId == 'exceptioninfo' && (
                    <>
                        <Form.Item name="typeId" label="异常分类" style={{ width: '250px' }}>
                            <Select showSearch>
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
                        </Form.Item>
                        <Form.Item name="typeId" label="异常原因" style={{ width: '350px' }}>
                            <Select showSearch>
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
                        </Form.Item>
                    </>

                )}

                {(props.onlyId == 'releaseRecords' || props.onlyId == 'anomalousevent') && (
                    <Form.Item name="typeId" label="车牌号码" style={{ width: '180px' }}>
                        <Input placeholder='输入车牌号码' />
                    </Form.Item>
                )}


                <Form.Item >
                    <Space>
                        <Button type="primary" onClick={() => {
                            props.onSearch();
                        }}>查询</Button>
                        {props.onlyId == 'problemRecord' && (
                            <Button type="primary" onClick={() => {

                            }}>新增</Button>
                        )}
                        <Button type="primary" onClick={() => {
                            props.onExport();
                        }}>导出</Button>
                    </Space>
                </Form.Item>
            </Form>
        </>
    )
};

export default TableCondition;
