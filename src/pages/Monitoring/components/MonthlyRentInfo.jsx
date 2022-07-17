import React, { createElement, useMemo } from 'react';
import { Select, Input, Modal, Row, Col, Tabs, Form, Button, Table } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { SearchItem, PassItem } from './ParkingMessage';
import { formatSeconds } from '@/utils/utils';

const licensePlateTypes = ['蓝牌', '黄牌', '新能源', '黑牌', '其他'];

const comeTime = '2021-12-31 13:13:21';
const leaveTime = '2021-12-31 17:22:21';

const MonthlyRentInfo = React.memo(function MonthlyRentInfo() {
  const monthlyRentColumns = useMemo(() => {
    return [
      { title: '客户姓名', dataIndex: 'name' },
      { title: '联系电话', dataIndex: 'phone' },
      { title: '月租规则', dataIndex: 'type' },
      { title: '月租开始时间', dataIndex: 'comeTime' },
      { title: '月租结束时间', dataIndex: 'leaveTime' },
      {
        title: '允许超期天数',
        dataIndex: 'overDays',
      },
      {
        title: '占用车位数',
        dataIndex: 'parkingLotCount',
      },
      {
        title: '车牌数量',
        dataIndex: 'licensePlateCount',
      },
    ];
  }, []);
  const monthlyRentData = useMemo(() => {
    return [
      {
        name: '李小四',
        phone: '13800000000',
        type: '工作日日租',
        comeTime: comeTime,
        leaveTime: leaveTime,
        overDays: 5,
        parkingLotCount: 1,
        licensePlateCount: 1,
      },
    ];
  }, []);
  const orderColumns = useMemo(() => {
    return [
      { title: '月租开始时间', dataIndex: 'comeTime' },
      { title: '月租结束时间', dataIndex: 'leaveTime' },
      {
        title: '占用车位数',
        dataIndex: 'parkingLotCount',
      },
      {
        title: '办理时间',
        dataIndex: 'createTime',
      },
      {
        title: '支付状态',
        dataIndex: 'payStatus',
      },
      {
        title: '审核状态',
        dataIndex: 'status',
      },
    ];
  }, []);
  const orderData = useMemo(() => {
    return [
      {
        parkingLotCount: 1,
        payStatus: '已支付',
        status: '已审核',
        comeTime: comeTime,
        leaveTime: leaveTime,
        createTime: comeTime,
      },
    ];
  }, []);
  const trafficColumns = useMemo(() => {
    return [
      {
        title: '车牌号',
        dataIndex: 'licensePlateNumber',
      },
      { title: '入场时间', dataIndex: 'comeTime' },
      { title: '身份转换时间', dataIndex: 'time' },
      { title: '出场时间', dataIndex: 'leaveTime' },
      {
        title: '计费时长',
        dataIndex: 'payTime',
        render: (_, record) => {
          const leaveTime = new Date(record.leaveTime).getTime();
          const comeTime = new Date(record.comeTime).getTime();
          const _value = leaveTime - comeTime;
          return formatSeconds(_value / 1000);
        },
      },
      {
        title: '说明',
        dataIndex: 'description',
      },
    ];
  }, []);
  const trafficData = useMemo(() => {
    return [
      {
        licensePlateNumber: '京B12345',
        comeTime: comeTime,
        leaveTime: leaveTime,
        time: leaveTime,
        description: '月租身份',
      },
    ];
  }, []);
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '20px',
      }}
    >
      <SearchItem />
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          flex: 1,
          rowGap: '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
          }}
        >
          <span style={{ fontSize: '22px' }} title="停车记录">
            月租信息
          </span>
          <Table
            style={{
              flex: 1,
              minHeight: 0,
              display: 'flex',
              overflow: 'hidden',
            }}
            dataSource={monthlyRentData}
            columns={monthlyRentColumns}
            pagination={false}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
          }}
        >
          <span style={{ fontSize: '22px' }} title="临停订单">
            订单信息
          </span>
          <Table
            style={{
              flex: 1,
              minHeight: 0,
              display: 'flex',
              overflow: 'hidden',
            }}
            dataSource={orderData}
            columns={orderColumns}
            pagination={false}
          />
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            minHeight: 0,
          }}
        >
          <span style={{ fontSize: '22px' }} title="临停订单">
            关联车辆
          </span>
          <Table
            style={{
              flex: 1,
              minHeight: 0,
              display: 'flex',
              overflow: 'hidden',
            }}
            dataSource={trafficData}
            columns={trafficColumns}
            pagination={false}
          />
        </div>
      </div>

      <PassItem />
    </div>
  );
});

export default MonthlyRentInfo;
