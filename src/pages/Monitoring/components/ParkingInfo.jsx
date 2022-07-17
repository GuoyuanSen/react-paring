import React, { createElement, useMemo } from 'react';
import { Select, Input, Modal, Row, Col, Tabs, Form, Button, Table } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';
import { SearchItem, PassItem } from './ParkingMessage';
import { formatSeconds } from '@/utils/utils';

const licensePlateTypes = ['蓝牌', '黄牌', '新能源', '黑牌', '其他'];

const comeTime = '2021-12-31 13:13:21';
const leaveTime = '2021-12-31 17:22:21';

const ParkingInfo = React.memo(function ParkingInfo() {
  const recordColumns = useMemo(() => {
    return [
      { title: '车牌号码', dataIndex: 'licensePlateNumber', key: 'licensePlateNumber' },
      { title: '车辆类型', dataIndex: 'type', key: 'type' },
      { title: '状态', dataIndex: 'status', key: 'status' },
      { title: '进场时间', dataIndex: 'comeTime', key: 'comeTime' },
      { title: '出场时间', dataIndex: 'leaveTime', key: 'leaveTime' },
      {
        title: '停车时长',
        dataIndex: '停车时长',
        key: '停车时长',
        render: (_, record) => {
          const leaveTime = new Date(record.leaveTime).getTime();
          const comeTime = new Date(record.comeTime).getTime();
          const _value = leaveTime - comeTime;
          return formatSeconds(_value / 1000);
        },
      },
    ];
  }, []);
  const recordData = useMemo(() => {
    return [
      {
        licensePlateNumber: '京B12345',
        type: '临时停车',
        status: '待入场',
        comeTime: comeTime,
        leaveTime: leaveTime,
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
            停车记录
          </span>
          <Table
            style={{
              flex: 1,
              minHeight: 0,
            }}
            dataSource={recordData}
            columns={recordColumns}
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
            临停订单
          </span>
          <Table
            style={{
              flex: 1,
              minHeight: 0,
            }}
            dataSource={recordData}
            columns={recordColumns}
            pagination={false}
          />
        </div>
      </div>

      <PassItem />
    </div>
  );
});

export default ParkingInfo;
